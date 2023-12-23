<script>
export let application = null;
</script>

<h4>Base Info</h4>

<table class="table is-hoverable is-narrow">
  <tbody>
    <tr>
      <th class="first">Type</th>
      <td>{application.profile || "business"}</td>
    </tr>

		<tr>
      <th>Description</th>
      <td>Some default description</td>
    </tr>

		<tr>
      <th>Engine</th>
      <td>golang-1.12</td>
    </tr>

		<tr>
      <th>Owners</th>
      <td>
				<span class="tag">team-foo</span>
				<span class="tag">@v.petrov</span>
			</td>
    </tr>

		<tr>
      <th>Coverage</th>
      <td>
				<progress class="progress is-small is-success" value="65" max="100">65%</progress>
			</td>
    </tr>
  </tbody>
</table>

<style>
table tbody tr th {
	width: 30%;
}

td {
	vertical-align: middle;
}
</style>
