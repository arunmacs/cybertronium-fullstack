"use client";

import { useActionState, useState } from "react";
import { createUser } from "@/app/actions/user-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const ROLES = ["ADMIN", "EDITOR", "AUTHOR"];

const selectClass =
  "flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-800 dark:bg-slate-950";

type State = { error?: string; success?: boolean } | null;

const initialState: State = null;

async function createUserAction(_prev: State, formData: FormData): Promise<State> {
  const result = await createUser(formData);
  return result ?? null;
}

export function InviteUserForm() {
  const [state, formAction, isPending] = useActionState(createUserAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="space-y-3">
      {state?.error && (
        <div className="rounded-md bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="rounded-md bg-green-50 border border-green-200 text-green-700 text-xs px-3 py-2">
          ✓ User created successfully.
        </div>
      )}

      <div className="space-y-1">
        <Label htmlFor="u-name" className="text-xs">Full Name</Label>
        <Input id="u-name" name="name" placeholder="Jane Smith" className="h-9 text-sm" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="u-email" className="text-xs">Email *</Label>
        <Input id="u-email" name="email" type="email" required placeholder="jane@example.com" className="h-9 text-sm" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="u-pass" className="text-xs">Temporary Password *</Label>
        <div className="relative">
          <Input 
            id="u-pass" 
            name="password" 
            type={showPassword ? "text" : "password"} 
            required 
            placeholder="Min 8 chars" 
            className="h-9 text-sm pr-9" 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="u-role" className="text-xs">Role</Label>
        <select id="u-role" name="role" className={selectClass}>
          {ROLES.map((r: any) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <Button type="submit" size="sm" className="w-full" disabled={isPending}>
        {isPending ? "Creating..." : "Create User"}
      </Button>
    </form>
  );
}
