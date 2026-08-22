import { useState } from "react";
import coffee from "../coffee-cup.png";
import education from "../toga.png";
import food from "../stash_burger.png";
import makeup from "../make-up.png";
import shop from "../shop.png";

const categoryData = [
  {
    id: 1,
    text: "Makanan cepat saji",
    icon: food,
  },
  {
    id: 2,
    text: "Kopi Kekinian",
    icon: coffee,
  },
  {
    id: 3,
    text: "Jasa & Pendidikan",
    icon: education,
  },
  {
    id: 4,
    text: "Kecantikan",
    // This was the trickiest icon. I'm using a 'document' icon
    // as it has a similar shape to your image.
    icon: makeup,
  },
  {
    id: 5,
    text: "Ritel & Minimarket",
    icon: shop,
  },
];

function CategoryListSection() {
return (
    
<div class="flex justify-center text-xl  text-white mt-5 flex-wrap gap-x-2 mb-10">
  {categoryData.map((category) => (
          
          // 3. We render a button for each item in the array.
          <button
            key={category.id}
            className={`
              flex flex-none items-center border-1 border-[#242424] rounded-full text-black gap-x-2 p-3 cursor-pointer
            `}
          >
            {/* The icon is rendered here */}
            <span className="text-xl  w-7 h-7">
                <img src={category.icon} alt="" />
            </span>
            <span className="font-medium">
              {category.text}
            </span>
          </button>
        ))}
</div>
);
}
export default CategoryListSection;