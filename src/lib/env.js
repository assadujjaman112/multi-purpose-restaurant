export const PHONE = import.meta.env.VITE_PHONE || null;

const _parsedTax = parseFloat(import.meta.env.VITE_TAX_RATE);
export const TAX_RATE = Number.isFinite(_parsedTax) ? _parsedTax : 0.1;
