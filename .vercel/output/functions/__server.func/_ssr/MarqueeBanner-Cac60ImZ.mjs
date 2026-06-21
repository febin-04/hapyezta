import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useCart } from "./CartContext-DEOpd4EQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as LogoText, n as Logo, r as LogoIcon } from "./Footer-CSTTyPDU.mjs";
import { c as ShoppingBag, u as Search, v as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MarqueeBanner-Cac60ImZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Header() {
	const { cartCount, openCart } = useCart();
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-yellow/30 transition-all duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 relative transition-all duration-300 ${isScrolled ? "h-16" : "h-24 sm:h-28 lg:h-20 lg:py-3"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden transition-all duration-300 ease-in-out origin-center ${isScrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:opacity-90 transition block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							size: "sm",
							withSlogan: true,
							collapseOnScroll: false,
							className: "items-center"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute left-4 top-1/2 -translate-y-1/2 lg:hidden transition-all duration-300 ease-in-out origin-left ${isScrolled ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "hover:opacity-90 transition flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoIcon, { className: "w-8 h-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoText, { className: "text-xl font-bold tracking-tight leading-none" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:opacity-90 transition block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							size: "sm",
							withSlogan: true,
							collapseOnScroll: false,
							className: "items-start"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden lg:flex items-center gap-7 text-sm font-semibold text-foreground/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "collection",
							className: "hover:text-coral transition",
							children: "Shop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "featured",
							className: "hover:text-coral transition",
							children: "New In"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "collection",
							className: "hover:text-coral transition",
							children: "Stationery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "collection",
							className: "hover:text-coral transition",
							children: "Gift Sets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "insta",
							className: "hover:text-coral transition",
							children: "Reviews"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3 z-20 ml-auto lg:ml-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 hover:text-coral hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 hover:text-coral hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openCart,
							className: "p-2 hover:text-coral relative hidden lg:block cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-5 h-5" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-0.5 -right-0.5 bg-coral text-white text-[10px] font-bold w-4 h-4 rounded-full grid place-items-center animate-fade-in",
								children: cartCount
							})]
						})
					]
				})
			]
		})
	});
}
/**
* MarqueeBanner – a continuously scrolling ticker strip.
* Keyframes are injected inline so the animation always works
* regardless of CSS build/purge settings.
*/
function MarqueeBanner() {
	const text = "✨  Delivery All Over India  ✨";
	const copies = Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			padding: "0 3rem",
			whiteSpace: "nowrap"
		},
		children: text
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-purple, #7c3aed)",
			color: "#fff",
			fontSize: "0.8rem",
			fontWeight: 600,
			padding: "0.45rem 0",
			overflow: "hidden",
			width: "100%"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes hapyezta-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hapyezta-marquee-track {
          display: inline-flex;
          width: max-content;
          animation: hapyezta-marquee 35s linear infinite;
        }
        .hapyezta-marquee-track:hover {
          animation-play-state: paused;
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hapyezta-marquee-track",
			children: [copies, copies]
		})]
	});
}
//#endregion
export { MarqueeBanner as n, Header as t };
