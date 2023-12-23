import Application from '$lib/components/applications/Single.svelte';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		name: params.application,
    status: 1,
	};
};
