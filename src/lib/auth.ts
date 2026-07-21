import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const useSecureCookies = process.env.NEXTAUTH_URL?.startsWith('https://') ?? process.env.NODE_ENV === 'production';
const cookiePrefix = process.env.PROJECT_ID ? `${process.env.PROJECT_ID}-` : "";
const sessionCookieName = useSecureCookies
  ? `__Secure-${cookiePrefix}next-auth.session-token`
  : `${cookiePrefix}next-auth.session-token`;

export const authOptions: NextAuthOptions = {
  cookies: {
    sessionToken: {
      name: sessionCookieName,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
      },
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/cms-admin/login', // Custom login page
  },
  providers: [
    EmailProvider({
      sendVerificationRequest: async ({ identifier: email, url }) => {
        // Fetch user's name for the email template
        const user = await prisma.user.findUnique({ where: { email } });
        const requesting_name = user?.name || "User";

        // ---------------------------------------------------------
        // 1. Primary Strategy: Nodemailer (SMTP Server)
        // ---------------------------------------------------------
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
          try {
            const transport = nodemailer.createTransport({
              host: process.env.SMTP_HOST,
              port: Number(process.env.SMTP_PORT) || 587,
              secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
              },
            });

            const adminEmail = process.env.ADMIN_EMAIL || "cybertronium.ind@gmail.com";
            
            const html = `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
                <h2 style="color: #ca1c69; text-align: center;">Admin Alert: Login Link Requested</h2>
                <p style="color: #333; font-size: 16px;">Hello Admin,</p>
                <p style="color: #555; font-size: 15px; line-height: 1.5;">
                  A user has requested a secure magic link to log into the Cybertronium CMS.
                </p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
                  <p style="margin: 0; color: #333;"><strong>User Name:</strong> ${requesting_name}</p>
                  <p style="margin: 5px 0 0 0; color: #333;"><strong>User Email:</strong> ${email}</p>
                </div>
                <p style="color: #555; font-size: 15px;">
                  Please verify this user's identity. If authorized, you may share the following one-time link with them securely:
                </p>
                <div style="background: #eef2f5; padding: 15px; word-break: break-all; border-radius: 6px; font-family: monospace; color: #0056b3; margin-bottom: 20px;">
                  ${url}
                </div>
                <p style="color: #777; font-size: 12px; text-align: center;">
                  This link expires securely in 24 hours. Do not click the link yourself as it will consume the one-time token.
                </p>
              </div>
            `;

            await transport.sendMail({
              to: adminEmail, // Strict Security: Send only to Admin
              from: process.env.EMAIL_FROM || "no-reply@cybertronium.com",
              subject: `[Auth Request] Login link requested by ${email}`,
              html: html,
              text: `Admin Alert: Login Link Requested\n\nA user has requested a secure magic link to log into the Cybertronium CMS.\n\nUser Name: ${requesting_name}\nUser Email: ${email}\n\nPlease verify this user's identity. If authorized, you may share the following one-time link with them securely:\n\n${url}\n\nThis link expires securely in 24 hours. Do not click the link yourself as it will consume the one-time token.`,
            });

            console.log("Magic Link successfully sent via Nodemailer (SMTP)");
            return; // Exit successfully
          } catch (error) {
            console.error("Nodemailer Delivery Failed:", error);
            console.warn("Falling back to EmailJS after SMTP failure...");
          }
        } else {
          console.warn("SMTP credentials not found. Falling back to EmailJS...");
        }

        // ---------------------------------------------------------
        // 2. Fallback Strategy: EmailJS (Free Tier Limit)
        // ---------------------------------------------------------
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_MAGIC_LINK_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          console.error("EmailJS credentials missing. Cannot send Magic Link.");
          return;
        }

        try {
          const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Origin": process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com" 
            },
            body: JSON.stringify({
              service_id: serviceId,
              template_id: templateId,
              user_id: publicKey,
              template_params: {
                name: "Cybertronium CMS Admin",
                email: email,
                message: `Admin Alert: Login Link Requested\n\nA user has requested a secure magic link to log into the Cybertronium CMS.\n\nUser Name: ${requesting_name}\nUser Email: ${email}\n\nPlease verify this user's identity. If authorized, you may share the following one-time link with them securely:\n\n${url}\n\nThis link expires securely in 24 hours. Do not click the link yourself as it will consume the one-time token.`,
              },
            }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error("EmailJS API Error:", errorText);
            throw new Error("Failed to send Magic Link via EmailJS");
          }
        } catch (error) {
          console.error("Magic Link Delivery Failed:", error);
          throw new Error("Failed to send Magic Link");
        }
      },
      maxAge: 24 * 60 * 60, // Enforce strict 24-hour expiration (86400 seconds)
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user.passwordHash) {
          throw new Error("Invalid credentials");
        }

        // Block soft-deleted / revoked accounts at login
        if (user.deletedAt !== null) {
          throw new Error("AccountRevoked");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, email }) {
      if (account?.provider === "email") {
        const emailAddress = user.email || (email?.verificationRequest && user.email);
        if (!emailAddress) return false;

        const existingUser = await prisma.user.findUnique({
          where: { email: emailAddress }
        });

        // SEAL: Reject the authentication event completely if the user doesn't exist
        // or has been soft deleted. Meaning public internet users cannot auto-generate
        // ghost accounts via the Magic Link API.
        if (!existingUser || existingUser.deletedAt !== null) {
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        // STRICT SECURITY: Always verify user against DB to catch instant deletions/role changes
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { role: true, deletedAt: true }
        });

        // Instant Invalidation: If user is deleted or missing, destroy their session context
        if (!dbUser || dbUser.deletedAt !== null) {
          return {} as any;
        }

        // Live Role/Access Sync
        if (session.user) {
          session.user.role = dbUser.role;
          session.user.id = token.id as string;
        }
      }
      return session;
    }
  }
};
