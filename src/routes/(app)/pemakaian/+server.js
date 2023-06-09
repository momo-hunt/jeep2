import { json } from "@sveltejs/kit";

export const GET = async ({ locals, url }) => {
  const search = Object.fromEntries(url.searchParams);
  console.log("search", search);
  const data = await locals.db.collection("pemakaian").readAll(search);
  if (data.error) console.log("get-", data);
  return json(data);
};
