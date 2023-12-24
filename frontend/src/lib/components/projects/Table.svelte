<script>
import ApplicationsCell from '$lib/components/projects/ApplicationsCell.svelte';

export let data = [];

let teamsSeen = [];
let tmp = null;
</script>

<table class="table is-hoverable">
	<thead>
		<tr>
			<th>Project</th>
			<th>Applications</th>
		</tr>
	</thead>
	<tbody>
		{#each data as team}

		{#if (!teamsSeen.includes(team.name) && teamsSeen.push(team.name))}
		<tr>
			<th colspan="2">
				Team:
				<a class="has-text-dark" href="/teams/{team.name}">{team.name}</a>
			</th>

		</tr>
		{/if}

		{#each team.projects as project}
		<tr>
			<td>
				<a href="/projects/{project.name}">{project.name}</a>
			</td>
			<td>
				<ApplicationsCell data={project.applications} />
			</td>
		</tr>
		{/each}
		{/each}
	</tbody>
</table>
