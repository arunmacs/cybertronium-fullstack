"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MobileNavProps {
  children: React.ReactNode;
}

export function MobileNav({ children }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon-sm" className="lg:hidden mr-2">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        }
      />
      <SheetContent side="left" className="p-0 w-56 border-none">
        <div 
          className="h-full" 
          onClick={(e) => {
            const target = e.target as HTMLElement;
            // Only close the drawer if the click wasn't on a button 
            // (to allow confirmation modals like Sign Out to work)
            if (!target.closest('button')) {
              setOpen(false);
            }
          }}
        >
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
