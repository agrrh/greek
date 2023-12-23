<script>
export let data = [];

data = [
	{
		name: "offers",
		status: 1,
		latestDeploy: {
			dt: 1703310383,
			author: "@p.ivanov",
		},
	},
	{
		name: "auth",
		status: 3,
		latestDeploy: {
			dt: 1703314383,
			author: "@a.petrov",
		},
	},
	{
		name: "cart",
		status: 1,
		latestDeploy: {
			dt: 1703312383,
			author: "@a.petrov",
		},
	},
]
</script>

<h1>Critical Services</h1>

<table class="table is-hoverable">
	<thead>
		<tr>
			<th>Service</th>
			<th>Status</th>
			<th>Latest Deploy</th>
		</tr>
	</thead>
	<tbody>
		{#each data as service}
		<tr>
			<th><a href="/service/{service.name}">{service.name}</a></th>
			<td>{service.status}</td>
			<td>{JSON.stringify(service.latestDeploy)}</td>
		</tr>
		{/each}
	</tbody>
</table>
