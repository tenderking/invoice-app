<template>
	<ButtonBase> + Add New Item</ButtonBase>
</template>
<script setup lang="ts">
	import ButtonBase from "./ButtonBase.vue";
</script>
<style lang="scss" scoped>
	.button {
		--button-color: var(--color-text-soft);
		--button-bg: var(--color-btn-light-bg);
		--hover-bg: var(--secondary-60);
		// --hover-color: var(--secondary-60);
		padding-block: 1rem;
		width: 100%;
	}
</style>
