export const dynamic = "force-dynamic";

const COUNTRY_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "cloudfront-viewer-country",
  "x-country",
  "x-country-code",
  "x-appengine-country",
];

function normalizeCountry(country: string | null) {
  const normalized = country?.trim().toUpperCase();
  return normalized && /^[A-Z]{2}$/.test(normalized) ? normalized : null;
}

export async function GET(request: Request) {
  const country =
    COUNTRY_HEADERS.map((header) => normalizeCountry(request.headers.get(header))).find(
      Boolean,
    ) ?? null;

  return Response.json(
    { country },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
