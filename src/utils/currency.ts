import { Currency, CurrencyCode } from '../types';

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rateFromUSD: 1 },
  NPR: { code: 'NPR', symbol: 'NPR Rs. ', name: 'Nepali Rupee', rateFromUSD: 134.5 },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rateFromUSD: 1.52 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rateFromUSD: 0.78 },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rateFromUSD: 1.38 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rateFromUSD: 0.92 },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rateFromUSD: 154.0 },
};

export function formatCurrency(amountUSD: number, currencyCode: CurrencyCode = 'USD'): string {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const converted = amountUSD * currency.rateFromUSD;

  if (currencyCode === 'NPR') {
    // Format Nepali Lakhs/Lakhs readability if large
    if (converted >= 100000) {
      const lakhs = (converted / 100000).toFixed(2);
      return `NPR Rs. ${lakhs} Lakh (${Math.round(converted).toLocaleString()})`;
    }
    return `NPR Rs. ${Math.round(converted).toLocaleString()}`;
  }

  if (currencyCode === 'JPY') {
    return `¥${Math.round(converted).toLocaleString()}`;
  }

  return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
}

export function convertUSD(amountUSD: number, currencyCode: CurrencyCode = 'USD'): number {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  return Math.round(amountUSD * currency.rateFromUSD);
}
