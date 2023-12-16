<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<svelte:head>
	<title>Remember Me Obituaries | Get Started</title>
	<meta name="description" content="RememberMeObituaries.com offers professionally written, personal, and impactful obituaries and eulogies." />
</svelte:head>

<form method="post" use:enhance>
	<div class="mt-6 container">
		<h1 class="text-4xl mb-3">Your obituaries</h1>
		<p>
			Here are the obituaries you've started. Resume one, or <a href="/more-info" class="underline text-blue-500 visited:text-purple-500">start from scratch</a>.
		</p>

		<div class="mt-8 grid grid-cols-12 gap-4 px-6 py-6 rounded-md bg-white border border-primary-900">
			<div class="col-span-12 sm:col-span-10">
				<h2 class="text-2xl mb-2">Joseph Smith</h2>
				<p>
					Status: <span class="text-yellow-400"><u><strong>Incomplete</strong></u></span><br>
					Please click "Resume" and complete the rest of the prompts.
				</p>
			</div>
			<div class="col-span-12 sm:col-span-2 text-right my-auto">
				<button class="bg-primary-500 hover:bg-primary-900 px-4 py-2 text-white rounded-md w-full">Resume</button>
			</div>
		</div>
		<div class="mt-8 grid grid-cols-12 gap-4 px-6 py-6 rounded-md bg-white border border-primary-900">
			<div class="col-span-12 sm:col-span-10">
				<h2 class="text-2xl mb-2">Brigham Young</h2>
				<p>
					Status: <span class="text-tertiary-500"><u><strong>Received</strong></u></span><br>
					Our writers are reviewing your information and will email you within a few hours.
				</p>
			</div>
			<div class="col-span-12 sm:col-span-2 text-right my-auto">
				<button class="bg-primary-500 hover:bg-primary-900 px-4 py-2 text-white rounded-md w-full">Wait</button>
			</div>
		</div>
		<div class="mt-8 grid grid-cols-12 gap-4 px-6 py-6 rounded-md bg-white border border-primary-900">
			<div class="col-span-12 sm:col-span-10">
				<h2 class="text-2xl mb-2">Jesus</h2>
				<p>
					Status: <span class="text-primary-500"><u><strong>Complete!</strong></u></span><br>
					Your obituary is ready to view.
				</p>
			</div>
			<div class="col-span-12 sm:col-span-2 text-right my-auto">
				<button class="bg-primary-500 hover:bg-primary-900 px-4 py-2 text-white rounded-md w-full">View</button>
			</div>
		</div>
	</div>
</form>