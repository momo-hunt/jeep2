import { json } from "@sveltejs/kit";

export const GET = async ({ locals, url }) => {
  const { req } = Object.fromEntries(url.searchParams);

  const data = await locals.db.fetchData({
    method: "readAll",
    ...JSON.parse(req),
  });
  return json(data);
};
