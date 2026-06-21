import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as logo_default } from "./CartContext-DEOpd4EQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CSTTyPDU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LogoIcon({ className = "w-10 h-10" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "Hapyezta Logo Icon",
		className: `${className} object-contain`
	});
}
function LogoText({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `font-display select-none tracking-normal ${className}`,
		children: [
			{
				char: "H",
				color: "text-orange"
			},
			{
				char: "A",
				color: "text-yellow"
			},
			{
				char: "P",
				color: "text-teal"
			},
			{
				char: "Y",
				color: "text-purple"
			},
			{
				char: "E",
				color: "text-coral"
			},
			{
				char: "Z",
				color: "text-purple"
			},
			{
				char: "T",
				color: "text-teal"
			},
			{
				char: "A",
				color: "text-orange"
			}
		].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: item.color,
			children: item.char
		}, index))
	});
}
function Logo({ className = "", iconOnly = false, withSlogan = true, size = "md", collapseOnScroll = false, isScrolled: controlledIsScrolled }) {
	const [internalIsScrolled, setInternalIsScrolled] = import_react.useState(false);
	import_react.useEffect(() => {
		if (!collapseOnScroll || controlledIsScrolled !== void 0) return;
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setInternalIsScrolled(window.scrollY > 20);
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [collapseOnScroll, controlledIsScrolled]);
	const isScrolled = controlledIsScrolled !== void 0 ? controlledIsScrolled : internalIsScrolled;
	const iconSizes = {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-14 h-14"
	};
	const textSizes = {
		sm: "text-xl sm:text-2xl",
		md: "text-2xl sm:text-3xl",
		lg: "text-4xl sm:text-5xl"
	};
	const sloganSizes = {
		sm: "text-[8px] tracking-[0.12em]",
		md: "text-[9px] tracking-[0.15em]",
		lg: "text-xs tracking-[0.18em]"
	};
	if (iconOnly) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoIcon, { className: iconSizes[size] });
	const isCollapsed = collapseOnScroll && isScrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex flex-col items-center justify-center transition-all duration-300 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-all duration-300 ease-in-out origin-top ${isCollapsed ? "max-h-0 opacity-0 scale-0 mb-0 pointer-events-none lg:max-h-16 lg:opacity-100 lg:scale-100 lg:mb-1.5 lg:pointer-events-auto overflow-hidden" : "max-h-16 opacity-100 scale-100 mb-1.5"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoIcon, { className: `${iconSizes[size]} transition-transform hover:scale-105 duration-300` })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoText, { className: `${textSizes[size]} font-bold tracking-tight leading-none` }),
			withSlogan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-all duration-300 ease-in-out origin-bottom ${isCollapsed ? "max-h-0 opacity-0 scale-0 mt-0 pointer-events-none lg:max-h-8 lg:opacity-100 lg:scale-100 lg:mt-1.5 lg:pointer-events-auto overflow-hidden" : "max-h-8 opacity-100 scale-100 mt-1.5"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `block uppercase font-bold text-orange leading-none select-none text-center ${sloganSizes[size]}`,
					style: { fontFamily: "var(--font-display)" },
					children: "Where Happy Creation Begin"
				})
			})
		]
	});
}
function AccordionItem({ title, to, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const toggle = () => setOpen((o) => !o);
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-[#E8DDF8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full flex items-center justify-between py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to,
				className: "font-display text-lg font-bold text-orange hover:text-orange/80 transition",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				className: "font-display font-bold text-orange text-2xl leading-none transition-transform duration-300 pl-4 cursor-pointer border-none bg-transparent outline-none focus:outline-none",
				style: { transform: open ? "rotate(45deg)" : "rotate(0deg)" },
				"aria-label": open ? "Collapse" : "Expand",
				children: "+"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden transition-all duration-300",
			style: { maxHeight: open ? "400px" : "0px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-4 text-sm text-[#E8DDF8] space-y-2",
				children
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-[#E8DDF8]/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: toggle,
			className: "w-full flex items-center justify-between py-4 text-left font-display text-lg font-bold text-orange hover:text-orange/80 transition cursor-pointer border-none bg-transparent outline-none focus:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-orange text-2xl leading-none transition-transform duration-300 pl-4 select-none",
				style: { transform: open ? "rotate(45deg)" : "rotate(0deg)" },
				children: "+"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden transition-all duration-300",
			style: { maxHeight: open ? "400px" : "0px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-4 text-sm text-[#E8DDF8] space-y-2",
				children
			})
		})]
	});
}
function SocialIcons({ hoverBgClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt",
			target: "_blank",
			rel: "noopener noreferrer",
			className: `group relative flex items-center justify-center p-1 rounded-xl transition-all duration-300 ${hoverBgClass}`,
			title: "Follow us on Instagram",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "w-10 h-10 transition-transform duration-300 group-hover:scale-110",
				fill: "none",
				stroke: "url(#ig-footer-grad)",
				strokeWidth: "1.8",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "5",
						y: "5",
						width: "22",
						height: "22",
						rx: "6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "22",
						cy: "10",
						r: "1.2"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "https://wa.me/918921502990",
			target: "_blank",
			rel: "noopener noreferrer",
			className: `group relative flex items-center justify-center p-1 rounded-xl transition-all duration-300 ${hoverBgClass}`,
			title: "Chat with us on WhatsApp",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				className: "w-10 h-10 p-[3px] transition-transform duration-300 group-hover:scale-110",
				fill: "#25D366",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" })
			})
		})]
	});
}
function Footer() {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Thank you for staying linked! 🌸");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-cream text-foreground pt-10 pb-6 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				style: {
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden"
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "ig-footer-grad",
					x1: "0%",
					y1: "100%",
					x2: "100%",
					y2: "0%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#f9ce34"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "30%",
							stopColor: "#ee2a7b"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "60%",
							stopColor: "#d82b7a"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#6228d7"
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden max-w-xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						title: "About Us",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col items-start mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								size: "sm",
								withSlogan: true,
								className: "items-start text-left"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/70",
							children: "Spreading kawaii joy, one cute package at a time. Pan-India delivery."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem, {
						title: "Let's stay linked!",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/70 mb-2",
								children: "Get cute drops in your inbox."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "flex gap-2",
								onSubmit: handleSubmit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "you@cute.com",
									className: "flex-1 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 placeholder:text-foreground/40 text-sm text-foreground outline-none focus:border-orange/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-4 py-2 rounded-full bg-orange hover:bg-purple text-white transition font-semibold text-sm",
									children: "Join"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, { hoverBgClass: "hover:bg-orange/10" })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem, {
						title: "Contact Us",
						to: "/contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-foreground/80 hover:text-orange transition",
									children: "Contact page"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "text-foreground/80 hover:text-orange transition",
									children: "Track order"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "text-foreground/80 hover:text-orange transition",
									children: "Shipping info"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "text-foreground/80 hover:text-orange transition",
									children: "Returns"
								}) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-center text-xs text-foreground/50",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							", HAPYEZTA | All rights reserved"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:block bg-[#5B2D91] text-white rounded-2xl pt-14 pb-8 px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-4 gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col items-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								size: "md",
								withSlogan: true,
								className: "items-start text-left"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#E8DDF8]",
							children: "Spreading kawaii joy, one cute package at a time. Pan-India delivery."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg mb-3 text-white font-semibold",
							children: "Shop"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-[#E8DDF8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Stationery"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Journals"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Gift sets"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Bottles"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg mb-3 text-white font-semibold",
							children: "Help"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-[#E8DDF8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Track order"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Shipping"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-[#FFB84D] transition",
									children: "Returns"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-[#FFB84D] transition",
									children: "Contact"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg mb-3 text-white font-semibold",
								children: "Stay in the loop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#E8DDF8] mb-3",
								children: "Get cute drops in your inbox."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "flex gap-2",
								onSubmit: handleSubmit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "you@cute.com",
									className: "flex-1 px-4 py-2 rounded-full bg-white/10 border border-[#E8DDF8]/20 placeholder:text-[#E8DDF8]/50 text-sm text-white outline-none focus:border-[#FFB84D]/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-4 py-2 rounded-full bg-[#FFB84D] hover:bg-white text-[#5B2D91] transition font-semibold text-sm",
									children: "Join"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, { hoverBgClass: "hover:bg-white/10" })
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto mt-10 pt-6 border-t border-[#E8DDF8]/20 text-center text-xs text-[#E8DDF8]/70",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Hapyezta · Made with 💛 in India"
					]
				})]
			})
		]
	});
}
//#endregion
export { LogoText as i, Logo as n, LogoIcon as r, Footer as t };
