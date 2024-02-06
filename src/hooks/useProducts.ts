import { currencyService } from '@/components/services/currency.service';
import { ProductsProps, stripeService } from '@/components/services/stripe.service';
import { useEffect, useState } from 'react';

function useStripeAndCurrency() {
  const [products, setProducts] = useState<ProductsProps>();
  const [loadingCards, setLoadingCards] = useState(true);
  const [currency, setCurrency] = useState({ symbol: '€', value: 1 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prices = await stripeService.getAllPrices();
        setProducts(prices);
        setLoadingCards(false);
      } catch (error) {
        try {
          const res = await stripeService.getAllPrices(true);
          setProducts(res);
          setLoadingCards(false);
        } catch (error) {
          console.error('Error getting prices');
        }
      }

      try {
        const res = await currencyService.filterCurrencyByCountry();
        setCurrency({
          symbol: res.symbol,
          value: res.value,
        });
      } catch (err) {
        setCurrency({
          symbol: '€',
          value: 1,
        });
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return { products, loadingCards, currency };
}

export default useStripeAndCurrency;
