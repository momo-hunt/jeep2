import { PUBLIC_ROLE_ADMIN } from "$env/static/public";
import { redirect } from "@sveltejs/kit";
// import { error } from "@sveltejs/kit";
// import { PUBLIC_ROLE_SOPIR } from '$env/static/public';

export const load = ({ locals, url }) => {
  if (!locals.user) throw redirect(307, "/login?redirectTo=" + url.pathname);

  if (locals.user.role.indexOf(PUBLIC_ROLE_ADMIN) < 0) throw redirect(307, "/");
  // throw error(403, "Not an admin");

  let link = [
    { label: "Beranda", href: "/_" },
    { label: "User", href: "/_/user" },
    { label: "Pemakaian", href: "/_/pemakaian" },
    { label: "Kendaraan", href: "/_/kendaraan" },
    { label: "Sopir", href: "/_/sopir" },
    { label: "Biaya", href: "/_/biaya" },
  ];

  return { user: locals.user, link };
};
