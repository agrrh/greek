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

<h1>Critical Applications</h1>

<p>Latest critical applications updates, up to 5.</p>

<table class="table is-hoverable">
	<thead>
		<tr>
			<th>Application</th>
			<th>Status</th>
			<th>Latest Deploy</th>
		</tr>
	</thead>
	<tbody>
		{#each data as application}
		<tr>
			<th><a href="/applications/{application.name}">{application.name}</a></th>
			<td>{application.status}</td>
			<td>{(Math.round(Date.now() / 1000) - application.latestDeploy.dt)} seconds ago by {application.latestDeploy.author}</td>
		</tr>
		{/each}
	</tbody>
</table>
