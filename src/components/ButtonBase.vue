<template>
	<button class="button br-24">
		<h4>
			<slot> </slot>
		</h4>
	</button>
</template>
<style lang="scss" scoped>
	.button {
		font-family: inherit;
		border: 0;
		color: var(--button-color);
		background-color: var(--button-bg);

		padding: 0.6rem 1rem;
		h4 {
			line-height: 1;
		}

		&:hover {
			color: var(--hover-color);
			background-color: var(--hover-bg);
		}
	}
</style>
