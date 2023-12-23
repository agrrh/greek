<script>
export let application = {
	dependencies: [
		{ name: "my-service" },
		{ name: "my-super-database", isDatabase: true },
	],
};
</script>

<h4>Dependencies</h4>

{#each application.dependencies as dependency}
<a class="button" href="/applications/{dependency.name}">
	<span class="icon">
		{#if !dependency.isDatabase}
		<i class="fas fa-cog"></i>
		{:else}
		<i class="fas fa-database"></i>
		{/if}
	</span>
	&nbsp;
	{dependency.name}
</a>
{/each}

<style>
a.button {
	margin: 0.25em 0.25em;
}
</style>
