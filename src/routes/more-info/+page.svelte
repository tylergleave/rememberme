<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<svelte:head>
	<title>Remember Me Obituaries | Information about your loved one</title>
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
				<label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">Their full name, as you'd like it displayed in the newspaper</label>
				<div class="mt-1">
					<input required type="text" name="full_name" id="full_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="name" class="block text-sm font-medium leading-6 text-gray-900">What did they go by? This can be a first name, nickname, or something else</label>
				<div class="mt-1">
					<input required type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
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

			<!-- Life Story -->
			<div class="col-span-12 border-t border-primary-500">
				<h2 class="text-2xl mt-3">Life Story</h2>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">Where were they born? This can be a City, State, or Country</label>
				<div class="mt-1">
					<input required type="text" name="full_name" id="full_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="name" class="block text-sm font-medium leading-6 text-gray-900">What were their parent's names?</label>
				<div class="mt-1">
					<input required type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6">
				</div>
			</div>
			
			<div class="col-span-12">
				<label for="life_story" class="block text-sm font-medium leading-6 text-gray-900">How would you describe them to a friend? Aim for at least three or four sentences.</label>
				<div class="mt-1">
					<textarea required name="life_story" id="life_story" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"></textarea>
				</div>
			</div>

			<!-- Family Info -->
			<div class="col-span-12 border-t border-primary-500">
				<h2 class="text-2xl mt-3">Preceded and survived by</h2>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="preceded" class="block text-sm font-medium leading-6 text-gray-900">By whom were they preceded in death?</label>
				<div class="mt-1">
					<textarea required name="preceded" id="preceded" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"></textarea>
				</div>
			</div>
			<div class="col-span-12 sm:col-span-6">
				<label for="survived" class="block text-sm font-medium leading-6 text-gray-900">By whom were they survived?</label>
				<div class="mt-1">
					<textarea required name="survived" id="survived" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"></textarea>
				</div>
			</div>

			<!-- Memorial Service Info -->
			<div class="col-span-12 border-t border-primary-500">
				<h2 class="text-2xl mt-3">Memorial service information</h2>
			</div>
			<div class="col-span-12">
				<label for="memorial" class="block text-sm font-medium leading-6 text-gray-900">When and where is the memorial service?</label>
				<div class="mt-1">
					<textarea required name="memorial" id="memorial" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"></textarea>
				</div>
			</div>
			
			<div class="col-span-12 mt-8 text-right">
				<button type="submit" class="bg-primary-500 rounded-md text-white py-4 px-8 hover:bg-primary-900">Review</button>
			</div>
		</div>
	</div>
</form>