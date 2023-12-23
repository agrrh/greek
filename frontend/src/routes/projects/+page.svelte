<script>
	import ProjectsTable from '$lib/components/projects/Table.svelte';

	let data = [
		{
			name: 'core-dev',
			projects: [
				{
					name: 'cart',
					applications: [
						{
							name: "application-1",
							status: 1,
						},
						{
							name: "application-2",
							status: 2,
						},
					],
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'prices-parser',
					applications: [
						{
							name: "application-3",
							status: 1,
						},
					],
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
					applications: [
						{
							name: "application-4",
							status: 3,
						},
						{
							name: "application-5",
							status: 2,
						},
					],
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'business-foo',
					applications: [
						{
							name: "application-6",
							status: 0,
						},
					],
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
				{
					name: 'business-bar',
					applications: [
						{
							name: "application-7",
							status: 1,
						},
					],
					owners: [
						"@d.fyodor",
						"@k.matroskin",
					],
				},
			]
		},
	];
</script>

<ProjectsTable data={data} />
