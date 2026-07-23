import { Interval } from '@/services/stripe.service'

export const getMinimumPrice = (
    products: any,
    decimalDiscount?: number
): string => {
    const price = Number(products?.individuals?.[Interval.Year]?.[0]?.price);

    if (!price) return '9.99';

    return decimalDiscount
        ?(Math.floor(price * (decimalDiscount / 100) * 100) / 100).toFixed(2)
        : price.toFixed(2);
}