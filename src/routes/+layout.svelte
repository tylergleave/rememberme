<script>
	import '../app.pcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';
</script>

<Navbar class="border-b-2 border-primary-500">
	<NavBrand href="/">
		<img src="/images/remember-me-logo.png" class="me-3 h-6 sm:h-9" alt="RememberMe Logo" />
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/how-it-works">How it Works</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<slot />

<Footer class="mt-12 flex flex-col items-center justify-center">
	<FooterCopyright
		href="/"
		by="Remember Me Obituaries"
		year={new Date().getFullYear()}
		class="text-center mb-4"
	/>
	<FooterLinkGroup ulClass="flex flex-col items-center">
		<FooterLink href="/privacyPolicy" class="my-1">Privacy Policy</FooterLink>
		<FooterLink href="/termsOfService" class="my-1">Terms of Service</FooterLink>
	</FooterLinkGroup>
</Footer>
