import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useCart } from "./CartContext-DEOpd4EQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Footer } from "./Footer-CSTTyPDU.mjs";
import { a as Star, c as ShoppingBag, g as Instagram, o as Sparkles, r as Truck, v as Heart } from "../_libs/lucide-react.mjs";
import { n as MarqueeBanner, t as Header } from "./MarqueeBanner-Cac60ImZ.mjs";
import { n as products } from "./products-Dt_C5rie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUnDuBgf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-D4sQhXBK.jpg";
var hero_slide_1_default = "/assets/hero_slide_1-u181FG9_.png";
var hero_slide_2_default = "/assets/hero_slide_2-CG24HyXZ.png";
var hero_slide_3_default = "/assets/hero_slide_3-CtBkuCsG.png";
var categories = [
	{
		name: "Cute Stationery",
		img: "/assets/c1-DDw-HSkX.jpg",
		color: "var(--teal)"
	},
	{
		name: "Pencil Cases",
		img: "/assets/c2-DnmHE19B.jpg",
		color: "var(--coral)"
	},
	{
		name: "Journal Supplies",
		img: "/assets/c3-DB3DU8Ux.jpg",
		color: "var(--yellow)"
	},
	{
		name: "Sling & School Bags",
		img: "/assets/c4-BIpF6Ish.jpg",
		color: "var(--purple)"
	},
	{
		name: "Bottles & Tumblers",
		img: "/assets/c5-CntYl2gc.jpg",
		color: "var(--orange)"
	},
	{
		name: "Lunch Box",
		img: "/assets/c6-BzClwCQQ.jpg",
		color: "var(--coral)"
	},
	{
		name: "Gift Sets",
		img: "/assets/c7-DmykLzsy.jpg",
		color: "var(--teal)"
	},
	{
		name: "Makeup Pouches",
		img: "/assets/c8-BUHh1MH5.jpg",
		color: "var(--purple)"
	}
];
var testimonials = [
	{
		name: "Aarushi K.",
		emoji: "👧",
		stars: 5,
		text: "I ordered the lavender journal kit and it's absolutely the cutest thing I own. Packaging was so thoughtful — felt like unwrapping a present. Will be ordering again very soon!"
	},
	{
		name: "Kabir M.",
		emoji: "👦",
		stars: 5,
		text: "The Kawaii Duck Organizer is perfect for my study desk! It holds all my pastel markers and looks so adorable. Shipping was super fast too. Highly recommended!"
	},
	{
		name: "Ananya S.",
		emoji: "👩",
		stars: 5,
		text: "Absolutely in love with the sticker packs and school bags! The quality of the prints is amazing, and my daughter is so happy with her new puppy lunch bag. 10/10!"
	}
];
function Index() {
	const { cartCount, openCart, addToCart } = useCart();
	const [currentHeroIndex, setCurrentHeroIndex] = (0, import_react.useState)(0);
	const heroImages = [
		hero_default,
		hero_slide_1_default,
		hero_slide_2_default,
		hero_slide_3_default
	];
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
		}, 3e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-16 lg:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 bg-yellow/30 text-purple px-4 py-1.5 rounded-full text-sm font-semibold mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " Back to School Drop"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] sm:leading-[0.95] text-purple",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block whitespace-nowrap",
									children: "Where Happy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-orange",
										children: "Creation "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-orange",
										children: "Begin."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg text-foreground/70 max-w-md",
								children: "Kawaii stationery, dreamy journals & gift sets handpicked to make every desk a little happier."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#collection",
									className: "px-7 py-3.5 rounded-full bg-coral text-white font-bold shadow-[0_6px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#c4513f] transition-all",
									children: "Shop the drop"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#featured",
									className: "px-7 py-3.5 rounded-full bg-white border-2 border-purple text-purple font-bold hover:bg-purple hover:text-white transition",
									children: "New arrivals"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex gap-6 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-teal",
										children: "500+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-foreground/60",
										children: "Cute picks"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-orange",
										children: "10k+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-foreground/60",
										children: "Happy fans"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-purple",
										children: "4.9★"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-foreground/60",
										children: "Reviews"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-6 -right-6 w-40 h-40 bg-yellow rounded-full -z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 bg-teal rounded-full -z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-[-2deg] aspect-square w-full",
								children: heroImages.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img,
									alt: "Kawaii stationery collection",
									width: 1024,
									height: 1024,
									className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`
								}, index))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-4 -left-2 bg-white rounded-2xl shadow-xl px-3 py-2 rotate-[-8deg] text-xs font-bold text-coral flex items-center gap-1.5 z-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 fill-coral" }), " So cute!"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 -right-2 bg-white rounded-2xl shadow-xl px-3 py-2 rotate-[6deg] text-xs font-bold text-teal flex items-center gap-1.5 z-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-3 h-3" }), " Free shipping"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "collection",
				className: "py-16 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-coral font-semibold tracking-widest text-xs uppercase",
								children: "Browse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl sm:text-5xl text-purple mt-2",
								children: "Our Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-center gap-1 mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-teal" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-orange" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-yellow" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-purple" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-coral" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square rounded-3xl overflow-hidden shadow-md group-hover:scale-105 group-hover:-rotate-2 transition-transform p-3",
								style: { backgroundColor: c.color },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full rounded-2xl overflow-hidden bg-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.img,
										alt: c.name,
										loading: "lazy",
										width: 600,
										height: 600,
										className: "w-full h-full object-cover"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-center font-semibold text-sm sm:text-base text-foreground group-hover:text-coral transition",
								children: c.name
							})]
						}, c.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "featured",
				className: "py-16 px-4 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-teal font-semibold tracking-widest text-xs uppercase",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl sm:text-5xl text-purple mt-2",
								children: "Best Sellers"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-5 py-2 rounded-full bg-purple text-white font-semibold text-sm",
									children: "Best Sellers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-5 py-2 rounded-full border-2 border-purple/30 text-purple font-semibold text-sm",
									children: "New In"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
							children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-cream rounded-3xl overflow-hidden border-2 border-transparent hover:border-coral transition group flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square overflow-hidden bg-white",
									children: [
										p.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 z-10 bg-coral text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
											children: p.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => alert(`${p.name} added to favorites! 💖`),
											className: "absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full grid place-items-center text-coral hover:bg-coral hover:text-white transition shadow cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: p.id },
											className: "block w-full h-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.img,
												alt: p.name,
												loading: "lazy",
												width: 800,
												height: 800,
												className: "w-full h-full object-cover group-hover:scale-105 transition"
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex-1 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$productId",
										params: { productId: p.id },
										className: "hover:text-coral transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-sm sm:text-base text-foreground line-clamp-2 min-h-[2.5rem]",
											children: p.name
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-lg text-purple",
											children: p.price
										}), p.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-foreground/40 line-through",
											children: p.oldPrice
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											addToCart({
												id: p.id,
												name: p.name,
												price: parseFloat(p.price.replace(/[^\d.]/g, "")),
												priceString: p.price,
												img: p.img
											});
											openCart();
										},
										className: "mt-3 w-full py-2 rounded-full bg-purple text-white text-sm font-semibold hover:bg-coral transition cursor-pointer",
										children: "Add to cart"
									})]
								})]
							}, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "inline-block px-8 py-3 rounded-full border-2 border-purple text-purple font-bold hover:bg-purple hover:text-white transition",
								children: "View all →"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto grid sm:grid-cols-3 gap-4",
					children: [
						{
							c: "var(--teal)",
							t: "Free Shipping",
							s: "On orders ₹999+",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-6 h-6" })
						},
						{
							c: "var(--orange)",
							t: "Delivery All Over India",
							s: "Available across India",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-6 h-6" })
						},
						{
							c: "var(--coral)",
							t: "Loved by 10k+",
							s: "5-star kawaii fans",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-6 h-6" })
						}
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl p-6 text-white flex items-center gap-4",
						style: { backgroundColor: b.c },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 bg-white/25 rounded-2xl grid place-items-center",
							children: b.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl",
							children: b.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm opacity-90",
							children: b.s
						})] })]
					}, b.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 px-4 bg-yellow/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-orange font-semibold tracking-widest text-xs uppercase",
								children: "Love Notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl sm:text-5xl text-purple mt-2",
								children: "What our clients say"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-center gap-1 mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-teal" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-orange" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-yellow" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition duration-300 border-2 border-transparent hover:border-yellow/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-coral to-purple grid place-items-center text-2xl mb-4 select-none",
									children: t.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg text-purple text-center font-semibold",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center gap-0.5 my-2.5 text-yellow",
									children: [...Array(t.stars)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow text-yellow" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-foreground/75 italic text-sm leading-relaxed text-center mt-2",
									children: [
										"\"",
										t.text,
										"\""
									]
								})
							] })
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "insta",
				className: "py-16 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto text-center animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 text-teal font-semibold tracking-widest text-xs uppercase hover:text-coral transition-colors duration-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4" }), " @hapyezta"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl sm:text-5xl text-purple mt-2 mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-coral transition-colors duration-200",
								children: "Instagram shop"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
							children: products.slice(0, 6).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 block shadow-sm hover:shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: "Instagram shop item",
									loading: "lazy",
									width: 400,
									height: 400,
									className: "w-full h-full object-cover"
								})
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
