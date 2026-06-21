import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartContext-DEOpd4EQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-DjnI0Cv8.png";
var CartContext = (0, import_react.createContext)(void 0);
var CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = (0, import_react.useState)([]);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const [isInitialized, setIsInitialized] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const storedCart = localStorage.getItem("hapyezta-cart");
			if (storedCart) setCartItems(JSON.parse(storedCart));
		} catch (error) {
			console.error("Failed to load cart from localStorage:", error);
		}
		setIsInitialized(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isInitialized) return;
		try {
			localStorage.setItem("hapyezta-cart", JSON.stringify(cartItems));
		} catch (error) {
			console.error("Failed to save cart to localStorage:", error);
		}
	}, [cartItems, isInitialized]);
	const addToCart = (newItem) => {
		const qty = newItem.quantity ?? 1;
		setCartItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id && item.color === newItem.color);
			if (existingItemIndex > -1) {
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += qty;
				return updatedItems;
			}
			return [...prevItems, {
				...newItem,
				quantity: qty
			}];
		});
	};
	const removeFromCart = (id, color) => {
		setCartItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.color === color)));
	};
	const updateQuantity = (id, color, quantity) => {
		if (quantity <= 0) {
			removeFromCart(id, color);
			return;
		}
		setCartItems((prevItems) => prevItems.map((item) => item.id === id && item.color === color ? {
			...item,
			quantity
		} : item));
	};
	const clearCart = () => {
		setCartItems([]);
	};
	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);
	const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			cartItems,
			cartCount,
			cartTotal,
			isCartOpen,
			addToCart,
			removeFromCart,
			updateQuantity,
			clearCart,
			openCart,
			closeCart,
			setIsCartOpen
		},
		children
	});
};
var useCart = () => {
	const context = (0, import_react.useContext)(CartContext);
	if (context === void 0) throw new Error("useCart must be used within a CartProvider");
	return context;
};
//#endregion
export { logo_default as n, useCart as r, CartProvider as t };
