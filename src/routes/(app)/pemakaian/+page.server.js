import { fail } from "@sveltejs/kit";

export const actions = {
  add: async ({ request, locals }) => {
    try {
      const data = Object.fromEntries(await request.formData());

      const result = await locals.db.collection("pemakaian").create(data);

      if (result.error) return fail(400, result.error);

      return result;
    } catch (error) {
      return fail(400, error);
    }
  },

  update: async ({ request, locals }) => {
    const { id, ...data } = Object.fromEntries(await request.formData());

    const result = await locals.db.collection("pemakaian").update(id, data);

    if (result.error) return fail(400, result.error);

    return result;
  },

  delete: async ({ request, locals }) => {},
};
