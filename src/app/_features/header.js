import { Logo } from "@/app/_icons/Logo.js";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <div className="w-auto h-17 bg-[#18181B] flex justify-between px-22 items-center">
      <div className="w-[146px] h-11 flex">
        <div className="w-22 flex justify-center">
          <Logo className="w-[46px] h-[37.29px]" />
        </div>
        <div className="flex flex-col ">
          <div className="flex font-semibold text-5 justify-center">
            <h4 className="text-white">Nom</h4>
            <h4 className="text-[#EF4444]">Nom</h4>
          </div>
          <div className="font-normal text-[12px] text-white w-22 flex justify-center">
            Swift delivery
          </div>
        </div>
      </div>
      <div className="w-[348.6px] h-9 flex gap-3">
        <div className="w-[251px] bg-[#FFFFFF] h-9 rounded-full px-3 flex items-center justify-between">
          <LocationIcon />
          <p className="text-[#EF4444] font-normal text-[12px]">
            Delivery address:
          </p>
          <p className="text-[#71717A] font-normal text-[12px]">Add Location</p>
          <ChevronRight />
        </div>
        <div className="w-9 bg-[#FFFFFF] h-9 rounded-full flex justify-center items-center">
          <ShoppingCartIcon />
        </div>
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
