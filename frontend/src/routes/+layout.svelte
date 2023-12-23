<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="columns">
	<div class="column is-2 has-background-black-bis">
		<Sidebar />
	</div>
	<div class="column">
		<Navbar />

		<div class="section content">
			<slot />
		</div>
	</div>
</div>

<Footer />

<style>
	div.columns {
		margin: 0px;
		min-height: 95vh;
	}

	div.section.content {
		padding: 1.5em 1.5em 3em 1.5em;
	}
</style>
