// routes/signup/+page.server.ts
import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/home");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
        const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
        const password_conf = formData.get("password_conf");
		// basic validation check
        if (typeof name !== "string" || name.length < 2 || name.length > 255) {
			return fail(400, {
				message: "Your name must be between 2 and 255 characters"
			});
		}
		if (typeof email !== "string" || email.length < 4 || email.length > 31) {
			return fail(400, {
				message: "Invalid email address"
			});
		}
		if (typeof password !== "string" || password.length < 8 || password.length > 255) {
			return fail(400, {
				message: "Your password must be at least 8 characters"
			});
		}
        if (typeof password_conf !== "string" || password_conf != password) {
			return fail(400, {
				message: "Your password and password confirmation do not match"
			});
		}
		try {
			const user = await auth.createUser({
				key: {
					providerId: "email", // auth method
					providerUserId: email.toLowerCase(), // unique id when using "username" auth method
					password // hashed by Lucia
				},
				attributes: {
                    name,
                    email
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			// this part depends on the database you're using
			// check for unique constraint error in user table
			/*if (
				e instanceof SomeDatabaseError &&
				e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR
			) {
				return fail(400, {
					message: "That email address is already in use"
				});
			}
			return fail(500, {
				message: "An unknown error occurred"
			}); */
            return fail(500, {
				message: "An unknown error occurred"
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, "/basic-info");
	}
};