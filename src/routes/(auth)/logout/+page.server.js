import { redirect } from "@sveltejs/kit";

export const load = ({ url, locals, cookies }) => {
  let { redirectTo } = Object.fromEntries(url.searchParams);

  locals.user = undefined;
  cookies.set("sessionId", "");

  redirectTo = redirectTo ? `?redirectTo=${redirectTo}` : "";
  throw redirect(307, "/login" + redirectTo);
};
