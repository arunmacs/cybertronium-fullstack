"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function getUsers() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") throw new Error("Unauthorized");
  return prisma.user.findMany({
    where: { deletedAt: null },
  });
}

export async function createUser(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return { error: "Unauthorized" };

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;


  if (!email || !password) return { error: "Email and password are required." };
  if (password.length < 8) return { error: "Password must be at least 8 characters." };

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: `User with email "${email}" already exists.` };

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      name: name || null,
      email,
      passwordHash,
      role: role || "EDITOR",
    },
  });

  revalidatePath("/cms-admin/dashboard/users");
  return { success: true };
}

export async function updateUserRole(userId: string, role: string) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") throw new Error("Unauthorized");

  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  revalidatePath("/cms-admin/dashboard/users");
}

export async function deleteUser(userId: string): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return { error: "Unauthorized: Only administrators can delete users." };

  // Prevent self-deletion
  const me = await prisma.user.findUnique({ where: { email: session?.user?.email! } });
  if (me?.id === userId) return { error: "You cannot delete your own account." };

  await prisma.user.update({
    where: { id: userId },
    data: { deletedAt: new Date() }
  });
  revalidatePath("/cms-admin/dashboard/users");
}

/**
 * Returns all users who can author posts
 */
export async function getAllUsers() {
  return prisma.user.findMany({
    where: {
      deletedAt: null,
    },
    select: { id: true, name: true, email: true, image: true },
    orderBy: { name: "asc" },
  });
}

/** Logged-in user updates their own author profile */
export async function updateProfile(formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const name = formData.get("name") as string;
  const bio = (formData.get("bio") as string) || null;
  const image = (formData.get("image") as string) || null;
  const website = (formData.get("website") as string) || null;
  const twitter = (formData.get("twitter") as string) || null;
  const linkedin = (formData.get("linkedin") as string) || null;
  const github = (formData.get("github") as string) || null;
  const newPassword = formData.get("newPassword") as string;

  const dataToUpdate: any = { name: name || null, bio, image, website, twitter, linkedin, github };

  if (newPassword) {
    if (newPassword.length < 8) return { error: "Password must be at least 8 characters long." };
    dataToUpdate.passwordHash = await bcrypt.hash(newPassword, 12);
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: dataToUpdate,
  });

  revalidatePath("/cms-admin/dashboard/profile");
  revalidatePath("/cms-admin/dashboard", "layout");
  redirect("/cms-admin/dashboard/profile");
}

/** Admin updates another user's profile */
export async function adminUpdateUser(userId: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const bio = (formData.get("bio") as string) || null;
  const image = (formData.get("image") as string) || null;
  const website = (formData.get("website") as string) || null;
  const twitter = (formData.get("twitter") as string) || null;
  const linkedin = (formData.get("linkedin") as string) || null;
  const github = (formData.get("github") as string) || null;
  const role = formData.get("role") as string;


  await prisma.user.update({
    where: { id: userId },
    data: {
      name: name || null,
      bio,
      image,
      website,
      twitter,
      linkedin,
      github,
      role: role || "EDITOR",
    },
  });

  revalidatePath("/cms-admin/dashboard/users");
}

export async function adminUpdateRole(userId: string, formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return { error: "Unauthorized: You must be an admin to change roles." };

  const role = formData.get("role") as string;


  await prisma.user.update({
    where: { id: userId },
    data: {
      role: role || "EDITOR",
    },
  });

  revalidatePath("/cms-admin/dashboard/users");
  redirect("/cms-admin/dashboard/users");
}
