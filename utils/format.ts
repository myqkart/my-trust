const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-IN");

/** Format INR amounts for donation UI. */
export function formatCurrency(amount: number): string {
  return currencyFormatter.format(amount);
}

/** Format large integers with Indian grouping. */
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}
