<script setup lang="ts">
	import TheNavBar from "./components/TheNavBar.vue";
	import { useInvoiceStore } from "./stores/invoiceStore";
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
	<div id="modal"></div>
	<main class="main">
		<component :is="formButtons"></component>
	</main>
</template>
<style lang="scss">
	#app {
		height: 100vh;
		// display: grid;
		// grid-template-columns: 1fr auto;
		// grid-template-rows: 1fr auto;
		// position: relative;

		#modal {
			position: relative;
		}
		main {
			margin-inline: auto;
			padding-top: 6rem;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		#app {
			display: flex;
			main {
				padding-top: 2rem;
				position: relative;
				width: 100%;
			}
		}
	}
</style>
