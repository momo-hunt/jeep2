import { fail } from "@sveltejs/kit";
import bcrypt from "bcrypt";

export const actions = {
  login: async ({ request, locals, cookies }) => {
    let { username, password } = Object.fromEntries(await request.formData());

    const user = await locals.db.login(username);
    if (user.error) return fail(400, "Ada kesalahan!");

    let checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return fail(400, "Ada kesalahan!");

    const u = await locals.db.updateToken(user.id, username);
    if (u.error) return fail(400, "Ada kesalahan!");

    cookies.set("sessionId", JSON.stringify(u), {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });

    // password = await bcrypt.hash(password, 10);
    return u;
  },
};
