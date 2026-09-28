// Shared stacking order for full-screen overlays (position: fixed).
// Higher values must stay visually on top of lower ones — e.g. Z_POPOVER
// (KeywordDialog) is opened from links inside Z_MODAL pickers and must
// render above them regardless of DOM order.
export const Z_MODAL = 1000; // Equipment/trait/preset picker modals, equipment details
export const Z_ALERT = 2000; // Blocking warnings (e.g. slot overflow)
export const Z_POPOVER = 3000; // KeywordDialog — can appear on top of any modal/alert
