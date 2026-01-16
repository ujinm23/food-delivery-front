import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FoodDetail({ _id, imageURL, name, price, ingredients }) {
  return (
    <DialogContent className="w-206 h-103 rounded-[20px] bg-white p-6 flex gap-6">
          <div
            className="w-[365.33px] h-52.5 rounded-xl bg-cover relative"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
      <DialogHeader>
        <DialogTitle className="text-[24px] text-[#EF4444] font-semibold">{name}</DialogTitle>
        <DialogDescription className="text-[14px] text-black font-normal h-10 flex items-start">
              {ingredients}
        </DialogDescription>
      </DialogHeader>
    
    </DialogContent>
  );
}
