import DB from "$lib/server/db";

export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("sessionId");
  if (session) {
    const { id, nickname, username, token, role } = JSON.parse(session);
    event.locals.user = {
      id,
      token,
      role,
      name: nickname || username,
    };
  }
  // let token = "566181f4-8740-4342-8102-275a23b209b3";
  event.locals.db = new DB(event.locals?.user?.token);
  const respon = await resolve(event);
  return respon;
};
