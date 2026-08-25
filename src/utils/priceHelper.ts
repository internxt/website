import bytes from 'bytes';
import { Interval } from '@/services/stripe.service';

const CURRENCY_MAP = {
    eur: '€',
    usd: '$',
};

export interface PlanById {
    priceId: string;
    storage: string;
    price: number;
    currency: string;
    currencyValue: string;
    interval: Interval;
}

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

/**
 * Normalizes a raw Stripe price (as returned by the payments API) into the shape
 * the pricing components expect, for prices that are not part of the curated
 * list returned by `stripeService.getPrices` (antivirus, partner deals, etc).
 */
export const normalizePlanById = (price: any): PlanById => ({
    priceId: price.id,
    storage: bytes(price.bytes),
    price: price.decimalAmount,
    currency: CURRENCY_MAP[price.currency] ?? price.currency,
    currencyValue: price.currency,
    interval: price.interval,
});
