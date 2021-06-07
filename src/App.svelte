<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { activeNavLink } from './stores';
	import router from 'page';
	import Home from './Home.svelte';
	import History from './History.svelte';
	import Photos from './Photos.svelte';
	import Contact from './Contact.svelte';
	import Footer from './components/Footer.svelte';

	router('/', () => page = Home);
	router('/history', () => page = History);
	router('/photos', () => page = Photos);
	router('/contact', () => page = Contact);

	let page;

	
	const toggleMobileNav = () => {
		let navLinks = document.getElementById('nav-links');
		
		if (navLinks.style.display !== 'flex') {
			navLinks.style.display = 'flex';
		} else {
			navLinks.style.display = 'none';
		}

		navLinks.addEventListener('click', () => {
			navLinks.style.display = 'none';
		});
	}
	router.start();
</script>

<nav>
	<picture>
		<source srcset='/images/logo-text.webp' type='image/webp' />
		<source srcset='/images/logo-text.jpg' type='image/jpg' />
		<img src='/images/logo-text.jpg' alt='Jubal Logo'>
	</picture>

	<div id="nav-links">
		<a href='/'
			class={$activeNavLink === 'home' ? 'active' : ''}
			on:click={() => activeNavLink.set('home')}>
			Home
		</a>
		<a href='/history'
			class={$activeNavLink === 'history' ? 'active' : ''}
			on:click={() => activeNavLink.set('history')}>
			History
		</a>
		<a href='/photos'
			class={$activeNavLink === 'photos' ? 'active' : ''}
			on:click={() => activeNavLink.set('photos')}>
			Photos
		</a>
		<a href='/contact'
			class={$activeNavLink === 'contact' ? 'active' : ''}
			on:click={() => activeNavLink.set('contact')}>
			Contact
		</a>
	</div>

	<button on:click={toggleMobileNav}>
		<span></span>
		<span></span>
		<span></span>
	</button>
</nav>


	<svelte:component this={page} />
	<Footer />
<!-- <Photos /> -->


<style>
	/* Global Styles */
	:global(:root) {
		--main-color: #BF9E60;
		--brown: #59321B;
		--black: #333333;
		--white: #ffffff;
		font-size: 10px;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: var(--black);
		background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url("/images/bg.webp");
		background-size: cover;
		background-position: 80%;
		background-attachment: fixed;
		
	}

	:global(.wrapper) {
		margin-top: 50px;
		width: 100vw;
		height: calc(100vh - 100px);
		-ms-overflow-style: none;
     	scrollbar-width: none;
       	overflow-y: scroll;
	}

	:global(.wrapper::-webkit-scrollbar) {
		display: none;
	}


	/* Nav Styles */
	nav {
		width: 100%;
		height: 50px;
		background: var(--white);
		position: fixed;
		top: 0;
		left: 0;
		border-bottom: 1px solid var(--main-color);
		padding: 0 20px;
		z-index: 1000;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		height: 35px;
	}

	#nav-links {
		position: absolute;
		top: 50px;
		right: 0;
		display: none;
		flex-direction: column;
		align-items: flex-end;
		padding-right: 20px;
		background: rgba(255, 255, 255, .9);
		z-index: 1000;
		width: 100vw;
		height: 100vh;
		font-weight: 300;
	}

	a {
		margin: 10px 0;
		text-decoration: none;
		color: var(--black);
		font-size: 3rem;
	}

	a:first-of-type {
		margin-top: 20px;
	}

	a:hover {
		color: var(--main-color);
	}

	button {
		height: 50px;
		width: 30px;
		padding: 15px 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: none;
		background: transparent;
	}

	button:hover {
		cursor: pointer;
	}

	button:hover > span {
		background: var(--main-color);
	}

	span {
		width: 100%;
		height: 3px;
		border-radius: 10px;
		background: var(--black);
	}

	.active {
		color: var(--main-color);
	}

	@media only screen and (min-width: 769px) {
		nav {
			padding-right: 0;
		}

		#nav-links {
			display: flex !important;
			top: 0;
			flex-direction: row;
			height: inherit;
			background: transparent;
			justify-content: flex-end;
			align-items: center;
			padding-right: 10px;
		}

		#nav-links > a {
			font-size: 1.8rem;
			margin: 0;
			padding: 0 10px;
			line-height: 43px;
			border-bottom: 3px solid transparent;
			padding-top: 3px;
		}

		#nav-links > a:last-of-type {
			padding-right: 10px;
		}

		#nav-links > a:hover {
			border-bottom: 3px solid var(--main-color);
		}

		button {
			display: none;
		}

		#nav-links > .active {
			border-bottom: 3px solid var(--main-color);
		}
	}
</style>