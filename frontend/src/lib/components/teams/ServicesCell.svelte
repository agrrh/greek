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

{#each data as service}
	<a class="button is-small {elementStatusClasses[service.status]} has-tooltip-arrow" href="/services/{service.name}" data-tooltip="{service.name}">
		<span class="icon is-large">
			<i class="{elementStatusIcons[service.status]}"></i>
		</span>
	</a>
{/each}

<style>
a.button {
	margin-right: 0.5em;
}
</style>
