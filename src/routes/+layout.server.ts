export async function load({ locals }) {
  if (locals.auth) {
    const { user, session } = await locals.auth.validateUser();
    console.log({ session });
    return { user };
  }

  return { user: null };
}
