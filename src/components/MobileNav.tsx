import React, { useState } from "react";
import { Home, Search, LayoutGrid, ShoppingCart, User, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Dummy product search pool (matches products in index.tsx)
const searchPool = [
  { name: "Kawaii Mini Clay Cupcakes", price: "₹499", tag: "Sale", desc: "Cute miniature clay cupcakes for decoration." },
  { name: "Kawaii Duck Organizer", price: "₹799", tag: "New", desc: "Desk organizer shaped like a cute duck." },
  { name: "Kawaii Bear Pen Holder", price: "₹399", desc: "Keep your pastel pens safe and neat." },
  { name: "Kawaii Puppy Lunch Bag", price: "₹699", tag: "Sale", desc: "Insulated lunch bag with puppy face." },
  { name: "Kawaii Water Bottle", price: "₹549", desc: "Double-walled cute tumbler with straw." },
  { name: "Aesthetic Sticker Pack", price: "₹199", desc: "Journaling sticker sheet pack (5 sheets)." },
  { name: "Girly Hearts Stickers", price: "₹299", desc: "Holographic heart borders and shapes." },
  { name: "Lavender Journal Kit", price: "₹599", tag: "Hot", desc: "Purple notebook, stickers, washitape set." },
];

export function MobileNav() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();

  // Search logic
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = searchQuery
    ? searchPool.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "home") {
      navigate({ to: "/" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (tab === "shop") {
      const el = document.getElementById("collection");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (tab === "search") {
      setIsSearchOpen(true);
    } else if (tab === "cart") {
      setIsCartOpen(true);
    } else if (tab === "account") {
      setIsAccountOpen(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-coral/10 shadow-[0_-8px_24px_rgba(242,108,88,0.08)] pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {/* Home */}
          <button
            onClick={() => handleTabClick("home")}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${
              activeTab === "home"
                ? "text-coral scale-105 font-bold"
                : "text-coral/70 hover:text-coral"
            }`}
          >
            <Home className="w-[22px] h-[22px] stroke-[2.2]" />
            <span className="text-[11px] font-semibold mt-0.5 font-body">Home</span>
            {activeTab === "home" && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-coral animate-ping" />
            )}
          </button>

          {/* Search */}
          <button
            onClick={() => handleTabClick("search")}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${
              activeTab === "search" || isSearchOpen
                ? "text-coral scale-105 font-bold"
                : "text-coral/70 hover:text-coral"
            }`}
          >
            <Search className="w-[22px] h-[22px] stroke-[2.2]" />
            <span className="text-[11px] font-semibold mt-0.5 font-body">Search</span>
            {(activeTab === "search" || isSearchOpen) && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-coral" />
            )}
          </button>

          {/* Shop */}
          <button
            onClick={() => handleTabClick("shop")}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${
              activeTab === "shop"
                ? "text-coral scale-105 font-bold"
                : "text-coral/70 hover:text-coral"
            }`}
          >
            <LayoutGrid className="w-[22px] h-[22px] stroke-[2.2]" />
            <span className="text-[11px] font-semibold mt-0.5 font-body">Shop</span>
            {activeTab === "shop" && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-coral" />
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => handleTabClick("cart")}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${
              activeTab === "cart" || isCartOpen
                ? "text-coral scale-105 font-bold"
                : "text-coral/70 hover:text-coral"
            }`}
          >
            <div className="relative">
              <ShoppingCart className="w-[22px] h-[22px] stroke-[2.2]" />
              <span className="absolute -top-1.5 -right-2.5 bg-coral text-white text-[9px] font-bold w-4 h-4 rounded-full grid place-items-center border border-white">
                3
              </span>
            </div>
            <span className="text-[11px] font-semibold mt-0.5 font-body">cart</span>
            {(activeTab === "cart" || isCartOpen) && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-coral" />
            )}
          </button>

          {/* Account */}
          <button
            onClick={() => handleTabClick("account")}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${
              activeTab === "account" || isAccountOpen
                ? "text-coral scale-105 font-bold"
                : "text-coral/70 hover:text-coral"
            }`}
          >
            <User className="w-[22px] h-[22px] stroke-[2.2]" />
            <span className="text-[11px] font-semibold mt-0.5 font-body">account</span>
            {(activeTab === "account" || isAccountOpen) && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-coral" />
            )}
          </button>
        </div>
      </div>

      {/* --- Search Dialog --- */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="w-[92vw] sm:max-w-[425px] rounded-[2rem] sm:rounded-3xl p-6 bg-cream border-2 border-yellow/30 max-h-[85vh] overflow-y-auto">
          <DialogHeader className="pb-2">
            <DialogTitle className="font-display text-2xl text-purple flex items-center gap-2">
              🔍 Search Kawaii Items
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pens, journals, boxes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white border-2 border-purple/20 focus:border-coral outline-none text-foreground font-body text-sm transition-colors"
              />
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-purple/40" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 w-5 h-5 rounded-full bg-purple/10 flex items-center justify-center hover:bg-purple/20 transition cursor-pointer"
                >
                  <X className="w-3 h-3 text-purple" />
                </button>
              )}
            </div>

            {/* Popular tags */}
            {!searchQuery && (
              <div>
                <div className="text-xs font-semibold text-purple/60 mb-2 uppercase tracking-wider">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Journal", "Stickers", "Water Bottle", "Organizer", "Lunch Box"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3.5 py-1.5 rounded-full bg-white border border-purple/15 text-xs text-purple font-semibold hover:bg-coral hover:text-white hover:border-transparent transition cursor-pointer"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-purple/60 uppercase tracking-wider">
                  Search Results ({filteredProducts.length})
                </div>
                {filteredProducts.length > 0 ? (
                  <div className="space-y-2.5">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.name}
                        className="p-3 bg-white rounded-2xl flex items-center justify-between border border-purple/10 hover:border-coral/30 transition-all shadow-sm"
                      >
                        <div className="flex-1 pr-3">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-xs text-foreground line-clamp-1">
                              {p.name}
                            </h4>
                            {p.tag && (
                              <span className="text-[8px] bg-coral text-white font-bold px-1.5 py-0.5 rounded-full uppercase">
                                {p.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                            {p.desc}
                          </p>
                          <span className="text-xs font-bold text-purple mt-1 block">
                            {p.price}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            alert(`${p.name} added to cart!`);
                            setIsSearchOpen(false);
                          }}
                          className="px-3 py-1.5 rounded-full bg-purple text-white text-xs font-semibold hover:bg-coral transition cursor-pointer shrink-0"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-purple/20">
                    <p className="text-sm text-muted-foreground">
                      No cute items found for "{searchQuery}" 😿
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-3 text-xs text-coral font-bold hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* --- Cart Sheet --- */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-[85vw] sm:max-w-md p-6 bg-cream border-l-2 border-yellow/30 flex flex-col h-full">
          <SheetHeader className="pb-4 border-b border-purple/10">
            <SheetTitle className="font-display text-2xl text-purple flex items-center gap-2">
              🛍️ Your Kawaii Cart
            </SheetTitle>
          </SheetHeader>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3.5">
            {/* Item 1 */}
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple/10 shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-purple/5 border border-purple/10 shrink-0 grid place-items-center text-2xl select-none">
                🍰
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground truncate">
                  Kawaii Mini Clay Cupcakes
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">Qty: 1</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-sm font-bold text-purple">₹499</span>
                  <button className="text-xs text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple/10 shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-yellow/5 border border-yellow/10 shrink-0 grid place-items-center text-2xl select-none">
                🦆
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground truncate">
                  Kawaii Duck Organizer
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">Qty: 1</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-sm font-bold text-purple">₹799</span>
                  <button className="text-xs text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple/10 shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-coral/5 border border-coral/10 shrink-0 grid place-items-center text-2xl select-none">
                📔
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground truncate">
                  Lavender Journal Kit
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">Qty: 1</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-sm font-bold text-purple">₹599</span>
                  <button className="text-xs text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Free shipping banner */}
            <div className="bg-white/60 rounded-2xl p-3.5 border border-dashed border-teal/40 mt-4 text-center">
              <span className="text-xs font-semibold text-teal flex items-center justify-center gap-1">
                🎉 Free Shipping Activated!
              </span>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Your order is above ₹999. Yay!
              </p>
            </div>
          </div>

          {/* Cart footer */}
          <div className="pt-4 border-t border-purple/10 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>₹1,897</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span className="text-teal font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-purple pt-1.5 border-t border-purple/5">
                <span>Total</span>
                <span>₹1,897</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Proceeding to checkout! Thank you 💛");
                setIsCartOpen(false);
              }}
              className="w-full py-3.5 rounded-full bg-coral hover:bg-coral/95 text-white font-bold shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Checkout Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </SheetContent>
      </Sheet>

      {/* --- Account Dialog --- */}
      <Dialog open={isAccountOpen} onOpenChange={setIsAccountOpen}>
        <DialogContent className="w-[92vw] sm:max-w-[400px] rounded-[2rem] sm:rounded-3xl p-6 bg-cream border-2 border-yellow/30 max-h-[85vh] overflow-y-auto">
          <DialogHeader className="pb-2">
            <DialogTitle className="font-display text-2xl text-purple text-center">
              ✨ Kawaii Club Profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            {/* User Profile Card */}
            <div className="bg-white rounded-3xl p-5 border border-purple/10 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-coral to-purple grid place-items-center text-3xl mb-3 border-4 border-cream shadow-md select-none animate-bounce">
                🌸
              </div>
              <h3 className="font-display text-lg text-purple font-semibold">
                Ananya Sharma
              </h3>
              <p className="text-xs text-muted-foreground">Member since May 2026</p>

              {/* VIP tag */}
              <div className="inline-flex items-center gap-1.5 bg-yellow/30 text-purple text-[10px] font-bold px-3 py-1 rounded-full mt-3 uppercase tracking-wider">
                👑 Sparkle VIP Member
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-purple/5">
                <div>
                  <span className="block font-display text-base text-coral">₹4,250</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Saved</span>
                </div>
                <div>
                  <span className="block font-display text-base text-teal">6 Orders</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Placed</span>
                </div>
              </div>
            </div>

            {/* Account settings / links */}
            <div className="bg-white rounded-2xl p-2.5 border border-purple/10 shadow-sm space-y-1 text-sm">
              <button
                onClick={() => alert("Opening orders history...")}
                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-cream hover:text-coral transition font-semibold text-purple cursor-pointer border-none bg-transparent"
              >
                📦 Track My Orders
              </button>
              <button
                onClick={() => alert("Opening loyalty points...")}
                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-cream hover:text-coral transition font-semibold text-purple cursor-pointer border-none bg-transparent"
              >
                💖 Kawaii Rewards (180 pts)
              </button>
              <button
                onClick={() => alert("Opening profile settings...")}
                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-cream hover:text-coral transition font-semibold text-purple cursor-pointer border-none bg-transparent"
              >
                ⚙️ Account Settings
              </button>
              <button
                onClick={() => {
                  alert("Logged out successfully.");
                  setIsAccountOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-500 transition font-semibold text-red-400 cursor-pointer border-none bg-transparent"
              >
                🚪 Log Out
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
