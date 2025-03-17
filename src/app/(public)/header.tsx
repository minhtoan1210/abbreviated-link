import { Menu, ChevronDown  } from "lucide-react";
import "./header.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NavItems from "./nav-items";
import Link from "next/link";
import LanguagesSelect from "./languagesSelect";
export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <img src="/images/cuttly.svg" alt="" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-[0]">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white mt-4">
                  <DropdownMenuItem className="grid">
                    <NavItems className="text-dropdown-menu" />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="header-btn">
              <Link href="/" className="btn-pricing f18-ls6">
                Pricing
              </Link>
              <Link href="/login" className="btn-login f18-ls6">
                Log in
              </Link>
              <Link href="/register" className="btn-signup f18-ls6">
                Sign up
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-[0] languages">
                    <span>EN</span> <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white mt-4">
                  <DropdownMenuItem className="grid">
                    <LanguagesSelect className="text-dropdown-menu" />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
