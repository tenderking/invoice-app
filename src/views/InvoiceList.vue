<template>
	<div class="invoice-list">
		<div class="wrapper-1">
			<InvoicesListNav />
		</div>
		<template v-for="item in store.getInvoices" :key="item">
			<InvoicesListItem :item="item" />
		</template>
	</div>
	<router-view></router-view>
</template>
<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoiceStore";
	import InvoicesListItem from "@/components/InvoicesListItem.vue";
	import InvoicesListNav from "@/components/InvoicesListNav.vue";

	const store = useInvoiceStore();
</script>
<style lang="scss">
	.invoice-list {
		max-width: fit-content;
		margin: auto;
	}
</style>
