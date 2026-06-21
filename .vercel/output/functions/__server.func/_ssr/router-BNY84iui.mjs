import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as logo_default, r as useCart, t as CartProvider } from "./CartContext-DEOpd4EQ.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowRight, _ as House, d as Plus, h as LayoutGrid, i as Trash2, n as User, p as Minus, s as ShoppingCart, t as X, u as Search } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as products } from "./products-Dt_C5rie.mjs";
import { t as Route$4 } from "./product._productId-CY1DPTi8.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BNY84iui.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dikfq_s_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Preloader() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [removed, setRemoved] = (0, import_react.useState)(false);
	const [fontsReady, setFontsReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.fonts.ready.then(() => {
			setFontsReady(true);
		});
		const timer = setTimeout(() => {
			setVisible(false);
		}, 1400);
		const removeTimer = setTimeout(() => {
			setRemoved(true);
		}, 1900);
		return () => {
			clearTimeout(timer);
			clearTimeout(removeTimer);
		};
	}, []);
	if (removed) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center select-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-28 h-28 mb-5 animate-preloader-bounce",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Hapyezta Loading Logo",
						className: "w-full h-full object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-full border-4 border-yellow/20 animate-ping opacity-60" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-3xl font-bold tracking-tight mb-1",
					style: { visibility: fontsReady ? "visible" : "hidden" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-orange",
							children: "H"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-yellow",
							children: "a"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal",
							children: "p"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-purple",
							children: "y"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-coral",
							children: "e"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-purple",
							children: "z"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal",
							children: "t"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-orange",
							children: "a"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.15em] font-bold text-orange mb-6",
					style: {
						fontFamily: "var(--font-display)",
						visibility: fontsReady ? "visible" : "hidden"
					},
					children: "Where Happy Creation Begin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-40 h-1.5 bg-yellow/20 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-yellow to-orange rounded-full animate-preloader-progress" })
				})
			]
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var searchPool = [
	{
		name: "Kawaii Mini Clay Cupcakes",
		price: "₹499",
		tag: "Sale",
		desc: "Cute miniature clay cupcakes for decoration."
	},
	{
		name: "Kawaii Duck Organizer",
		price: "₹799",
		tag: "New",
		desc: "Desk organizer shaped like a cute duck."
	},
	{
		name: "Kawaii Bear Pen Holder",
		price: "₹399",
		desc: "Keep your pastel pens safe and neat."
	},
	{
		name: "Kawaii Puppy Lunch Bag",
		price: "₹699",
		tag: "Sale",
		desc: "Insulated lunch bag with puppy face."
	},
	{
		name: "Kawaii Water Bottle",
		price: "₹549",
		desc: "Double-walled cute tumbler with straw."
	},
	{
		name: "Aesthetic Sticker Pack",
		price: "₹199",
		desc: "Journaling sticker sheet pack (5 sheets)."
	},
	{
		name: "Girly Hearts Stickers",
		price: "₹299",
		desc: "Holographic heart borders and shapes."
	},
	{
		name: "Lavender Journal Kit",
		price: "₹599",
		tag: "Hot",
		desc: "Purple notebook, stickers, washitape set."
	}
];
function MobileNav() {
	const { cartCount, openCart, isCartOpen } = useCart();
	const [activeTab, setActiveTab] = (0, import_react.useState)("home");
	const [isSearchOpen, setIsSearchOpen] = (0, import_react.useState)(false);
	const [isAccountOpen, setIsAccountOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const filteredProducts = searchQuery ? searchPool.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())) : [];
	const handleTabClick = (tab) => {
		setActiveTab(tab);
		if (tab === "home") {
			navigate({ to: "/" });
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} else if (tab === "shop") {
			const el = document.getElementById("collection");
			if (el) el.scrollIntoView({ behavior: "smooth" });
		} else if (tab === "search") setIsSearchOpen(true);
		else if (tab === "cart") openCart();
		else if (tab === "account") setIsAccountOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-coral/10 shadow-[0_-8px_24px_rgba(242,108,88,0.08)] pb-safe",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-around h-16 px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleTabClick("home"),
						className: `flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${activeTab === "home" ? "text-coral scale-105 font-bold" : "text-coral/70 hover:text-coral"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-[22px] h-[22px] stroke-[2.2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold mt-0.5 font-body",
								children: "Home"
							}),
							activeTab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 w-1 h-1 rounded-full bg-coral animate-ping" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleTabClick("search"),
						className: `flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${activeTab === "search" || isSearchOpen ? "text-coral scale-105 font-bold" : "text-coral/70 hover:text-coral"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-[22px] h-[22px] stroke-[2.2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold mt-0.5 font-body",
								children: "Search"
							}),
							(activeTab === "search" || isSearchOpen) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 w-1 h-1 rounded-full bg-coral" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleTabClick("shop"),
						className: `flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${activeTab === "shop" ? "text-coral scale-105 font-bold" : "text-coral/70 hover:text-coral"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-[22px] h-[22px] stroke-[2.2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold mt-0.5 font-body",
								children: "Shop"
							}),
							activeTab === "shop" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 w-1 h-1 rounded-full bg-coral" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleTabClick("cart"),
						className: `flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${activeTab === "cart" || isCartOpen ? "text-coral scale-105 font-bold" : "text-coral/70 hover:text-coral"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "w-[22px] h-[22px] stroke-[2.2]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1.5 -right-2.5 bg-coral text-white text-[9px] font-bold w-4 h-4 rounded-full grid place-items-center border border-white animate-fade-in",
									children: cartCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold mt-0.5 font-body",
								children: "cart"
							}),
							(activeTab === "cart" || isCartOpen) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 w-1 h-1 rounded-full bg-coral" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleTabClick("account"),
						className: `flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative cursor-pointer ${activeTab === "account" || isAccountOpen ? "text-coral scale-105 font-bold" : "text-coral/70 hover:text-coral"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-[22px] h-[22px] stroke-[2.2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold mt-0.5 font-body",
								children: "account"
							}),
							(activeTab === "account" || isAccountOpen) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 w-1 h-1 rounded-full bg-coral" })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: isSearchOpen,
			onOpenChange: setIsSearchOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "w-[92vw] sm:max-w-[425px] rounded-[2rem] sm:rounded-3xl p-6 bg-cream border-2 border-yellow/30 max-h-[85vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl text-purple flex items-center gap-2",
						children: "🔍 Search Kawaii Items"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 mt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search pens, journals, boxes...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full pl-10 pr-4 py-3 rounded-full bg-white border-2 border-purple/20 focus:border-coral outline-none text-foreground font-body text-sm transition-colors"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3.5 w-4 h-4 text-purple/40" }),
								searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchQuery(""),
									className: "absolute right-3.5 top-3 w-5 h-5 rounded-full bg-purple/10 flex items-center justify-center hover:bg-purple/20 transition cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3 h-3 text-purple" })
								})
							]
						}),
						!searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-purple/60 mb-2 uppercase tracking-wider",
							children: "Popular Searches"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Journal",
								"Stickers",
								"Water Bottle",
								"Organizer",
								"Lunch Box"
							].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSearchQuery(tag),
								className: "px-3.5 py-1.5 rounded-full bg-white border border-purple/15 text-xs text-purple font-semibold hover:bg-coral hover:text-white hover:border-transparent transition cursor-pointer",
								children: tag
							}, tag))
						})] }),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-semibold text-purple/60 uppercase tracking-wider",
								children: [
									"Search Results (",
									filteredProducts.length,
									")"
								]
							}), filteredProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2.5",
								children: filteredProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-white rounded-2xl flex items-center justify-between border border-purple/10 hover:border-coral/30 transition-all shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 pr-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-xs text-foreground line-clamp-1",
													children: p.name
												}), p.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] bg-coral text-white font-bold px-1.5 py-0.5 rounded-full uppercase",
													children: p.tag
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground line-clamp-1 mt-0.5",
												children: p.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-purple mt-1 block",
												children: p.price
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											const matched = products.find((prod) => prod.name === p.name);
											addToCart({
												id: matched?.id || p.name.toLowerCase().replace(/\s+/g, "-"),
												name: p.name,
												price: parseFloat(p.price.replace(/[^\d.]/g, "")),
												priceString: p.price,
												img: matched?.img || ""
											});
											setIsSearchOpen(false);
											openCart();
										},
										className: "px-3 py-1.5 rounded-full bg-purple text-white text-xs font-semibold hover:bg-coral transition cursor-pointer shrink-0",
										children: "Add"
									})]
								}, p.name))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-8 bg-white rounded-2xl border border-dashed border-purple/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [
										"No cute items found for \"",
										searchQuery,
										"\" 😿"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchQuery(""),
									className: "mt-3 text-xs text-coral font-bold hover:underline",
									children: "Clear search"
								})]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: isAccountOpen,
			onOpenChange: setIsAccountOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "w-[92vw] sm:max-w-[400px] rounded-[2rem] sm:rounded-3xl p-6 bg-cream border-2 border-yellow/30 max-h-[85vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl text-purple text-center",
						children: "✨ Kawaii Club Profile"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-3xl p-5 border border-purple/10 shadow-sm text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-coral to-purple grid place-items-center text-3xl mb-3 border-4 border-cream shadow-md select-none animate-bounce",
								children: "🌸"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-purple font-semibold",
								children: "Ananya Sharma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Member since May 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-1.5 bg-yellow/30 text-purple text-[10px] font-bold px-3 py-1 rounded-full mt-3 uppercase tracking-wider",
								children: "👑 Sparkle VIP Member"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-purple/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-base text-coral",
									children: "₹4,250"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground uppercase",
									children: "Saved"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-base text-teal",
									children: "6 Orders"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground uppercase",
									children: "Placed"
								})] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl p-2.5 border border-purple/10 shadow-sm space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => alert("Opening orders history..."),
								className: "w-full text-left px-4 py-2.5 rounded-xl hover:bg-cream hover:text-coral transition font-semibold text-purple cursor-pointer border-none bg-transparent",
								children: "📦 Track My Orders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => alert("Opening profile settings..."),
								className: "w-full text-left px-4 py-2.5 rounded-xl hover:bg-cream hover:text-coral transition font-semibold text-purple cursor-pointer border-none bg-transparent",
								children: "⚙️ Account Settings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									alert("Logged out successfully.");
									setIsAccountOpen(false);
								},
								className: "w-full text-left px-4 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-500 transition font-semibold text-red-400 cursor-pointer border-none bg-transparent",
								children: "🚪 Log Out"
							})
						]
					})]
				})]
			})
		})
	] });
}
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
function CartDrawer() {
	const navigate = useNavigate();
	const { cartItems, cartTotal, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();
	const FREE_SHIPPING_THRESHOLD = 999;
	const SHIPPING_COST = 100;
	const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
	const amountNeededForFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;
	const progressPercent = Math.min(cartTotal / FREE_SHIPPING_THRESHOLD * 100, 100);
	const grandTotal = cartTotal + (isFreeShipping ? 0 : SHIPPING_COST);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isCartOpen,
		onOpenChange: closeCart,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "w-[90vw] sm:max-w-md p-6 bg-cream border-l-2 border-yellow/30 flex flex-col h-full z-50 focus:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "pb-4 border-b border-purple/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
					className: "font-display text-2xl text-purple flex items-center gap-2",
					children: "🛍️ Your Kawaii Cart"
				})
			}), cartItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col items-center justify-center text-center p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-24 h-24 rounded-full bg-coral/10 grid place-items-center text-4xl select-none animate-bounce",
						children: "😿"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl text-purple font-bold",
						children: "Your cart is empty!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground/60 mt-2 font-body leading-relaxed max-w-[280px] mx-auto",
						children: "Fill it with cute journals, stationery, and other lovely creations! 🌸"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: closeCart,
						className: "px-6 py-3 rounded-full bg-purple text-white text-xs font-bold shadow-[0_4px_0_0_#492275] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#492275] transition-all cursor-pointer",
						children: "Start Shopping"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto py-4 space-y-4 pr-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white p-4 rounded-2xl border border-purple/10 shadow-sm space-y-2.5",
					children: isFreeShipping ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-teal flex items-center justify-center gap-1.5",
							children: "🎉 Free Shipping Unlocked!"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground mt-0.5",
							children: "Your order will be shipped for free across India!"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-foreground/80 font-medium text-center",
							children: [
								"You are only ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-coral",
									children: ["₹", amountNeededForFreeShipping]
								}),
								" away from ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-teal",
									children: "Free Shipping"
								}),
								"!"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-2 bg-purple/10 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-gradient-to-r from-coral to-teal transition-all duration-500 ease-out",
								style: { width: `${progressPercent}%` }
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3.5",
					children: cartItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple/10 shadow-sm hover:shadow-md transition-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-xl border border-purple/10 overflow-hidden shrink-0 bg-cream/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.img,
									alt: item.name,
									className: "w-full h-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-xs text-foreground truncate",
										title: item.name,
										children: item.name
									}),
									item.color && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-block text-[9px] px-2 py-0.5 rounded-full bg-purple/5 text-purple font-semibold",
										children: ["Color: ", item.color]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-purple",
											children: item.priceString
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center border border-purple/15 rounded-full overflow-hidden bg-cream/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => updateQuantity(item.id, item.color, item.quantity - 1),
													className: "p-1 px-2 hover:bg-cream transition text-purple/60 hover:text-purple cursor-pointer",
													"aria-label": "Decrease quantity",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3 h-3" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-1 text-[11px] font-bold text-purple select-none min-w-[1.25rem] text-center",
													children: item.quantity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => updateQuantity(item.id, item.color, item.quantity + 1),
													className: "p-1 px-2 hover:bg-cream transition text-purple/60 hover:text-purple cursor-pointer",
													"aria-label": "Increase quantity",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" })
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeFromCart(item.id, item.color),
								className: "p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition cursor-pointer shrink-0",
								"aria-label": "Remove item",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
							})
						]
					}, `${item.id}-${item.color}`))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-4 border-t border-purple/10 space-y-4 bg-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 font-body",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", cartTotal] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), isFreeShipping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal font-semibold",
								children: "FREE"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", SHIPPING_COST] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm font-bold text-purple pt-1.5 border-t border-purple/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", grandTotal] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						closeCart();
						navigate({ to: "/checkout" });
					},
					className: "w-full py-3.5 rounded-full bg-coral hover:bg-coral/95 text-white font-bold shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm",
					children: ["Checkout Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
				})]
			})] })]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Hapyezta" },
			{
				name: "description",
				content: "Hapyezta - Spreading kawaii joy, one cute package at a time. Shop adorable kawaii stationery, pencil cases, journals, and cute gifts."
			},
			{
				name: "author",
				content: "Hapyezta"
			},
			{
				property: "og:title",
				content: "Hapyezta"
			},
			{
				property: "og:description",
				content: "Shop adorable kawaii stationery, pencil cases, journals, and cute gifts. Pan-India delivery on the cutest collection in town."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Hapyezta"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@400;500;600;700&display=block",
				as: "style"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@400;500;600;700&display=block"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: logo_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/918921502990",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-40 lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-coral text-white shadow-[0_4px_16px_rgba(242,108,88,0.35)] hover:bg-coral/95 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20",
				"aria-label": "Chat on WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 16 16",
					className: "w-6.5 h-6.5 fill-current",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		] })
	});
}
var $$splitComponentImporter$2 = () => import("./contact-5Cbrwy8_.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us - Hapyezta" }, {
		name: "description",
		content: "Get in touch with Hapyezta. We would love to hear your dreamy thoughts, questions, or feedback!"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./checkout-DcajvTQn.mjs");
var Route$1 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Secure Checkout - Hapyezta" }, {
		name: "description",
		content: "Complete your order with Hapyezta. Adorable kawaii items are just one step away!"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DUnDuBgf.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Hapyezta" },
		{
			name: "description",
			content: "Shop adorable kawaii stationery, pencil cases, journals, water bottles and gift sets. Pan-India delivery on the cutest collection in town."
		},
		{
			property: "og:title",
			content: "Hapyezta"
		},
		{
			property: "og:description",
			content: "Adorable kawaii stationery, journals & gift sets. Pan-India delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$3
});
var CheckoutRoute = Route$1.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	CheckoutRoute,
	ContactRoute,
	ProductProductIdRoute: Route$4.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
