"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PiggyBank,
  Users,
  CreditCard,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { name: "Groups", href: "/dashboard/groups", icon: Users },
  { name: "Expenses", href: "/dashboard/expenses", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    await supabase.auth?.signOut();
    router.push("/");
  };

  return (
    <TooltipProvider>
      <div className="flex h-screen flex-col border-r bg-white">
        {/* Logo */}
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <PiggyBank className="h-6 w-6" />
            <span className="hidden md:inline">SplitSmart</span>
          </Link>
        </div>

        {/* Sidebar Items */}
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-2 p-4">
            {sidebarItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "justify-start",
                      "md:w-full w-12 h-12 p-0 flex items-center",
                      pathname === item.href && "bg-muted"
                    )}
                    asChild
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-center md:justify-start gap-2"
                    >
                      <item.icon className="h-6 w-6" />
                      <span className="hidden md:inline">{item.name}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </ScrollArea>

        {/* Logout Button */}
        <div className="border-t p-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="md:w-full w-12 h-12 p-0 flex items-center justify-center"
                onClick={handleLogout}
              >
                <LogOut className="h-6 w-6" />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
