export async function POST(req: Request) {
  const body = await req.json();
  const license = body.license;

  return await fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new URLSearchParams({
      license_key: license,
    }),
  })
    .then((response) => response.json())
    .then((data) => Response.json(data))
    .catch((error) => Response.json({ someError: error }));
}
