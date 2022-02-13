<script lang="ts">
	export let label: string;
</script>

<h1 class="title">{label}</h1>

<style lang="scss">
	.title {
		color: transparent;
		text-align: center;
		font-family: 'Fredericka the Great', Impact, 'serif';
		font-size: 6em;
		font-weight: 300;

		// https://www.gradient-animator.com/
		background: linear-gradient(117deg, #4999e2, #e39112, #4999e1);
		background-clip: text;
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 11% 0%;
		}
		50% {
			background-position: 90% 100%;
		}
		100% {
			background-position: 11% 0%;
		}
	}
</style>
