<script>
export let data = [];

function humanizeName(name) {
	let a = [];
	name.split('-').forEach((e) => {
		let firstLetter = e.charAt(0);
		let firstLetterCap = firstLetter.toUpperCase();
		let remainingLetters = e.slice(1);
		a.push(firstLetterCap + remainingLetters);
	});
	return a.join(" ");
}
</script>

{#each data as team}
<a class="title" href="/teams/{team.name}">{humanizeName(team.name)}</a>

<div class="columns is-multiline">
	{#each team.projects as project}
	<div class="column is-half">
		<div class="card">
		  <div class="card-content">
		    <div class="content">
					<p class="title is-4">
						<a class="title" href="/projects/{project.name}">{project.name}</a>
					</p>
					<p class="subtitle is-6">
						{project.owners.join(", ")}
					</p>
					<p>
			      {project.applications} application(s)
					</p>
		    </div>
		  </div>
		</div>
	</div>
	{/each}
</div>
{/each}

<style>
div.columns {
	padding: 1em 0em 2em 0em;
}
</style>
