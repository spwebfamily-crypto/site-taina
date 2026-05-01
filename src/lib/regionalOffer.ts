export const HOTMART_BRAZIL_CHECKOUT_URL =
  "https://pay.hotmart.com/I105606917W?checkoutMode=10&bid=1777577467398";
export const HOTMART_INTERNATIONAL_CHECKOUT_URL =
  "https://pay.hotmart.com/P105501171G?off=ww9yq17z&checkoutMode=10&bid=1777577423390";

export type Market = "brazil" | "uk" | "us" | "international";

export type RegionalOffer = {
  checkoutUrl: string;
  compareAtAmount: string;
  compareAtFormatted: string;
  country: string | null;
  currency: string;
  currencySymbol: string;
  market: Market;
  priceAmount: string;
  priceFormatted: string;
  savingsFormatted: string;
};

type RegionalOfferInput = {
  country?: string | null;
  locale?: string | null;
  timeZone?: string | null;
};

const OFFERS: Record<
  Market,
  {
    compareAt: number;
    currency: string;
    locale: string;
    price: number;
  }
> = {
  brazil: {
    compareAt: 49.9,
    currency: "BRL",
    locale: "pt-BR",
    price: 14.9,
  },
  uk: {
    compareAt: 16.9,
    currency: "GBP",
    locale: "en-GB",
    price: 5.9,
  },
  us: {
    compareAt: 19.9,
    currency: "USD",
    locale: "en-US",
    price: 7.9,
  },
  international: {
    compareAt: 19.9,
    currency: "EUR",
    locale: "pt-PT",
    price: 6.9,
  },
};

const TIME_ZONE_TO_COUNTRY: Record<string, string> = {
  "America/Araguaina": "BR",
  "America/Bahia": "BR",
  "America/Belem": "BR",
  "America/Boa_Vista": "BR",
  "America/Campo_Grande": "BR",
  "America/Cuiaba": "BR",
  "America/Fortaleza": "BR",
  "America/Maceio": "BR",
  "America/Manaus": "BR",
  "America/Noronha": "BR",
  "America/Porto_Velho": "BR",
  "America/Recife": "BR",
  "America/Rio_Branco": "BR",
  "America/Santarem": "BR",
  "America/Sao_Paulo": "BR",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Detroit": "US",
  "America/Los_Angeles": "US",
  "America/New_York": "US",
  "America/Phoenix": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "Europe/Amsterdam": "NL",
  "Europe/Berlin": "DE",
  "Europe/Brussels": "BE",
  "Europe/Copenhagen": "DK",
  "Europe/Dublin": "IE",
  "Europe/Helsinki": "FI",
  "Europe/Lisbon": "PT",
  "Europe/London": "GB",
  "Europe/Madrid": "ES",
  "Europe/Oslo": "NO",
  "Europe/Paris": "FR",
  "Europe/Rome": "IT",
  "Europe/Stockholm": "SE",
  "Europe/Vienna": "AT",
  "Europe/Warsaw": "PL",
  "Europe/Zurich": "CH",
};

const DISPLAY_CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "US$",
};

function normalizeCountry(country?: string | null) {
  const normalized = country?.trim().toUpperCase();
  return normalized && /^[A-Z]{2}$/.test(normalized) ? normalized : null;
}

export function getCountryFromLocale(locale?: string | null) {
  if (!locale) {
    return null;
  }

  try {
    return normalizeCountry(new Intl.Locale(locale).region);
  } catch {
    const match = locale.match(/[-_]([A-Z]{2})\b/i);
    return normalizeCountry(match?.[1]);
  }
}

export function getCountryFromTimeZone(timeZone?: string | null) {
  if (!timeZone) {
    return null;
  }

  return TIME_ZONE_TO_COUNTRY[timeZone] ?? null;
}

function getNumberParts(amount: number, currency: string, locale: string) {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
  });
  const parts = formatter.formatToParts(amount);
  const currencySymbol =
    DISPLAY_CURRENCY_SYMBOLS[currency] ??
    parts.find((part) => part.type === "currency")?.value ??
    currency;
  const number = parts
    .filter((part) => part.type !== "currency")
    .map((part) => part.value)
    .join("")
    .trim();

  return {
    currencySymbol,
    formatted: `${currencySymbol}${number}`,
    number,
  };
}

function getMarket(country: string | null): Market {
  if (country === "BR") {
    return "brazil";
  }

  if (country === "GB") {
    return "uk";
  }

  if (country === "US") {
    return "us";
  }

  return "international";
}

export function getRegionalOffer({
  country,
  locale,
  timeZone,
}: RegionalOfferInput = {}): RegionalOffer {
  const normalizedCountry =
    normalizeCountry(country) ??
    getCountryFromTimeZone(timeZone) ??
    getCountryFromLocale(locale);
  const market = getMarket(normalizedCountry);
  const offer = OFFERS[market];
  const currency = offer.currency;
  const price = offer.price;
  const compareAt = offer.compareAt;
  const savings = Math.max(compareAt - price, 0);
  const priceParts = getNumberParts(price, currency, offer.locale);
  const compareAtParts = getNumberParts(compareAt, currency, offer.locale);
  const savingsParts = getNumberParts(savings, currency, offer.locale);

  return {
    checkoutUrl: market === "brazil"
      ? HOTMART_BRAZIL_CHECKOUT_URL
      : HOTMART_INTERNATIONAL_CHECKOUT_URL,
    compareAtAmount: compareAtParts.number,
    compareAtFormatted: compareAtParts.formatted,
    country: normalizedCountry,
    currency,
    currencySymbol: priceParts.currencySymbol,
    market,
    priceAmount: priceParts.number,
    priceFormatted: priceParts.formatted,
    savingsFormatted: savingsParts.formatted,
  };
}
