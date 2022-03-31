<template>
	<ButtonBase> Mark as Paid</ButtonBase>
</template>
<script setup lang="ts">
	import ButtonBase from "./ButtonBase.vue";
</script>
<style lang="scss" scoped>
	.button {
		--button-color: var(--neutral-100);
		--button-bg: var(--primary-60);
		--hover-bg: var(--primary-70);
		padding-block: 1rem;
	}
</style>
