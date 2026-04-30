export const HOTMART_BRAZIL_CHECKOUT_URL =
  "https://pay.hotmart.com/I105606917W?checkoutMode=10&bid=1777577467398";
export const HOTMART_INTERNATIONAL_CHECKOUT_URL =
  "https://pay.hotmart.com/P105501171G?off=ww9yq17z&checkoutMode=10&bid=1777577423390";

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
  const safeLocale = isBrazil ? "pt-BR" : "pt-PT";
  const currency = isBrazil ? BRAZIL_PRICE.currency : INTERNATIONAL_PRICE_EUR.currency;
  const price = isBrazil ? BRAZIL_PRICE.price : INTERNATIONAL_PRICE_EUR.price;
  const compareAt = isBrazil ? BRAZIL_PRICE.compareAt : INTERNATIONAL_PRICE_EUR.compareAt;
  const savings = Math.max(compareAt - price, 0);
  const priceParts = getNumberParts(price, currency, safeLocale);
  const compareAtParts = getNumberParts(compareAt, currency, safeLocale);
  const savingsParts = getNumberParts(savings, currency, safeLocale);

  return {
    checkoutUrl: isBrazil
      ? HOTMART_BRAZIL_CHECKOUT_URL
      : HOTMART_INTERNATIONAL_CHECKOUT_URL,
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
