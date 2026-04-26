import { MdOutlineReceiptLong } from "react-icons/md";
import { LuChefHat, LuBike } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";

export const STATUS_CONFIG = {
  Placed: {
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
    dot: "bg-blue-400",
    icon: MdOutlineReceiptLong,
    step: 0,
  },
  Preparing: {
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/30",
    dot: "bg-yellow-400",
    icon: LuChefHat,
    step: 1,
  },
  "On the way": {
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/30",
    dot: "bg-orange-400",
    icon: LuBike,
    step: 2,
  },
  Delivered: {
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/30",
    dot: "bg-green-400",
    icon: IoCheckmarkCircle,
    step: 3,
  },
};

export const STEPS = [
  { label: "Placed",     icon: MdOutlineReceiptLong },
  { label: "Preparing",  icon: LuChefHat },
  { label: "On the way", icon: LuBike },
  { label: "Delivered",  icon: IoCheckmarkCircle },
];

export const STATUSES = ["Placed", "Preparing", "On the way", "Delivered"];
