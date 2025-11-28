import { CalendarIcon } from "@/app/_icons/CalendarIcon.js";
export function Orders() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-360 h-256">
        <div className="flex flex-col justify-center w-[205px] h-256"></div>
        <div className="flex justify-center items-center w-[1235px] h-360 bg-[#F4F4F5CC]">
          <div className="flex flex-col w-[1171px] h-237 bg-[#E4E4E7]">
            <div className="bg-black rounded-full"></div>
            <div className="flex w-[1171px] h-237 bg-[#E4E4E7]">
              <div className="flex p-4 justify-between h-11 w-[485px]">
                <div className="flex flex-col">
                  <p className="text-[20px] font-bold">Orders</p>
                  <div className="text-[#71717A] text-[12px] font-medium flex">
                    <p></p>
                    <p>items</p>
                  </div>
                </div>
                <div className="w-[491px] h-9 flex gap-3">
                  <div className="w-74 h-9 rounded-border border-[#E4E4E7] px-4 py-2 flex">
                    <CalendarIcon />
                    <p className="text-[14px] font-normal">
                      13 June 2023 - 14 July 2023
                    </p>
                  </div>
                  <div className="bg-[#18181B] w-[179px] h-9 rounded py-2 px-4">
                    Change delivery state
                  </div>
                </div>
              </div>
              <div className="flex p-4 justify-between h-13 w-[485px] bg-[#F4F4F5CC]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
