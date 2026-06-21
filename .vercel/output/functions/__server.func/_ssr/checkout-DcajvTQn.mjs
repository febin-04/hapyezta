import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useCart } from "./CartContext-DEOpd4EQ.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Logo, t as Footer } from "./Footer-CSTTyPDU.mjs";
import { C as ChevronDown, E as ArrowLeft, S as ChevronUp, b as CircleCheckBig, c as ShoppingBag, w as Check, y as CreditCard } from "../_libs/lucide-react.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DcajvTQn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var INDIAN_STATES = [
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttar Pradesh",
	"Uttarakhand",
	"West Bengal",
	"Andaman and Nicobar Islands",
	"Chandigarh",
	"Dadra and Nagar Haveli and Daman and Diu",
	"Delhi",
	"Jammu and Kashmir",
	"Ladakh",
	"Lakshadweep",
	"Puducherry"
];
var getStateFromPincode = (pin) => {
	if (pin.length < 2) return "";
	const prefix = parseInt(pin.slice(0, 2), 10);
	if (prefix === 11) return "Delhi";
	if (prefix >= 12 && prefix <= 13) return "Haryana";
	if (prefix >= 14 && prefix <= 15) return "Punjab";
	if (prefix === 16) return "Punjab";
	if (prefix === 17) return "Himachal Pradesh";
	if (prefix >= 18 && prefix <= 19) return "Jammu and Kashmir";
	if (prefix >= 20 && prefix <= 28) return "Uttar Pradesh";
	if (prefix >= 30 && prefix <= 34) return "Rajasthan";
	if (prefix >= 36 && prefix <= 39) return "Gujarat";
	if (prefix >= 40 && prefix <= 44) return "Maharashtra";
	if (prefix >= 45 && prefix <= 48) return "Madhya Pradesh";
	if (prefix === 49) return "Chhattisgarh";
	if (prefix >= 50 && prefix <= 53) {
		if (prefix === 50) return "Telangana";
		return "Andhra Pradesh";
	}
	if (prefix >= 56 && prefix <= 59) return "Karnataka";
	if (prefix >= 60 && prefix <= 64) return "Tamil Nadu";
	if (prefix >= 67 && prefix <= 69) return "Kerala";
	if (prefix >= 70 && prefix <= 74) return "West Bengal";
	if (prefix >= 75 && prefix <= 77) return "Odisha";
	if (prefix === 78) return "Assam";
	if (prefix >= 80 && prefix <= 85) return "Bihar";
	return "";
};
function Checkout() {
	const { cartItems, cartTotal, clearCart } = useCart();
	useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [street, setStreet] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [selectedState, setSelectedState] = (0, import_react.useState)("");
	const [pincode, setPincode] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("online");
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [orderId, setOrderId] = (0, import_react.useState)("");
	const [deliveryDateRange, setDeliveryDateRange] = (0, import_react.useState)("");
	const FREE_SHIPPING_THRESHOLD = 999;
	const isKeralaPincode = /^(67|68|69)/.test(pincode);
	const isOtherPincode = pincode.length >= 2 && !isKeralaPincode;
	const shippingCost = isKeralaPincode || selectedState === "Kerala" && !isOtherPincode ? 60 : 100;
	const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
	const grandTotal = cartTotal + (isFreeShipping ? 0 : shippingCost);
	const generateOrderDetails = () => {
		setOrderId(`HAP-2026-${Math.floor(1e3 + Math.random() * 9e3)}`);
		const options = {
			month: "short",
			day: "numeric"
		};
		const today = /* @__PURE__ */ new Date();
		const minDelivery = new Date(today);
		minDelivery.setDate(today.getDate() + 3);
		const maxDelivery = new Date(today);
		maxDelivery.setDate(today.getDate() + 5);
		setDeliveryDateRange(`${minDelivery.toLocaleDateString("en-IN", options)} – ${maxDelivery.toLocaleDateString("en-IN", options)}, ${maxDelivery.getFullYear()}`);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (cartItems.length === 0) {
			alert("Your cart is empty! Add some cute items first 🌸");
			return;
		}
		if (!name || !email || !phone || !street || !city || !selectedState || !pincode) {
			alert("Please fill in all the shipping and personal details 🌸");
			return;
		}
		if (!/^\d{6}$/.test(pincode)) {
			alert("Please enter a valid 6-digit PIN code 🌸");
			return;
		}
		if (!/^\+?\d{10,12}$/.test(phone.replace(/\s+/g, ""))) {
			alert("Please enter a valid phone number 🌸");
			return;
		}
		generateOrderDetails();
		setIsSubmitted(true);
	};
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		if (isSubmitted) clearCart();
	}, [isSubmitted]);
	if (isSubmitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-yellow/30 py-4 px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						size: "sm",
						withSlogan: false,
						className: "items-center"
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "max-w-xl mx-auto px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-yellow/20 shadow-xl text-center space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 mx-auto rounded-full bg-teal/10 grid place-items-center text-teal animate-bounce",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-12 h-12" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl text-purple font-bold",
							children: "Yay! Order Placed!"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/75 font-body text-sm",
							children: "Thank you for shopping with us! Adorable packages are heading your way soon. 🌸✨"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 bg-cream/35 rounded-2xl border border-purple/5 text-left space-y-3 font-body text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-purple/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-purple/60 font-semibold uppercase text-xs tracking-wider",
									children: "Order ID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-purple",
									children: orderId
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-purple/10 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-purple/60 font-semibold uppercase text-xs tracking-wider",
									children: "Delivery estimate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-teal",
									children: deliveryDateRange
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-purple/60 font-semibold uppercase text-[10px] tracking-wider block",
										children: "Deliver To"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-purple",
										children: name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-foreground/70 leading-relaxed",
										children: [
											street,
											", ",
											city,
											", ",
											selectedState,
											" – ",
											pincode
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-foreground/60",
										children: ["Phone: ", phone]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex px-8 py-3.5 rounded-full bg-coral hover:bg-coral/95 text-white font-bold shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all text-sm cursor-pointer",
							children: "Continue Shopping"
						})
					})
				]
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-yellow/30 py-4 px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-1 text-purple hover:text-coral transition font-bold text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to Shop"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							size: "sm",
							withSlogan: false,
							className: "items-center"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24" })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "max-w-7xl mx-auto px-4 py-10",
			children: cartItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-20 max-w-md mx-auto space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 mx-auto rounded-full bg-coral/10 grid place-items-center text-4xl select-none",
						children: "😿"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-purple",
						children: "Your checkout is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/75 font-body text-sm leading-relaxed",
						children: "Add some dreamy items to your cart before proceeding to checkout!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-block px-7 py-3 rounded-full bg-purple text-white font-bold shadow-[0_4px_0_0_#492275] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#492275] transition-all",
						children: "Go Shop Adorable Things"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-yellow/20 shadow-md space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-purple border-b border-purple/5 pb-3",
						children: "Shipping & Personal Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-6 font-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-bold text-orange uppercase tracking-wider",
										children: "1. Contact Information"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "Your full name",
											value: name,
											onChange: (e) => setName(e.target.value),
											className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											required: true,
											placeholder: "you@email.com",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
										children: "Phone Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										placeholder: "10-digit mobile number",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 pt-4 border-t border-purple/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-bold text-orange uppercase tracking-wider",
										children: "2. Delivery Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
										children: "Street Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										placeholder: "House no., street name, apartment name",
										value: street,
										onChange: (e) => setStreet(e.target.value),
										className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid sm:grid-cols-3 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
												children: "City"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "City",
												value: city,
												onChange: (e) => setCity(e.target.value),
												className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
												children: "State"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: selectedState,
												onValueChange: setSelectedState,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs text-foreground outline-none transition shadow-none h-auto focus:ring-0 focus:ring-offset-0 [&>span]:line-clamp-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select State" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
													className: "bg-white border-2 border-yellow/20 rounded-2xl max-h-[300px] overflow-y-auto z-50",
													children: INDIAN_STATES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: st,
														className: "text-xs text-purple font-semibold focus:bg-cream focus:text-orange rounded-full cursor-pointer py-2.5 pl-4 pr-8 transition-colors",
														children: st
													}, st))
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-purple/80 text-xs font-bold mb-1.5 pl-2",
												children: "PIN Code"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												maxLength: 6,
												placeholder: "6 digits",
												value: pincode,
												onChange: (e) => {
													const val = e.target.value.replace(/\D/g, "").slice(0, 6);
													setPincode(val);
													const detectedState = getStateFromPincode(val);
													if (detectedState) setSelectedState(detectedState);
												},
												className: "w-full px-5 py-3 rounded-full border-2 border-yellow/10 focus:border-orange bg-cream/10 text-xs outline-none transition placeholder:text-foreground/30 text-foreground"
											})] })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 pt-4 border-t border-purple/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-bold text-orange uppercase tracking-wider",
									children: "3. Payment Method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl border-2 border-coral bg-coral/5 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-5 h-5 text-coral shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-bold text-xs text-purple",
											children: "Pay Online (UPI, Card, NetBanking)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] text-foreground/60 leading-tight",
											children: "Fast, secure, and fully encrypted transaction"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-teal font-bold bg-teal/10 px-2.5 py-1 rounded-full uppercase tracking-wider",
										children: "Secure"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full py-4 rounded-full bg-coral hover:bg-coral/95 text-white font-bold shadow-[0_4px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#c4513f] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm",
									children: [
										"Place Order 🌸 (₹",
										grandTotal,
										")"
									]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-yellow/20 shadow-md space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-xl text-purple border-b border-purple/5 pb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-5 h-5" }), " Order Summary"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-purple/5 max-h-[300px] overflow-y-auto pr-1 space-y-3.5 pb-2",
							children: cartItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-3.5 first:pt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-xl border border-purple/10 overflow-hidden shrink-0 bg-cream/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.img,
											alt: item.name,
											className: "w-full h-full object-cover"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-xs text-foreground truncate",
											title: item.name,
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-[10px] text-muted-foreground mt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Qty: ", item.quantity] }), item.color && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Color: ", item.color] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-bold text-purple shrink-0 pl-2",
										children: ["₹", item.price * item.quantity]
									})
								]
							}, `${item.id}-${item.color}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-purple/10 pt-4 space-y-2 font-body text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-purple",
										children: ["₹", cartTotal]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), isFreeShipping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-teal font-bold",
										children: "FREE"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-purple",
										children: ["₹", shippingCost]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm font-bold text-purple pt-2 border-t border-purple/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", grandTotal] })]
								})
							]
						})
					]
				})]
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
//#endregion
export { Checkout as component };
