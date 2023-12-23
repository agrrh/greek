<script>
export let application = {
	resources: {
		cpu: 5.6,
		memory: 14.2 * 1024 * 1024 * 1024,
		network: 24 * 1024,
		packets: 18 * 1000,
	},
};
</script>

<h4>Resources</h4>

<div class="columns is-multiline">
	<div class="column is-half has-text-centered">
		<p class="heading"><i class="fas fa-microchip"></i>&nbsp;CPU</p>
		<p><span class="title">{application.resources.cpu}</span> CPU</p>
	</div>

	<div class="column is-half has-text-centered">
		<p class="heading"><i class="fas fa-memory"></i>&nbsp;Memory</p>
		<p><span class="title">{Math.round(application.resources.memory / 1024 ** 3)}</span> Gi</p>
	</div>

	<div class="column is-half has-text-centered">
		<p class="heading"><i class="fas fa-network-wired"></i>&nbsp;Network</p>
		<p><span class="title">{Math.round(application.resources.network / 1024)}</span> Mbps</p>
	</div>

	<div class="column is-half has-text-centered">
		<p class="heading "><i class="fas fa-left-right"></i>&nbsp;Packets</p>
		<p><span class="title">{Math.round(application.resources.packets / 1000)}</span> kpps</p>
	</div>
</div>
