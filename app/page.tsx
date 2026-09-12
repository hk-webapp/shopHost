import Image from "next/image";
//import SetLocalStoragePage from '@repo/ui/set-local-storage'
import { ShopCarousel, CarouselData } from "@repo/ui/ShopCarousel";
import {
  CategoryCycle,
  IncedibleProductList,
  ProductListByCategory,
} from "@repo/shared";

export default function Home() {
  const list: CarouselData[] = [
    {
      id: "1",
      title: "slide 1",
      image: "./images/carousel/ca1.webp",
    },
    {
      id: "2",
      title: "slide 2",
      image: "./images/carousel/ca2.webp",
    },
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans w-full h-max overflow-hidden relative">
      <div className="w-full h-[300px] relative bg-amber-400 overflow-hidden">
        <ShopCarousel list={list} id={"top-carousel"} />
      </div>

      <CategoryCycle />
      <IncedibleProductList color="red" />
      <ProductListByCategory category={"beauty"} pageSize={6} />
      <ProductListByCategory category={"kitchen"} pageSize={10} />

      <IncedibleProductList color="green" />
    </div>
  );
}
