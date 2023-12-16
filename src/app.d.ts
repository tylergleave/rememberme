// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
	}
	/// <reference types="lucia" />
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			name: string;
			email: string;
			role: string;
			is_banned: boolean;
			created: string;
			updated: string;
		};
		//type DatabaseSessionAttributes = {''};
	}
}

export {};
