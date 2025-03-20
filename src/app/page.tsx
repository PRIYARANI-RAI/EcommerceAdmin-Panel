"use client"

import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import MainHome from "@/components/front-end/MainHome";
import Navbar from "@/components/front-end/Navbar";
import TrendingProduct from "@/components/front-end/TrendingProduct";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart}/>}
      <MainHome/>
      <Feature/>
      <TrendingProduct/>
    </main>
  );
}
