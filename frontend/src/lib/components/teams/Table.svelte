<script>
import ServicesCell from '$lib/components/teams/ServicesCell.svelte';

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

<table class="table is-hoverable">
	<thead>
		<tr>
			<th>Team</th>
			<th>Services</th>
		</tr>
	</thead>
	<tbody>
		{#each data as team}
		<tr>
			<th><a href="/teams/{team.name}">{humanizeName(team.name)}</a></th>
			<td>
				<ServicesCell data={team.services} />
			</td>
		</tr>
		{/each}
	</tbody>
</table>
