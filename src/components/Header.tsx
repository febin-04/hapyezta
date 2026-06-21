import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { cartCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-yellow/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className={`inline-flex items-center justify-center shrink-0 hover:opacity-90 py-1 ${
            isScrolled
              ? "relative left-0 translate-x-0 lg:left-0 lg:translate-x-0"
              : "relative left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"
          } transition-all duration-300 ease-in-out`}
        >
          <Logo size="sm" withSlogan={true} collapseOnScroll={true} isScrolled={isScrolled} className="items-center lg:items-start" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-foreground/80">
          <Link to="/" hash="collection" className="hover:text-coral transition">Shop</Link>
          <Link to="/" hash="featured" className="hover:text-coral transition">New In</Link>
          <Link to="/" hash="collection" className="hover:text-coral transition">Stationery</Link>
          <Link to="/" hash="collection" className="hover:text-coral transition">Gift Sets</Link>
          <Link to="/" hash="insta" className="hover:text-coral transition">Reviews</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="p-2 hover:text-coral hidden lg:block"><Search className="w-5 h-5" /></button>
          <button className="p-2 hover:text-coral hidden sm:block"><Heart className="w-5 h-5" /></button>
          <button onClick={openCart} className="p-2 hover:text-coral relative hidden lg:block cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-coral text-white text-[10px] font-bold w-4 h-4 rounded-full grid place-items-center animate-fade-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
