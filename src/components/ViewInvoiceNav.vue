<script setup lang="ts">
	import ButtonEdit from "./ButtonEdit.vue";
	import ButtonDelete from "./ButtonDelete.vue";
	import ButtonMarkAsPaid from "./ButtonMarkAsPaid.vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	import { computed, ref } from "vue";
	import TheDeleteModal from "./TheDeleteModal.vue";
	const store = useInvoiceStore();

	const props = defineProps({
		invoiceId: {
			type: String,
			required: true,
		},
	});

	const getStatus = computed(
		() =>
			store.getInvoices.find((invoice) => invoice.id === props.invoiceId)
				?.status
	);
	const statusColors = computed(() => {
		let textColor = "";
		let bgColor = "";
		if (getStatus.value === "paid") {
			textColor = "hsl(160, 67%, 52%)";
			bgColor = "hsla(160, 67%, 52%, 0.057)";
		}
		return {
			"--text-color": textColor,
			"--bg-color": bgColor,
		};
	});
	const isShowModal = ref(false);
	function openDialog() {
		isShowModal.value = true;
	}
</script>
<template>
	<div class="main wrapper-1 p-1 br-8 flex-flow">
		<div :style="statusColors" class="status flex-flow">
			<p class="status-text">Status</p>
			<h4>{{ getStatus }}</h4>
		</div>
		<div class="cta-buttons flex-flow">
			<router-link :to="{ name: 'InvoicesEdit', params: { id: invoiceId } }">
				<ButtonEdit />
			</router-link>

			<ButtonDelete @click="openDialog" />
			<ButtonMarkAsPaid @click="store.setStatusAsPaid(invoiceId)" />
		</div>
	</div>
	<TheDeleteModal
		v-if="isShowModal"
		v-model:isShowModal="isShowModal"
		:id="invoiceId"
	/>
</template>
<style lang="scss" scoped>
	.main {
		position: relative;
		background-color: var(--color-background-mute);

		.status {
			--text-color: var(--warning-60);
			--bg-color: var(--warning-80);

			width: 100%;
			&-text {
				color: var(--color-text-soft);
			}
		}
		h4 {
			background-color: var(--bg-color);
			color: var(--text-color);

			border-radius: $radius-invoice;
			padding: 1rem;
		}
		.cta-buttons {
			position: fixed;

			bottom: 0;
			left: 0;
			background-color: var(--color-background-mute);
			width: 100%;
			padding: 1rem;
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
				padding: 0;
			}
		}
	}
</style>
