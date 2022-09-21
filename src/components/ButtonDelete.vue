<template>
	<ButtonBase> Delete</ButtonBase>
</template>
<script setup lang="ts">
	import ButtonBase from "./ButtonBase.vue";
</script>
<style lang="scss" scoped>
	.button {
		--button-color: var(--neutral-100);
		--button-bg: var(--error-60);
		--hover-bg: var(--error-80);
		padding-block: 1rem;
	}
</style>
