import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Footer } from "./Footer-CSTTyPDU.mjs";
import { f as Phone, l as Send, m as Mail } from "../_libs/lucide-react.mjs";
import { n as MarqueeBanner, t as Header } from "./MarqueeBanner-Cac60ImZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-5Cbrwy8_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-3xl mx-auto px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-foreground/60 mb-10 justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-coral transition font-semibold",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-purple font-bold",
								children: "Contact Us"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl sm:text-6xl text-orange font-bold mb-3 tracking-normal",
							children: "Contact Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/75 font-body text-base sm:text-lg",
							children: "Have questions? We'd love to hear from you!"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full bg-white rounded-[2rem] p-6 sm:p-10 border-2 border-yellow/20 shadow-[0_12px_40px_rgba(127,88,165,0.06)] max-w-xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase",
									children: "Your Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Enter your name...",
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "w-full px-6 py-4 rounded-full border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground placeholder:text-foreground/30"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "Enter your email...",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: "w-full px-6 py-4 rounded-full border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground placeholder:text-foreground/30"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-orange font-display font-bold text-xs tracking-widest mb-2 uppercase",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									placeholder: "Write your dreamy thoughts here...",
									rows: 5,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									className: "w-full px-6 py-4 rounded-[2rem] border-2 border-yellow/20 focus:border-orange bg-cream/10 text-sm outline-none transition font-body text-foreground resize-none placeholder:text-foreground/30"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full py-4 rounded-full bg-orange hover:bg-orange/95 text-white font-bold shadow-[0_5px_0_0_#c4513f] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#c4513f] transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm font-display uppercase tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Send Message"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-white rounded-[2rem] p-8 border-2 border-yellow/20 shadow-[0_12px_40px_rgba(127,88,165,0.06)] max-w-xl mx-auto mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl sm:text-2xl text-orange font-bold mb-6 text-left",
							children: "Store Information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full bg-cream border border-orange/20 flex items-center justify-center text-orange shrink-0 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-base text-orange font-bold",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+918921502990",
										className: "text-sm text-foreground/75 hover:text-coral transition font-body",
										children: "+91 89215 02990"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full bg-cream border border-orange/20 flex items-center justify-center text-orange shrink-0 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-base text-orange font-bold",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:hapyezta@gmail.com",
										className: "text-sm text-foreground/75 hover:text-coral transition font-body",
										children: "hapyezta@gmail.com"
									})]
								})]
							})]
						})]
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
//#endregion
export { Contact as component };
