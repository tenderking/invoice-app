<template>
	<ButtonBase> Cancel</ButtonBase>
</template>
<script setup lang="ts">
	import ButtonBase from "./ButtonBase.vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	const store = useInvoiceStore();
</script>
<style lang="scss" scoped>
	.button {
		--button-color: var(--color-btn-light-text);
		--button-bg: var(--color-btn-light-bg);
		--hover-bg: var(--color-btn-hover-bg);
		--hover-color: var(--secondary-60);
		padding-block: 1rem;
	}
</style>
