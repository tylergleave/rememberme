<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<svelte:head>
	<title>Remember Me Obituaries | Basic Information</title>
	<meta name="description" content="RememberMeObituaries.com offers professionally written, personal, and impactful obituaries and eulogies." />
</svelte:head>

<form method="post" use:enhance>
	<div class="mt-6 container">
		<h1 class="text-4xl mb-3">Now, let's talk about your loved one</h1>
		<p class="mb-3">
			 Take a moment to pause and reflect on each prompt.<br>
			 Our writers want to get to know your loved one, so take your time and be thoughtful and thorough.
		</p>
		<p>
			Need a break? just click "Save and come back later" at the bottom. We'll save your progress.
		</p>

		<div class="mt-8 grid grid-cols-12 gap-4 px-12 pt-8 pb-6 rounded-md bg-white border border-primary-900">
			<div class="col-span-12">
				<h2 class="text-2xl">Basic info</h2>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">Their full name</label>
				<div class="mt-1">
					<input required type="text" name="full_name" id="full_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="dob" class="block text-sm font-medium leading-6 text-gray-900">What was their date of birth?</label>
				<div class="mt-1">
					<input required type="text" name="dob" id="dob" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="date_of_death" class="block text-sm font-medium leading-6 text-gray-900">What date did they pass away?</label>
				<div class="mt-1">
					<input required type="text" name="date_of_death" id="date_of_death" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
		</div>
	</div>
</form>