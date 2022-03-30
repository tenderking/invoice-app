<template>
	<div class="wrapper-1">
		<InvoicesListNav />
	</div>
	<div class="wrapper-1">
		<template v-for="item in store.filteredInvoice">
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
