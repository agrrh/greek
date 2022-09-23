<script>
  import Header from './lib/Header.svelte'
  import Menu from './lib/Menu.svelte'
  import Workspace from './lib/Workspace.svelte'
</script>

<section class="columns">
  <section class="column has-text-light has-background-black" id="header">
    <Header />
  </section>
</section>

<section class="columns">
  <section class="column is-one-fifth has-text-light has-background-dark" id="panel">
    <Menu />
  </section>

  <section class="column has-text-dark has-background-white" id="workspace">
    <Workspace />
  </section>
</section>
