import React from "react";
import { Home, Search, LayoutGrid, ShoppingCart, User } from "lucide-react";

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-cream/95 backdrop-blur-md border-t-2 border-yellow/30 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {/* Home (Active Page) */}
        <a
          href="/"
          className="flex flex-col items-center justify-center w-16 h-full text-coral active:scale-95 transition-transform"
        >
          <Home className="w-[22px] h-[22px] stroke-[2.2]" />
          <span className="text-[11px] font-semibold mt-0.5 font-body">Home</span>
        </a>

        {/* Search */}
        <button
          onClick={() => alert("Search functionality coming soon!")}
          className="flex flex-col items-center justify-center w-16 h-full text-foreground/75 hover:text-coral active:scale-95 transition-transform cursor-pointer border-none bg-transparent"
        >
          <Search className="w-[22px] h-[22px] stroke-[2.2]" />
          <span className="text-[11px] font-semibold mt-0.5 font-body">Search</span>
        </button>

        {/* Shop */}
        <a
          href="#collection"
          className="flex flex-col items-center justify-center w-16 h-full text-foreground/75 hover:text-coral active:scale-95 transition-transform"
        >
          <LayoutGrid className="w-[22px] h-[22px] stroke-[2.2]" />
          <span className="text-[11px] font-semibold mt-0.5 font-body">Shop</span>
        </a>

        {/* cart */}
        <a
          href="#"
          className="flex flex-col items-center justify-center w-16 h-full text-foreground/75 hover:text-coral active:scale-95 transition-transform relative"
        >
          <ShoppingCart className="w-[22px] h-[22px] stroke-[2.2]" />
          <span className="absolute top-1.5 right-3.5 bg-coral text-white text-[9px] font-bold w-4 h-4 rounded-full grid place-items-center border border-cream">
            3
          </span>
          <span className="text-[11px] font-semibold mt-0.5 font-body">cart</span>
        </a>

        {/* account */}
        <a
          href="#"
          className="flex flex-col items-center justify-center w-16 h-full text-foreground/75 hover:text-coral active:scale-95 transition-transform"
        >
          <User className="w-[22px] h-[22px] stroke-[2.2]" />
          <span className="text-[11px] font-semibold mt-0.5 font-body">account</span>
        </a>
      </div>
    </div>
  );
}
