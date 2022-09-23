<script>
  import Header from './lib/Header.svelte'
  import Panel from './lib/Panel.svelte'
  import Workspace from './lib/Workspace.svelte'
</script>

<div class="columns">
  <div class="column" id="header">
    <Header />
  </div>
</div>

<div class="columns">
  <div class="column is-one-fifth" id="panel">
    <Panel />
  </div>

  <div class="column" id="workspace">
    <Workspace />
  </div>
</div>
