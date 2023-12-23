<script>
export let application = {
	releases: [
		{},
		{},
		{},
	],
};
</script>

<h4>Latest Releases</h4>

<table class="table is-hoverable is-narrow">
  <thead>
		<tr>
			<th>Author</th>
			<th>Time</th>
			<th>Logs</th>
			<th>PR</th>
			<th>Task</th>
		</tr>
	</thead>
	<tbody>
	{#each application.releases as release}
    <tr>
      <td class="first">@a.ivanov</td>
			<td>2023-12-23 21:46</td>
      <td>
				<a class="button is-small" href="https://cicd.mycorp.com/deploy/12345">
					<i class="fa fa-cog"></i>
					&nbsp;
					12345
				</a>
			</td>
			<td>
				<a class="button is-small" href="https://github.com/mycorp/{application.name || "app"}/pull/12345">
					<i class="fa fa-code"></i>
					&nbsp;
					asdfgn
				</a>
			</td>
			<td>
					<a href="https://jira.mycorp.com/JIRA-123">JIRA-123</a>:
					Lorem ipsum dolor sit amet, consectetur adipiscing
			</td>
    </tr>
	{/each}
  </tbody>
</table>

<style>
table tbody tr th.first,
table tbody tr td.first {
	width: 10%;
}

td {
	vertical-align: middle;
}
</style>
