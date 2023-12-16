<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<svelte:head>
	<title>Remember Me Obituaries | Get Started</title>
	<meta name="description" content="RememberMeObituaries.com offers professionally written, personal, and impactful obituaries and eulogies." />
</svelte:head>

<form method="post" use:enhance>
	<div class="mt-6 container">
		<h1 class="text-4xl mb-3">First, let's gather your information</h1>
		<p>
			We collect your information up-front so you can come back to this later. <br>
			We'll save everything you fill out so you can finish on your own time.
		</p>

		<div class="mt-8 grid grid-cols-12 gap-4 px-12 pt-8 pb-6 rounded-md bg-white border border-primary-900">
			<div class="col-span-12 sm:col-span-6">
				<label for="name" class="block text-sm font-medium leading-6 text-gray-900">Your name</label>
				<div class="mt-1">
					<input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Your email address</label>
				<div class="mt-1">
					<input type="text" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
				<div class="mt-1">
					<input type="password" name="password" id="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="password_conf" class="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
				<div class="mt-1">
					<input type="password" name="password_conf" id="password_conf" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 mt-8 text-right">
				<button type="submit" class="bg-primary-500 rounded-md text-white py-4 px-8 hover:bg-primary-900">Next Step</button>
			</div>
		</div>
	</div>
</form>