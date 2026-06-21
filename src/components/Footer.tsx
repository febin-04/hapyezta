import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

interface AccordionItemProps {
  title: string;
  to?: string;          // if set, the title navigates instead of toggling
  children: React.ReactNode;
}

function AccordionItem({ title, to, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E8DDF8]/20">
      <div className="w-full flex items-center justify-between py-4">
        {/* Title — link if 'to' is provided, plain text otherwise */}
        {to ? (
          <Link
            to={to}
            className="font-display text-lg font-bold text-orange hover:text-orange/80 transition"
          >
            {title}
          </Link>
        ) : (
          <span className="font-display text-lg font-bold text-orange">{title}</span>
        )}
        {/* + toggle always available */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-orange text-2xl leading-none transition-transform duration-300 pl-4"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-label={open ? "Collapse" : "Expand"}
        >
          +
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="pb-4 text-sm text-[#E8DDF8] space-y-2">{children}</div>
      </div>
    </div>
  );
}

function SocialIcons({ hoverBgClass }: { hoverBgClass: string }) {
  return (
    <div className="mt-5 flex items-center gap-4">
      {/* Instagram Logo */}
      <a
        href="https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center p-1 rounded-xl transition-all duration-300 ${hoverBgClass}`}
        title="Follow us on Instagram"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="url(#ig-footer-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="ig-footer-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9ce34" />
              <stop offset="30%" stopColor="#ee2a7b" />
              <stop offset="60%" stopColor="#d82b7a" />
              <stop offset="100%" stopColor="#6228d7" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="22" height="22" rx="6" />
          <circle cx="16" cy="16" r="5" />
          <circle cx="22" cy="10" r="1.2" />
        </svg>
      </a>

      {/* WhatsApp Logo */}
      <a
        href="https://wa.me/918921502990"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center p-1 rounded-xl transition-all duration-300 ${hoverBgClass}`}
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="#25D366"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4C9.4 4 4 9.4 4 16c0 2.1.5 4.1 1.5 5.9L3 29l7.3-1.9c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 4 16 4z" />
          <path d="M20.5 17.5c-.3-.2-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-1-1-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6s.3-.3.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-1 2.2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </div>
  );
}

export function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for staying linked! 🌸");
  };

  return (
    <footer className="bg-cream text-foreground pt-10 pb-6 px-4">
      {/* ── Mobile accordion (hidden on lg+) ── */}
      <div className="lg:hidden max-w-xl mx-auto">
        <AccordionItem title="About Us">
          <div className="flex flex-col items-start mb-3">
            <Logo size="sm" withSlogan={true} className="items-start text-left" />
          </div>
          <p className="text-foreground/70">
            Spreading kawaii joy, one cute package at a time. Pan-India delivery.
          </p>
        </AccordionItem>

        <AccordionItem title="Let's stay linked!">
          <div>
            <p className="text-foreground/70 mb-2">Get cute drops in your inbox.</p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@cute.com"
                className="flex-1 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 placeholder:text-foreground/40 text-sm text-foreground outline-none focus:border-orange/50"
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-orange hover:bg-purple text-white transition font-semibold text-sm">
                Join
              </button>
            </form>
            <SocialIcons hoverBgClass="hover:bg-orange/10" />
          </div>
        </AccordionItem>

        <AccordionItem title="Contact Us" to="/contact">
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-orange transition">
                Contact page
              </Link>
            </li>
            <li>
              <Link to="/" hash="collection" className="text-foreground/80 hover:text-orange transition">
                Track order
              </Link>
            </li>
            <li>
              <Link to="/" hash="collection" className="text-foreground/80 hover:text-orange transition">
                Shipping info
              </Link>
            </li>
            <li>
              <Link to="/" hash="collection" className="text-foreground/80 hover:text-orange transition">
                Returns
              </Link>
            </li>
          </ul>
        </AccordionItem>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()}, HAPYEZTA | All rights reserved
        </div>
      </div>

      {/* ── Desktop grid (hidden on mobile) ── */}
      <div className="hidden lg:block bg-[#5B2D91] text-white rounded-2xl pt-14 pb-8 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col items-start">
              <Logo size="md" withSlogan={true} className="items-start text-left" />
            </div>
            <p className="mt-3 text-sm text-[#E8DDF8]">
              Spreading kawaii joy, one cute package at a time. Pan-India delivery.
            </p>
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
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Track order</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Shipping</Link></li>
              <li><Link to="/" hash="collection" className="hover:text-[#FFB84D] transition">Returns</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFB84D] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Stay in the loop</div>
            <p className="text-sm text-[#E8DDF8] mb-3">Get cute drops in your inbox.</p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@cute.com"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-[#E8DDF8]/20 placeholder:text-[#E8DDF8]/50 text-sm text-white outline-none focus:border-[#FFB84D]/50"
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-[#FFB84D] hover:bg-white text-[#5B2D91] transition font-semibold text-sm">
                Join
              </button>
            </form>
            <SocialIcons hoverBgClass="hover:bg-white/10" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#E8DDF8]/20 text-center text-xs text-[#E8DDF8]/70">
          © {new Date().getFullYear()} Hapyezta · Made with 💛 in India
        </div>
      </div>
    </footer>
  );
}

