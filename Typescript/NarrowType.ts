function getNetProductFormat(
  amount: number,
  price: number,
  format: boolean
): string | number {
  return format ? `$${amount * price}` : amount * price;
}

let totalValueGen: string = getNetProductFormat(2, 4, true) as string;
let totalValueNum: number = getNetProductFormat(3, 4, false) as number;
