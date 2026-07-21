import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getProjectName, updateProjectName, getStorageProviderSetting, updateStorageProviderSetting } from "@/app/actions/setting-actions";
import { CollapsibleCard } from "@/components/ui/collapsible-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { ClientForm } from "@/components/ui/client-form";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  // Protect route: Only ADMIN can access settings
  if (!session?.user?.email || session.user.role !== "ADMIN") {
    redirect("/cms-admin/dashboard");
  }

  const currentProjectName = await getProjectName();
  const currentStorageProvider = await getStorageProviderSetting();

  return (
    <div className="space-y-5 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Project Settings</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Configure global application settings and branding.
        </p>
      </div>

      <CollapsibleCard
        title="Global Branding"
        description="This name will be displayed in the sidebar, login screen, and browser tabs."
        cardClassName="shadow-none border-indigo-100 dark:border-indigo-900/50"
        headerClassName=""
        titleClassName="text-indigo-900 dark:text-indigo-300"
      >
        <ClientForm action={updateProjectName} className="space-y-4">
          <div className="space-y-1.5 max-w-sm">
            <Label htmlFor="projectName" className="text-xs font-semibold">Project Name</Label>
            <Input
              id="projectName"
              name="projectName"
              defaultValue={currentProjectName}
              placeholder="e.g. CMS-Cybertronium, Aviation Hub, etc."
              className="h-9 text-sm"
              required
            />
          </div>

          <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900 p-3 rounded-md border border-slate-100 dark:border-slate-800">
            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <div className="text-[11px] text-slate-600 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-300 mb-0.5">Instant Application</p>
              Changing this setting updates the UI globally across all dashboards instantly.
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" size="sm">Save Configuration</Button>
          </div>
        </ClientForm>
      </CollapsibleCard>

      <CollapsibleCard
        title="Storage Provider"
        description="Select where uploaded media assets should be stored."
        cardClassName="shadow-none border-slate-200 dark:border-slate-800"
        headerClassName=""
        titleClassName="text-indigo-900 dark:text-indigo-300"
      >
        <ClientForm action={updateStorageProviderSetting} className="space-y-4">
          <div className="space-y-1.5 max-w-sm">
            <Label htmlFor="storageProvider" className="text-xs font-semibold">Active Provider</Label>
            <select
              id="storageProvider"
              name="storageProvider"
              defaultValue={currentStorageProvider}
              className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <option value="database">MariaDB (BLOB)</option>
              <option value="local" disabled>Local Storage (Contact Admin/Support)</option>
              <option value="cloudinary" disabled>Cloudinary (Contact Admin/Support)</option>
            </select>
          </div>
          <p className="text-[11px] text-slate-500">
            MariaDB requires no extra configuration and is currently enabled. 
            For Local Storage or Cloudinary configuration, please contact Admin/Support.
          </p>
          <div className="flex justify-end pt-2">
            <Button type="submit" size="sm">Save Provider</Button>
          </div>
        </ClientForm>
      </CollapsibleCard>
    </div>
  );
}
