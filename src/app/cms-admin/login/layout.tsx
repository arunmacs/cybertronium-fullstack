import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Server-side layout for the login page.
 * If a user with a valid session attempts to visit the login page,
 * they are instantly bounced back to the dashboard.
 */
export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  if (session?.user) {
    redirect("/cms-admin/dashboard");
  }

  return <>{children}</>;
}
