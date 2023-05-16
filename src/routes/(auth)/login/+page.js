export const load = ({ url }) => {
  let { redirectTo } = Object.fromEntries(url.searchParams);
  redirectTo = redirectTo || "/";
  return { redirectTo };
};
