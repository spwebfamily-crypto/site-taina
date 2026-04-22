"use client";

import { useEffect, useState } from "react";
import {
  getCountryFromLocale,
  getCountryFromTimeZone,
  getRegionalOffer,
  type RegionalOffer,
} from "@/lib/regionalOffer";

type RegionResponse = {
  country?: string | null;
};

let regionRequest: Promise<string | null> | null = null;

function getBrowserLocale() {
  if (typeof navigator === "undefined") {
    return "pt-BR";
  }

  return navigator.languages?.[0] ?? navigator.language ?? "pt-BR";
}

function getBrowserCountry(locale: string, timeZone: string | null) {
  const timeZoneCountry = getCountryFromTimeZone(timeZone);

  if (timeZoneCountry === "BR") {
    return timeZoneCountry;
  }

  return getCountryFromLocale(locale) ?? timeZoneCountry;
}

export function getBrowserRegionalOffer() {
  const locale = getBrowserLocale();
  const timeZone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : null;
  const country = getBrowserCountry(locale, timeZone);

  return getRegionalOffer({ country, locale, timeZone });
}

function fetchServerCountry() {
  regionRequest ??= fetch("/api/region", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        return null;
      }

      return response.json() as Promise<RegionResponse>;
    })
    .then((data) => data?.country ?? null)
    .catch(() => null);

  return regionRequest;
}

export function useRegionalOffer(): RegionalOffer {
  const [offer, setOffer] = useState<RegionalOffer>(() => getRegionalOffer());

  useEffect(() => {
    let isActive = true;

    Promise.resolve().then(() => {
      if (isActive) {
        setOffer(getBrowserRegionalOffer());
      }
    });

    fetchServerCountry().then((country) => {
      if (!isActive || !country) {
        return;
      }

      setOffer(
        getRegionalOffer({
          country,
          locale: getBrowserLocale(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      );
    });

    return () => {
      isActive = false;
    };
  }, []);

  return offer;
}
