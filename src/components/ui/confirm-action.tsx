"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Trash2 } from "lucide-react";

interface ConfirmActionProps {
  action: () => any | Promise<any>;
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "ghost" | "destructive" | "outline" | "default";
  icon?: React.ReactNode;
  className?: string;
  /** When provided, the user must type this exact text to enable the confirm button (GitHub-style). */
  confirmText?: string;
  /** Label shown above the confirmation input, e.g. "post title". Defaults to "value". */
  confirmLabel?: string;
  disabled?: boolean;
}

export function ConfirmAction({
  action,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your data from our servers.",
  buttonText = "Delete",
  variant = "ghost",
  icon = <Trash2 className="w-4 h-4 mr-1.5" />,
  className = "h-7 px-2 text-[11px] text-red-500 hover:text-red-700",
  confirmText,
  confirmLabel = "value",
  disabled = false,
}: ConfirmActionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [typedValue, setTypedValue] = useState("");

  const needsTextConfirm = !!confirmText;
  const isMatch = !needsTextConfirm || typedValue === confirmText;

  const handleOpen = () => {
    setTypedValue("");
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTypedValue("");
  };

  const handleConfirm = async () => {
    if (!isMatch) return;
    setIsPending(true);
    try {
      await action();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred while confirming this action.");
    } finally {
      setIsPending(false);
      setTypedValue("");
    }
  };

  return (
    <>
      <Button
        type="button"
        variant={variant as any}
        size="sm"
        className={className}
        onClick={handleOpen}
        disabled={disabled}
      >
        {icon}
        {buttonText}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold tracking-tight text-left">{title}</h3>
                <p className="text-sm text-slate-500 mt-1 text-left text-wrap">{description}</p>

                {needsTextConfirm && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-slate-500 text-left">
                      To confirm, type{" "}
                      <span className="font-semibold text-slate-700 dark:text-slate-300 whitespace-pre-line">
                        {confirmText}
                      </span>{" "}
                      below:
                    </p>
                    <Input
                      type="text"
                      value={typedValue}
                      onChange={(e) => setTypedValue(e.target.value)}
                      placeholder={`Enter the ${confirmLabel} to confirm`}
                      className="h-9 text-sm border-red-200 dark:border-red-800 focus-visible:ring-red-500"
                      autoFocus
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleClose}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleConfirm}
                disabled={isPending || !isMatch}
              >
                {isPending ? "Processing..." : "Confirm"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
