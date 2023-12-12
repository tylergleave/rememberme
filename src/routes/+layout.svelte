<script>
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
</script>

<Navbar class="border-b-2 border-primary-500">
    <NavBrand href="/">
      <img src="/images/remember-me-logo.png" class="me-3 h-6 sm:h-9" alt="RememberMe Logo" />
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/how-it-works">How it Works</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>

<slot></slot>

<Footer class="mt-12">
    <FooterCopyright href="/" by="Remember Me Obituaries" year={2024} />
</Footer>