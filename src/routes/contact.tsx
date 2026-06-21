import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, Send, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Hapyezta" },
      { name: "description", content: "Get in touch with Hapyezta. We would love to hear your dreamy thoughts, questions, or feedback!" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields 🌸");
      return;
    }
    alert(`Thank you for your dreamy thoughts, ${name}! 💌 We'll get back to you soon!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        {/* Top Banner strip */}
        <div className="bg-purple text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
          ✨ Free shipping above ₹999 · Pan-India delivery · COD available ✨
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-yellow/30">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link to="/" className="hover:opacity-90 transition py-1 mx-auto lg:mx-0">
              <Logo size="sm" withSlogan={true} className="items-center lg:items-start" />
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
              <button className="p-2 hover:text-coral relative hidden lg:block">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-coral text-white text-[10px] font-bold w-4 h-4 rounded-full grid place-items-center">3</span>
              </button>
            </div>
          </div>
        </header>

        {/* Contact Content */}
        <main className="max-w-3xl mx-auto px-4 py-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-10 justify-center">
            <Link to="/" className="hover:text-coral transition font-semibold">Home</Link>
            <span>/</span>
            <span className="text-purple font-bold">Contact Us</span>
          </div>

          <div className="text-center mb-10">
            <h1 className="font-display text-5xl sm:text-6xl text-orange font-bold mb-3 tracking-normal">
              Contact Us
            </h1>
            <p className="text-foreground/75 font-body text-base sm:text-lg">
              Have questions? We'd love to hear from you!
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full bg-white rounded-[2rem] p-6 sm:p-10 border-2 border-yellow/20 shadow-[0_12px_40px_rgba(127,88,165,0.06)] max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground placeholder:text-foreground/30"
                />
              </div>

              <div>
                <label className="block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground placeholder:text-foreground/30"
                />
              </div>

              <div>
                <label className="block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase">
                  Message
                </label>
                <textarea
                  placeholder="Write your dreamy thoughts here..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 rounded-[2rem] border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground resize-none placeholder:text-foreground/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-orange hover:bg-orange/95 text-white font-bold shadow-[0_5px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#c4513f] transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm font-display uppercase tracking-widest"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          {/* Store Information Card */}
          <div className="w-full bg-white rounded-[2rem] p-8 border-2 border-yellow/20 shadow-[0_12px_40px_rgba(127,88,165,0.06)] max-w-xl mx-auto mt-8">
            <h2 className="font-display text-xl sm:text-2xl text-[#5B2D91] font-bold mb-6 text-left">
              Store Information
            </h2>
            <div className="space-y-5">
              {/* Phone item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-[#5B2D91]/20 flex items-center justify-center text-[#5B2D91] shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-display text-base text-[#5B2D91] font-bold">
                    Phone
                  </span>
                  <a href="tel:+918921502990" className="text-sm text-foreground/75 hover:text-[#5B2D91] transition font-body">
                    +91 89215 02990
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-[#5B2D91]/20 flex items-center justify-center text-[#5B2D91] shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-display text-base text-[#5B2D91] font-bold">
                    Email
                  </span>
                  <a href="mailto:hapyezta@gmail.com" className="text-sm text-foreground/75 hover:text-[#5B2D91] transition font-body">
                    hapyezta@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#5B2D91] text-white pt-14 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col items-start">
              <Logo size="md" withSlogan={true} className="items-start text-left" />
            </div>
            <p className="mt-3 text-sm text-[#E8DDF8]">Spreading kawaii joy, one cute package at a time. Pan-India delivery.</p>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Shop</div>
            <ul className="space-y-2 text-sm text-[#E8DDF8]">
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Stationery</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Journals</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Gift sets</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Bottles</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Help</div>
            <ul className="space-y-2 text-sm text-[#E8DDF8]">
              <li><a href="#" className="hover:text-[#FFB84D] transition">Track order</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Shipping</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Returns</a></li>
              <li><Link to="/contact" className="hover:text-[#FFB84D] transition font-bold text-[#FFB84D]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Stay in the loop</div>
            <p className="text-sm text-[#E8DDF8] mb-3">Get cute drops in your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@cute.com" className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-[#E8DDF8]/20 placeholder:text-[#E8DDF8]/50 text-sm text-white outline-none focus:border-[#FFB84D]/50" />
              <button type="submit" className="px-4 py-2 rounded-full bg-[#FFB84D] hover:bg-white text-[#5B2D91] transition font-semibold text-sm">Join</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#E8DDF8]/20 text-center text-xs text-[#E8DDF8]/70">
          © {new Date().getFullYear()} Hapyezta · Made with 💛 in India
        </div>
      </footer>
    </div>
  );
}
