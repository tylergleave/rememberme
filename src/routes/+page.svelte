<script>
    import { Button } from "flowbite-svelte";
</script>

<svelte:head>
	<title>Remember Me Obituaries | Home</title>
	<meta name="description" content="RememberMeObituaries.com offers professionally written, personal, and impactful obituaries and eulogies." />
</svelte:head>

<style>
    .hero{
        background: url("/images/rose-bg.jpg");
        min-height: 300px;
        background-size: cover;
        background-position: center;
    }
</style>

<div class="text-center flex hero relative">
    <span class="text-4xl m-auto text-white drop-shadow-xl z-10">
        Losing a loved one is challenging. <br />
        Let us write the obituary and eulogy.
    </span>
    <div class="absolute top-0 left-0 w-full h-full object-cover bg-black bg-opacity-30"></div>
</div>
<div class="text-center relative">
    <a href="/get-started" class="bg-primary-500 text-white py-6 px-12 rounded text-lg hover:bg-primary-900">Get Started</a>
</div>
<div class="mt-12 container">
    <span class="text-2xl">Simple</span>
    <ul class="list-disc">
        <li>Input your loved one's information</li>
        <li>Select your loved one's attributes</li>
        <li>Enter details about their life</li>
        <li>Watch us work!</li>
    </ul>
</div>
<div class="mt-12 container">
    <span class="text-2xl">Personalized</span>
    <ul class="list-disc">
        <li>Choose from our pre-defined list of attributes or input your own</li>
        <li>Tell us as much as you want about your loved one - each document is unique and personalized</li>
    </ul>
</div>
<div class="mt-12 container">
    <span class="text-2xl">Efficient</span>
    <ul class="list-disc">
        <li>Allow us just 2 hours to prepare four unique versions of your document</li>
        <li>Edit your personalized document to fit your needs</li>
        <li>Email, print, or share a copy of your document for easy distribution</li>
    </ul>
</div>