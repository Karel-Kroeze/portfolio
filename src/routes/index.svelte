<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Polaroid from '$lib/components/Polaroid.svelte';
	export let images;

	let width;
	$: imageCount = Math.ceil(width / 300);
	$: imagesByWidth = images.slice(0, imageCount);
</script>

<svelte:window bind:innerWidth={width} />

<Header label="THIS IS ME" />
<div class="polaroids">
	{#each imagesByWidth as image}
		<Polaroid src={image.src} caption={image.caption} />
	{/each}
</div>
<Header label="I love learning" />
<Header label="I publish research" />
<Header label="I make things" />

<style lang="scss">
	.polaroids {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
	}
</style>
