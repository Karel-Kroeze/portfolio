<script lang="ts" context="module">
	let topIndex = 1;
</script>

<script lang="ts">
	import Paper, { PaperComponentDev } from '@smui/paper';
	import random from 'lodash/random';

	export let src: string = `http://placekitten.com/${250 + Math.ceil(Math.random() * 10)}/${
		250 + Math.ceil(Math.random() * 10)
	}`;
	export let caption: string = 'no comment...';
	export let imageRotation: number = random(4, 14) * Math.pow(-1, random(0, 1));
	export let imageOffset: [number, number] = [random(-10, 10), random(-10, 10)];
	export let captionRotation: number = random(-5, 5);
	export let captionOffset: [number, number] = [random(-5, 5), random(-5, 5)];

	let self: HTMLDivElement;

	function onMouseEnter() {
		imageRotation += random(-5, 5);
		self.style.zIndex = (topIndex++).toString();
	}

	let lastPos: { x: number; y: number };
	function onDragStart({ x, y }: DragEvent) {
		lastPos = { x, y };
	}
	function onDrag({ x, y }: DragEvent) {
		const offset = { x: x - lastPos.x, y: y - lastPos.y };
		self.style.transform =
			`rotate(${imageRotation}deg) ` +
			`translate(${imageOffset[0] + offset.x}px, ` +
			`${imageOffset[1] + offset.y}px)`;
		lastPos = { x, y };
	}
</script>

<div
	class="polaroid"
	style="transform: rotate({imageRotation}deg) translate({imageOffset[0]}px, {imageOffset[1]}px);"
	on:dragstart={onDragStart}
	on:drag={onDrag}
	bind:this={self}
>
	<Paper square class="polaroid" elevation={4} draggable>
		<figure on:mouseenter={onMouseEnter}>
			<img {src} alt={caption} />
			<caption
				style="transform: rotate({captionRotation}deg) translate({captionOffset[0]}px, {captionOffset[1]}px);"
				>{caption}</caption
			>
		</figure>
	</Paper>
</div>

<style lang="scss">
	:global(.polaroid) {
		width: min-content;
		padding: 0;
		margin: -0.5em;

		transition: transform 0.3s ease-in;

		&:hover {
			z-index: 1;
			transition: transform 0.2s ease-out;
			transform: perspective(500px) translate3d(0, 0, 50px);
		}
	}
	figure {
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		height: 314px;
		overflow: hidden;
		padding: 0.8em;
	}
	img {
		width: 250px;
		height: 250px;
		object-fit: cover;
	}
	caption {
		font-family: 'Permanent Marker', serif;
		text-align: center;
		font-size: 1.5em;
		line-height: 1.2em;
		margin: auto 0;
		padding: 0 0.5em;
	}
</style>
