<script>
	import TeamsFilter from '$lib/components/ScopeFilter.svelte';
	import TeamsCards from '$lib/components/teams/Cards.svelte';

	let teams = [
		{
			name: 'core-dev',
			projects: [
				{
					name: 'cart',
					applications: 1,
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'prices-parser',
					applications: 1,
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
			]
		},
		{
			name: 'infrastructure',
			projects: [
				{
					name: 'core',
					applications: 13,
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'business-foo',
					applications: 4,
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'business-bar',
					applications: 2,
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
			]
		},
	];
</script>

<div class="block">
	<TeamsFilter />
</div>

<div class="block">
	<TeamsCards data={teams} />
</div>
