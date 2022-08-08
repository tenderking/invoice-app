<template>
	<div class="invoice-list">
		<div class="wrapper-1">
			<InvoicesListNav />
		</div>
		<template v-for="item in store.filteredInvoice" :key="item">
			<InvoicesListItem :item="item" />
		</template>
	</div>
</template>
<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoice";
	import InvoicesListItem from "./InvoicesListItem.vue";
	import InvoicesListNav from "./InvoicesListNav.vue";

	const store = useInvoiceStore();
</script>
<style lang="scss">
	.invoice-list {
		max-width: fit-content;
		margin: auto;
	}
</style>
