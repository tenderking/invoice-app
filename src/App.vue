<script setup lang="ts">
	import TheNavBar from "./components/TheNavBar.vue";
	import { useInvoiceStore } from "./stores/invoiceStore";
	import TheForm from "./components/forms/TheForm.vue";
	import ViewInvoice from "./components/ViewInvoice.vue";
	import InvoiceList from "./components/InvoiceList.vue";

	import { computed, shallowRef } from "vue";
	const store = useInvoiceStore();
	const formButtons = computed(() => {
		const invoiceList = shallowRef(InvoiceList);
		const viewInvoice = shallowRef(ViewInvoice);

		if (store.isViewInvoice) {
			return viewInvoice.value;
		}
		return invoiceList.value;
	});
</script>

<template>
	<header><TheNavBar /></header>
	<main>
		<TheForm v-if="store.isShowForm" />

		<component :is="formButtons"></component>
	</main>
</template>
<style lang="scss">
	#app {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr auto;
		header {
			grid-column: 1/-1;
			grid-row: 1 / span 1;
		}
		main {
			grid-column: 1/-1;
			grid-row: 2 / span 1;
			margin-inline: auto;
			padding-top: $pd-mb-invoices;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		#app {
			grid-template-columns: auto 1fr;
			header {
				grid-column: 1 / span 1;
				grid-row: 1 / -1;
			}
			main {
				grid-column: 2/-1;
				grid-row: 1/ -1;
				position: relative;
				width: 100%;
			}
		}
	}
</style>
