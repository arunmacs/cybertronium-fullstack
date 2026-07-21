"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProjectName(): Promise<string> {
  try {
    const setting = await prisma.setting.findUnique({
      where: { key: "projectName" }
    });
    return setting?.value || "CMS-Cybertronium";
  } catch (error) {
    return "CMS-Cybertronium";
  }
}

export async function updateProjectName(formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email || session.user.role !== "ADMIN") {
    return { error: "Unauthorized: You must be an admin to change the project name." };
  }

  const newName = formData.get("projectName") as string;
  if (!newName || !newName.trim()) {
    return { error: "Project name cannot be empty." };
  }

  try {
    await prisma.setting.upsert({
      where: { key: "projectName" },
      update: { value: newName.trim() },
      create: { key: "projectName", value: newName.trim() }
    });
    
    revalidatePath("/", "layout");
  } catch (error) {
    console.error("[updateProjectName]", error);
    return { error: "An unexpected error occurred while updating the project name. Please try again." };
  }
  
  redirect("/cms-admin/dashboard/settings");
}

export async function getStorageProviderSetting(): Promise<string> {
  try {
    const setting = await prisma.setting.findUnique({
      where: { key: "storageProvider" }
    });
    return setting?.value || "local";
  } catch (error) {
    return "local";
  }
}

export async function updateStorageProviderSetting(formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email || session.user.role !== "ADMIN") {
    return { error: "Unauthorized: You must be an admin to change the storage provider." };
  }

  const newProvider = formData.get("storageProvider") as string;
  if (!newProvider || !newProvider.trim()) {
    return { error: "Storage provider cannot be empty." };
  }

  try {
    await prisma.setting.upsert({
      where: { key: "storageProvider" },
      update: { value: newProvider.trim() },
      create: { key: "storageProvider", value: newProvider.trim() }
    });
    
    revalidatePath("/", "layout");
  } catch (error) {
    console.error("[updateStorageProviderSetting]", error);
    return { error: "An unexpected error occurred while updating the storage provider. Please try again." };
  }
  
  redirect("/cms-admin/dashboard/settings");
}
