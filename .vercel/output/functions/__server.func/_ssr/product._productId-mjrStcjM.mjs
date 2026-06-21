import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useCart } from "./CartContext-DEOpd4EQ.mjs";
import { _ as useRouter, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Footer } from "./Footer-CSTTyPDU.mjs";
import { E as ArrowLeft, a as Star, d as Plus, o as Sparkles, p as Minus, r as Truck, s as ShoppingCart, v as Heart, x as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as MarqueeBanner, t as Header } from "./MarqueeBanner-Cac60ImZ.mjs";
import { n as products, t as getProductById } from "./products-Dt_C5rie.mjs";
import { t as Route } from "./product._productId-CY1DPTi8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._productId-mjrStcjM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetails() {
	const { cartCount, openCart, addToCart } = useCart();
	const { productId } = Route.useParams();
	const product = getProductById(productId);
	useRouter();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [productId]);
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [selectedColor, setSelectedColor] = (0, import_react.useState)(product && product.colors.length > 0 ? product.colors[0] : "");
	const [isFavorite, setIsFavorite] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("description");
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-center justify-center px-4 py-16 text-center max-w-md mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-24 h-24 rounded-full bg-coral/10 grid place-items-center text-4xl mb-6 select-none animate-bounce",
					children: "😿"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-purple",
					children: "Product Not Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-foreground/75 font-body text-sm leading-relaxed",
					children: "Oops! The cute product you are looking for doesn't exist or has wandered off."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 px-7 py-3 rounded-full bg-coral text-white font-bold shadow-[0_6px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#c4513f] transition-all",
					children: "Back to Shop"
				})
			]
		})]
	});
	const handleDecreaseQuantity = () => {
		if (quantity > 1) setQuantity((prev) => prev - 1);
	};
	const handleIncreaseQuantity = () => {
		setQuantity((prev) => prev + 1);
	};
	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			name: product.name,
			price: parseFloat(product.price.replace(/[^\d.]/g, "")),
			priceString: product.price,
			img: product.img,
			color: selectedColor || void 0,
			quantity
		});
		openCart();
	};
	const handleNotifyMe = () => {
		alert(`We will notify you when ${product.name} is back in stock! 🌸`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-16 lg:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-7xl mx-auto px-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4 mb-8 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-foreground/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-coral transition font-semibold",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "collection",
									className: "hover:text-coral transition font-semibold",
									children: "Shop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-purple font-bold truncate max-w-[200px]",
									children: product.name
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 text-purple hover:text-coral font-bold transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to Shop"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-8 lg:gap-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl aspect-square bg-white rotate-[-1deg] hover:rotate-0 transition-all duration-300",
									children: [
										product.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-4 left-4 z-10 bg-coral text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow",
											children: product.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setIsFavorite(!isFavorite),
											className: `absolute top-4 right-4 z-10 w-10 h-10 rounded-full grid place-items-center transition shadow cursor-pointer ${isFavorite ? "bg-coral text-white" : "bg-white text-coral hover:bg-coral hover:text-white"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `w-5 h-5 ${isFavorite ? "fill-white" : ""}` })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.img,
											alt: product.name,
											className: "w-full h-full object-cover"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -right-4 w-24 h-24 bg-yellow rounded-full -z-10 opacity-60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-4 -left-4 w-16 h-16 bg-teal rounded-full -z-10 opacity-60" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6 bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border-2 border-yellow/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full",
										children: product.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-yellow",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-yellow" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-foreground/50 font-bold ml-1",
												children: "(5.0)"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-3xl sm:text-4xl text-purple leading-tight",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4 flex-wrap border-y border-purple/5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-3xl text-purple",
											children: product.price
										}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-foreground/40 line-through",
											children: product.oldPrice
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										product.stockStatus === "in_stock" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-bold border border-teal/20",
											children: "✓ In Stock"
										}),
										product.stockStatus === "low_stock" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-bold border border-orange/20 animate-pulse",
											children: "⚠️ Low Stock"
										}),
										product.stockStatus === "sold_out" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200",
											children: "✕ Sold Out"
										})
									] })]
								}),
								product.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-bold text-purple uppercase tracking-wider",
										children: ["Color: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-coral",
											children: selectedColor
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-2",
										children: product.colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSelectedColor(color),
											className: `px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border-2 ${selectedColor === color ? "border-coral bg-coral text-white" : "border-purple/10 bg-white text-purple hover:border-purple/30"}`,
											children: color
										}, color))
									})]
								}),
								product.stockStatus !== "sold_out" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-purple uppercase tracking-wider block",
										children: "Quantity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center bg-white border-2 border-purple/15 rounded-full overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleDecreaseQuantity,
												className: "p-3 hover:bg-cream transition text-purple cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3.5 h-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-5 font-bold text-sm text-purple select-none min-w-[3rem] text-center",
												children: quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleIncreaseQuantity,
												className: "p-3 hover:bg-cream transition text-purple cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2 space-y-3",
									children: product.stockStatus !== "sold_out" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleAddToCart,
										className: "w-full py-4 rounded-full bg-purple hover:bg-purple/95 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "w-4 h-4" }), " Add to cart"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											addToCart({
												id: product.id,
												name: product.name,
												price: parseFloat(product.price.replace(/[^\d.]/g, "")),
												priceString: product.price,
												img: product.img,
												color: selectedColor || void 0,
												quantity
											});
											navigate({ to: "/checkout" });
										},
										className: "w-full py-4 rounded-full bg-coral hover:bg-coral/95 text-white font-bold text-sm shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all duration-300 cursor-pointer",
										children: "Buy it now"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: true,
										className: "w-full py-4 rounded-full border-2 border-red-200 text-red-400 bg-white/70 font-bold text-sm cursor-not-allowed flex items-center justify-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4" }), " Sold out"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleNotifyMe,
										className: "w-full py-4 rounded-full bg-coral hover:bg-coral/95 text-white font-bold text-sm shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all duration-300 cursor-pointer",
										children: "Notify Me"
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-purple/5 grid grid-cols-2 gap-4 text-xs font-semibold text-foreground/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pan-India Delivery" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Kawaii Quality" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-purple/5 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex border-b border-purple/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveTab("description"),
											className: `pb-2 pr-4 font-display text-sm font-semibold transition cursor-pointer relative ${activeTab === "description" ? "text-purple" : "text-foreground/40"}`,
											children: ["Description", activeTab === "description" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 right-4 h-0.5 bg-purple" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveTab("details"),
											className: `pb-2 px-4 font-display text-sm font-semibold transition cursor-pointer relative ${activeTab === "details" ? "text-purple" : "text-foreground/40"}`,
											children: ["Product Details", activeTab === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-4 right-4 h-0.5 bg-purple" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-foreground/75 leading-relaxed font-body",
										children: activeTab === "description" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1.5 list-disc pl-5",
											children: product.details.map((detail, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: detail }, idx))
										})
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16 pt-12 border-t border-purple/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl sm:text-3xl text-purple mb-8 text-center",
							children: "You May Also Like"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
							children: products.filter((p) => p.id !== product.id).slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-cream rounded-3xl overflow-hidden border-2 border-transparent hover:border-coral transition group flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-square overflow-hidden bg-white",
									children: [p.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-3 left-3 z-10 bg-coral text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
										children: p.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$productId",
										params: { productId: p.id },
										className: "block w-full h-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.img,
											alt: p.name,
											loading: "lazy",
											className: "w-full h-full object-cover group-hover:scale-105 transition"
										})
									})]
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
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$productId",
										params: { productId: p.id },
										className: "mt-3 w-full py-2 rounded-full bg-purple hover:bg-coral text-white text-sm font-semibold text-center transition block",
										children: "View Details"
									})]
								})]
							}, p.name))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductDetails as component };
