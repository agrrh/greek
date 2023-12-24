<script>
export let application = {
	consumers: [
		{ name: "application-1" },
		{ name: "application-3" },
		{ name: "application-6" },
	],
};
</script>

<h4>Consumers</h4>

{#each application.consumers as consumer}
<a class="button" href="/applications/{consumer.name}">
	<span class="icon">
		<i class="fas fa-cog"></i>
	</span>
	&nbsp;
	{consumer.name}
</a>
{/each}

<style>
a.button {
	margin: 0.25em 0.25em;
}
</style>
