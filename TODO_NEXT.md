Plan/steps:
- Update `cart.js` to guarantee `addToCart`, `clearCart`, `viewCart`, `checkout`, `placeOrder` are attached to `window` reliably.
- Add `initCartButtons()` that auto-wires buttons in any page:
  - support `[data-add-to-cart]` OR buttons with `data-name`/`data-price`
  - as fallback, wire buttons whose text contains "Add To Cart" (best-effort)
- Ensure auto-init runs on DOMContentLoaded and also immediately if DOM is ready.
- After edits, manual test: add items from index/shop/men/women and verify cartCount/cartTotal update and localStorage changes.
