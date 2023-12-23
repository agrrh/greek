<script>
export let data = [];

const elementStatusClasses = [
	"is-danger",
	"is-success",
	"is-warning",
	"is-danger",
];

const elementStatusIcons = [
	"far fa-circle-question",
	"fas fa-circle-check",
	"fas fa-circle-exclamation",
	"fas fa-circle-xmark",
];
</script>

{#each data as application}
	<a class="button is-small {elementStatusClasses[application.status]} has-tooltip-arrow" href="/applications/{application.name}" data-tooltip="{application.name}">
		<span class="icon is-large">
			<i class="{elementStatusIcons[application.status]}"></i>
		</span>
	</a>
{/each}

<style>
a.button {
	margin-right: 0.5em;
}
</style>
