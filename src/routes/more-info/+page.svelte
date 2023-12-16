<svelte:head>
	<title>Remember Me Obituaries | About</title>
	<meta name="description" content="RememberMeObituaries.com offers professionally written, personal, and impactful obituaries and eulogies." />
</svelte:head>

<form>
	<div class="mt-6 container">
		<h1 class="text-4xl mb-5">Tell us about your loved one</h1>
		<label for="name" class="block text-sm font-medium leading-6 text-gray-900">Their name</label>
		<div class="mt-2">
			<input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
		</div>

		<label for="dob" class="mt-5 block text-sm font-medium leading-6 text-gray-900">Their birthdate</label>
		<div class="mt-2">
			<input type="text" name="dob" id="dob" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
		</div>
		
		<label for="dob" class="mt-5 block text-sm font-medium leading-6 text-gray-900">Describe them in a few words</label>
		<div class="mt-2">
			<textarea name="about" id="about" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"></textarea>
		</div>
	</div>
</form>