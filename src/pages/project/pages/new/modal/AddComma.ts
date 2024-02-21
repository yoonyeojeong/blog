export function AddComma(number: number): string | null {
  let returnString = number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
}
