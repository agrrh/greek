<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="columns">
	<div class="column is-one-fifth has-background-black">
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
		min-height: 100vh;
	}

	div.section.content {
		padding: 1.5em 1.5em 3em 1.5em;
	}
</style>
