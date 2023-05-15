import { json } from "@sveltejs/kit";

export const GET = async ({ params, locals }) => {
  try {
    const data = await locals.db.collection("pemakaian").read(params.id);
    return json(data);
  } catch (error) {}
};
