<script>
	import TeamsFilter from '$lib/components/ScopeFilter.svelte';
	import TeamsTable from '$lib/components/teams/Table.svelte';

	let teams = [
		{
			name: 'core-dev',
			services: [
				{ name: 'cart', status: 1 },
				{ name: 'prices-parser', status: 1 },
				{ name: 'offers', status: 1 },
				{ name: 'customer-card', status: 0 },
				{ name: 'auth', status: 2 },
				{ name: 'mail-sender', status: 3 }
			]
		},
		{
			name: 'infrastructure',
			services: [
				{ name: 'zenit', status: 1 },
				{ name: 'spartak', status: 2 },
				{ name: 'cska', status: 1 }
			]
		},
	];
</script>

<div class="block">
	<TeamsFilter />
</div>

<div class="block">
	<TeamsTable data={teams} />
</div>
