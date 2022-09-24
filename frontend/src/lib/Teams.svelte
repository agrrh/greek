<script>
  import TableRow from './teams/TableRow.svelte'
</script>

<!-- <h1 class="title">Teams</h1> -->

<div class="field">
  <p class="control has-icons-left">
    <input class="input" placeholder="Filter">
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
</div>

<table class="table is-striped is-hoverable">
  <thead>
    <tr>
      <th>Team Name</th>
      <th>No. of Services</th>
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
