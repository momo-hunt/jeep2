import { PUBLIC_ROLE_ADMIN } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

export const load = ({ locals, url }) => {
  if (!locals.user) throw redirect(307, "/login?redirectTo=" + url.pathname);
  if (locals.user.role.indexOf(PUBLIC_ROLE_ADMIN) > 0)
    throw redirect(307, "/_");

  return { user: locals.user };
};
