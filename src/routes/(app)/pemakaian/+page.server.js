import { fail } from "@sveltejs/kit";

export const actions = {
  add: async ({ request, locals }) => {
    try {
      const data = Object.fromEntries(await request.formData());

      const result = await locals.db.collection("pemakaian").create(data);

      if (result.error) return fail(400, result.error);

      return { result };
    } catch (error) {
      return fail(400, error);
    }
  },

  update: async ({ request, locals }) => {},
  delete: async ({ request, locals }) => {},
};
