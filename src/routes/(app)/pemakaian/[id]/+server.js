import { json } from "@sveltejs/kit";

export const GET = async ({ params, locals }) => {
  try {
    let data = await locals.db.collection("pemakaian").read(params.id);
    const { data: sopir } = await locals.db.collection("sopir").readAll();

    let s = sopir.filter((s) => s.id == data.sopir)[0];
    data.sopir = { id: s.id, name: s.sopir };
    // console.log(data, sopir);

    return json(data);
  } catch (error) {}
};
