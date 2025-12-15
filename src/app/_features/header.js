import { LogoVertical } from "@/app/_components/LogoVertical.js";
import { LocationIcon } from "../_icons/LocationIcon";
import { ChevronRight } from "../_icons/ChevronRight";
import { ShoppingCartIcon } from "../_icons/ShoppingCartIcon";
import { UserIcon } from "../_icons/UserIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <div className="w-auto h-17 bg-[#18181B] flex justify-between px-22 items-center">
      <LogoVertical />
      <div className="w-[348.6px] h-9 flex gap-3">
        <div className="w-[251px] bg-[#FFFFFF] h-9 rounded-full px-3 flex items-center justify-between">
          <LocationIcon />
          <p className="text-[#EF4444] font-normal text-[12px]">
            Delivery address:
          </p>
          <p className="text-[#71717A] font-normal text-[12px]">Add Location</p>
          <ChevronRight />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-9 bg-[#FFFFFF] h-9 rounded-full flex justify-center items-center">
              <ShoppingCartIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[535px] h-256 bg-[#404040] rounded-xl p-8 flex flex-col text-white">
            <DropdownMenuLabel className="text-[20px] font-semibold mb-4">
              Your Cart
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <p className="text-[14px] font-normal">
                Your cart is empty. Start adding some items!
              </p>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-9 bg-[#EF4444] h-9 rounded-full flex justify-center items-center">
              <UserIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[188px] h-[104px] rounded-xl flex items-center justify-center">
            <DropdownMenuLabel className="flex flex-col gap-2">
              test@gmail.com
              <div className="rounded-full bg-[#F4F4F5] flex justify-center items-center px-3 py-2">
                Sign out
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
