import { PUBLIC_ROLE_ADMIN } from "$env/static/public";
import { redirect } from "@sveltejs/kit";
// import { PUBLIC_ROLE_SOPIR } from '$env/static/public';

export const load = ({ locals, url }) => {
  if (locals.user) {
    let { role } = locals.user;
    if (role.indexOf(PUBLIC_ROLE_ADMIN) < 0)
      throw redirect(307, "/login?redirectTo=" + url.pathname);
    return { user: locals.user };
  }
};
