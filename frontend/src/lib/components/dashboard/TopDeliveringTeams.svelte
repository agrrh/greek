<script>
export let data = [];

data = [
	{
		name: "infrastructure",
		deliveries: 15,
		latestDeploy: {
			dt: 1703314383,
			author: "@d.vasyanin",
		},
	},
	{
		name: "core-dev",
		deliveries: 10,
		latestDeploy: {
			dt: 1703310383,
			author: "@z.olegov",
		},
	},
]
</script>

<h1>Top Delivering Teams</h1>

<p>Top teams with most frequent deliveries.</p>

<table class="table is-hoverable">
	<thead>
		<tr>
			<th>Team</th>
			<th>Deliveries in 5 days</th>
			<th>Latest Deploy</th>
		</tr>
	</thead>
	<tbody>
		{#each data as application}
		<tr>
			<th><a href="/applications/{application.name}">{application.name}</a></th>
			<td>{application.deliveries}</td>
			<td>{(Math.round(Date.now() / 1000) - application.latestDeploy.dt)} seconds ago by {application.latestDeploy.author}</td>
		</tr>
		{/each}
	</tbody>
</table>
