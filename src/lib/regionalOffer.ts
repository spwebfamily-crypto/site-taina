export const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/UukFSXB";
export const HOTMART_CHECKOUT_URL =
  "https://pay.hotmart.com/P105501171G?bid=1776884421930";

type Market = "brazil" | "international";

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

const BRAZIL_PRICE = {
  compareAt: 49.9,
  currency: "BRL",
  price: 14.9,
};

const INTERNATIONAL_PRICE_EUR = {
  compareAt: 19.9,
  currency: "EUR",
  price: 6.9,
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  AD: "EUR",
  AT: "EUR",
  BE: "EUR",
  CA: "CAD",
  CH: "CHF",
  CY: "EUR",
  DE: "EUR",
  DK: "DKK",
  EE: "EUR",
  ES: "EUR",
  FI: "EUR",
  FR: "EUR",
  GB: "GBP",
  GR: "EUR",
  IE: "EUR",
  IT: "EUR",
  LI: "CHF",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  MC: "EUR",
  MT: "EUR",
  MX: "MXN",
  NL: "EUR",
  NO: "NOK",
  PL: "PLN",
  PT: "EUR",
  SE: "SEK",
  SI: "EUR",
  SK: "EUR",
  SM: "EUR",
  US: "USD",
  VA: "EUR",
};

const EUR_TO_CURRENCY_RATE: Record<string, number> = {
  CAD: 1.56,
  CHF: 0.93,
  DKK: 7.46,
  EUR: 1,
  GBP: 0.86,
  MXN: 19.8,
  NOK: 11.7,
  PLN: 4.3,
  SEK: 11.2,
  USD: 1.08,
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

const EUROPE_TIME_ZONE_PREFIX = "Europe/";

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

function getCurrency(country: string | null, timeZone?: string | null) {
  if (country === "BR") {
    return "BRL";
  }

  if (country && COUNTRY_TO_CURRENCY[country]) {
    return COUNTRY_TO_CURRENCY[country];
  }

  if (timeZone?.startsWith(EUROPE_TIME_ZONE_PREFIX)) {
    return "EUR";
  }

  return INTERNATIONAL_PRICE_EUR.currency;
}

function convertFromEuro(amount: number, currency: string) {
  const rate = EUR_TO_CURRENCY_RATE[currency] ?? EUR_TO_CURRENCY_RATE.EUR;
  return amount * rate;
}

function getNumberParts(amount: number, currency: string, locale: string) {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
  });
  const parts = formatter.formatToParts(amount);
  const currencySymbol =
    parts.find((part) => part.type === "currency")?.value ?? currency;
  const number = parts
    .filter((part) => part.type !== "currency")
    .map((part) => part.value)
    .join("")
    .trim();

  return {
    currencySymbol,
    formatted: formatter.format(amount),
    number,
  };
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
  const isBrazil = normalizedCountry === "BR";
  const safeLocale = locale ?? (isBrazil ? "pt-BR" : "en-US");
  const currency = isBrazil ? BRAZIL_PRICE.currency : getCurrency(normalizedCountry, timeZone);
  const price = isBrazil
    ? BRAZIL_PRICE.price
    : convertFromEuro(INTERNATIONAL_PRICE_EUR.price, currency);
  const compareAt = isBrazil
    ? BRAZIL_PRICE.compareAt
    : convertFromEuro(INTERNATIONAL_PRICE_EUR.compareAt, currency);
  const savings = Math.max(compareAt - price, 0);
  const priceParts = getNumberParts(price, currency, safeLocale);
  const compareAtParts = getNumberParts(compareAt, currency, safeLocale);
  const savingsParts = getNumberParts(savings, currency, safeLocale);

  return {
    checkoutUrl: isBrazil ? KIWIFY_CHECKOUT_URL : HOTMART_CHECKOUT_URL,
    compareAtAmount: compareAtParts.number,
    compareAtFormatted: compareAtParts.formatted,
    country: normalizedCountry,
    currency,
    currencySymbol: priceParts.currencySymbol,
    market: isBrazil ? "brazil" : "international",
    priceAmount: priceParts.number,
    priceFormatted: priceParts.formatted,
    savingsFormatted: savingsParts.formatted,
  };
}
