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
		<img src="/images/remember-me-logo.png" class="me-3 h-6 sm:h-9" alt="Remember Me Obitiuaries" />
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

<Footer footerType="socialmedia" class="mt-6">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand
				href="https://www.remembermeobituaries.com/"
				src="/images/remember-me-logo.png"
				alt="Remember Me Obitiuaries"
				name="Remember Me Obitiuaries"
			/>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/privacyPolicy">Privacy Policy</FooterLink>
					<FooterLink liClass="mb-4" href="/termsOfService">Terms & Conditions</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>

	<FooterCopyright
		href="/"
		by="Remember Me Obituaries"
		year={new Date().getFullYear()}
		class="text-center mb-4"
	/>
</Footer>
