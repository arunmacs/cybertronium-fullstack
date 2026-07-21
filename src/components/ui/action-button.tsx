"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
        console.error("Action failed:", error);
        alert("An error occurred while performing this action. Please check the console or try again later.");
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
