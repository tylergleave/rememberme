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
			Here are the obituaries you've started. Resume one, or start from scratch <br>
		</p>

		<div class="mt-8 grid grid-cols-12 gap-4 px-6 py-6 rounded-md bg-white border border-primary-900">
			// Todo loop over obituaries
		</div>
	</div>
</form>