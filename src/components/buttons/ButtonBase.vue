<template>
	<button class="button br-24">
		<slot> </slot>
	</button>
</template>
<style lang="scss">
	.button {
		font-family: inherit;
		border: 0;
		color: var(--button-color);
		background-color: var(--button-bg);
		padding: 8px 2rem;
		&:hover {
			color: var(--hover-color);
			background-color: var(--hover-bg);
		}
	}
</style>
