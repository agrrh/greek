<script>
	import Overview from '$lib/components/dashboard/Overview.svelte';
	import CriticalApplications from '$lib/components/dashboard/CriticalApplications.svelte';
	import TopDeliveringTeams from '$lib/components/dashboard/TopDeliveringTeams.svelte';
</script>

<div class="block">
	<Overview />
</div>

<div class="block">
	<CriticalApplications />
</div>

<div class="block">
	<TopDeliveringTeams />
</div>
