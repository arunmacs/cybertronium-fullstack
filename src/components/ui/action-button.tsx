"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { isRedirectError } from "next/dist/client/components/redirect-error";

interface ActionButtonProps extends Omit<React.ComponentProps<typeof Button>, "onClick"> {
  action: () => Promise<any>;
  label: React.ReactNode;
  loadingLabel?: React.ReactNode;
}

export function ActionButton({
  action,
  label,
  loadingLabel = "Processing...",
  className,
  variant,
  size,
  disabled,
  title,
  ...props
}: ActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      try {
        await action();
      } catch (error) {
        // Let Next.js handle its own redirect errors (e.g. session expiry → login)
        if (isRedirectError(error)) throw error;
        console.error("Action failed:", error);
        toast.error("Action failed", {
          description: "Something went wrong while performing this action. Please try again.",
        });
      }
    });
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      title={title}
      disabled={isPending || disabled}
      onClick={handleClick}
      {...props}
    >
      {isPending && <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />}
      {isPending ? loadingLabel : label}
    </Button>
  );
}

