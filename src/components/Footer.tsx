import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Instagram } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E8DDF8]/20">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-display text-lg font-bold text-orange">
          {title}
        </span>
        <span
          className="text-orange text-2xl leading-none transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="pb-4 text-sm text-[#E8DDF8] space-y-2">{children}</div>
      </div>
    </div>
  );
}

export function Footer() {
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
          <a
            href="https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/80 hover:text-orange transition"
          >
            <Instagram className="w-4 h-4" /> @hapyezta
          </a>
          <div className="mt-3">
            <p className="text-foreground/70 mb-2">Get cute drops in your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@cute.com"
                className="flex-1 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 placeholder:text-foreground/40 text-sm text-foreground outline-none focus:border-orange/50"
              />
              <button className="px-4 py-2 rounded-full bg-orange hover:bg-purple text-white transition font-semibold text-sm">
                Join
              </button>
            </form>
          </div>
        </AccordionItem>

        <AccordionItem title="Contact Us">
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-orange transition">
                Contact page
              </Link>
            </li>
            <li>
              <a href="#" className="text-foreground/80 hover:text-orange transition">
                Track order
              </a>
            </li>
            <li>
              <a href="#" className="text-foreground/80 hover:text-orange transition">
                Shipping info
              </a>
            </li>
            <li>
              <a href="#" className="text-foreground/80 hover:text-orange transition">
                Returns
              </a>
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
              <li><a href="#" className="hover:text-[#FFB84D] transition">Stationery</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Journals</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Gift sets</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Bottles</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Help</div>
            <ul className="space-y-2 text-sm text-[#E8DDF8]">
              <li><a href="#" className="hover:text-[#FFB84D] transition">Track order</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Shipping</a></li>
              <li><a href="#" className="hover:text-[#FFB84D] transition">Returns</a></li>
              <li><Link to="/contact" className="hover:text-[#FFB84D] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-3 text-white font-semibold">Stay in the loop</div>
            <p className="text-sm text-[#E8DDF8] mb-3">Get cute drops in your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@cute.com"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-[#E8DDF8]/20 placeholder:text-[#E8DDF8]/50 text-sm text-white outline-none focus:border-[#FFB84D]/50"
              />
              <button className="px-4 py-2 rounded-full bg-[#FFB84D] hover:bg-white text-[#5B2D91] transition font-semibold text-sm">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#E8DDF8]/20 text-center text-xs text-[#E8DDF8]/70">
          © {new Date().getFullYear()} Hapyezta · Made with 💛 in India
        </div>
      </div>
    </footer>
  );
}
