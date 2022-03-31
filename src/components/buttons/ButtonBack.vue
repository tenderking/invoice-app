<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoice";
	import IconArrowLeft from "../icons/IconArrowLeft.vue";
	const store = useInvoiceStore();
</script>
<template>
	<button class="flat-button wrapper-1" @click="store.viewInvoice = false">
		<div class="flex-flow">
			<IconArrowLeft />
			<h4>Go Back</h4>
		</div>
	</button>
</template>
<style lang="scss" scoped>
	.flat-button {
		border: 0;
		background: 0;
		color: var(--color-text);
		padding-left: 0;

		> * {
			gap: 1rem;
		}
		&:hover {
			color: var(--color-btn-light-text);
		}
	}
</style>
