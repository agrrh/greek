<script>
  import TableRow from './team/TableRow.svelte'
</script>

<h1 class="title">Team Foo</h1>

<table class="table is-striped is-hoverable">
  <thead>
    <tr>
      <th>Service Name</th>
      <th>Statuses</th>
    </tr>
  </thead>

  <tbody>
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </tbody>
</table>
