import { json } from "@sveltejs/kit";

export const GET = async ({ locals, url }) => {
  const search = Object.fromEntries(url.searchParams);
  console.log("s", search);
  const data = await locals.db.collection("pemakaian").readAll(search);
  return json(data);
};
