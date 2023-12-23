<script>
import Shortcuts from '$lib/components/applications/Shortcuts.svelte';
import BaseInfo from '$lib/components/applications/BaseInfo.svelte';
import Resources from '$lib/components/applications/Resources.svelte';
import ReleasesHistory from '$lib/components/applications/ReleasesHistory.svelte';
import Dependencies from '$lib/components/applications/Dependencies.svelte';
import Consumers from '$lib/components/applications/Consumers.svelte';

export let application = {};

const elementStatusClasses = [
	"has-text-danger",
	"has-text-success",
	"has-text-warning",
	"has-text-danger",
];

const elementStatusIcons = [
	"far fa-circle-question",
	"fas fa-circle-check",
	"fas fa-circle-exclamation",
	"fas fa-circle-xmark",
];
</script>

<!-- Shortcuts Panel -->
<div class="columns">
	<div class="column is-one-third">
		<a class="title is-4" href="/teams/{application.name}">
			<i class="
				icon
				{elementStatusClasses[application.status]}
				{elementStatusIcons[application.status]}
			"></i>
			&nbsp;
			{application.name}
		</a>
	</div>

	<div class="column has-text-right">
		<Shortcuts name={application.name} />
	</div>
</div>

<!-- App Info -->
<div class="columns">
	<div class="column box is-two-thirds">
		<BaseInfo application={application} />
	</div>

	<div class="column box">
		<!-- <Resources application={application} /> -->
		<Resources />
	</div>
</div>

<!-- Dependencies & Consumers -->
<div class="columns">
	<div class="column box">
		<!-- <Dependencies application={application} /> -->
		<Dependencies />
	</div>

	<div class="column box">
		<!-- <Consumers application={application} /> -->
		<Consumers />
	</div>
</div>

<!-- Releases History -->
<div class="box">
	<!-- <ReleasesHistory application={application} /> -->
	<ReleasesHistory />
</div>

<style>
div.column {
	margin: 0.75em;
}
</style>
