<script setup lang="ts">
	import ButtonEdit from "./buttons/ButtonEdit.vue";
	import ButtonDelete from "./buttons/ButtonDelete.vue";
	import ButtonMarkAsPaid from "./buttons/ButtonMarkAsPaid.vue";
	import { useInvoiceStore } from "@/stores/invoice";
	const store = useInvoiceStore();
	defineProps({
		invoiceId: {
			type: String,
			required: true,
		},
	});
</script>
<template>
	<div class="main wrapper-1 p-1 br-8 flex-flow">
		<div class="status flex-flow">
			<p class="status-text">Status</p>
			<h4>● Pending</h4>
		</div>
		<div class="cta-buttons flex-flow">
			<ButtonEdit @click="store.editForm(invoiceId)" />
			<ButtonDelete />
			<ButtonMarkAsPaid />
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.main {
		position: relative;
		background-color: var(--color-background-mute);

		.status {
			width: 100%;
			&-text {
				color: var(--color-text-soft);
			}
		}
		h4 {
			background-color: var(--warning-80);
			color: var(--warning-60);

			border-radius: $radius-invoice;
			padding: 1rem;
		}
		.cta-buttons {
			position: fixed;
			z-index: 1;
			bottom: 0;
			left: 0;
			background-color: var(--color-background-mute);
			width: 100%;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		.main {
			.status {
				width: 25%;
			}
			.cta-buttons {
				position: static;
				width: auto;

				gap: 1em;
			}
		}
	}
</style>
