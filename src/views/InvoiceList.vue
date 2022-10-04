<template>
	<div class="invoice-list">
		<div class="wrapper-1">
			<InvoicesListNav />
		</div>
		<template v-if="store.getInvoices.length">
			<template v-for="item in store.getInvoices" :key="item">
				<InvoicesListItem :item="item" />
			</template>
		</template>
		<div class="invoice-empty" v-else>
			<img :src="illustrationEmpty" alt="no invoices" />
			<h2>There is nothing here</h2>
			<p>
				Create an invoice by clicking the New Invoice button and get started
			</p>
		</div>
	</div>
	<router-view></router-view>
</template>
<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoiceStore";
	import InvoicesListItem from "@/components/InvoicesListItem.vue";
	import InvoicesListNav from "@/components/InvoicesListNav.vue";

	import illustrationEmpty from "@/assets/illustration-empty.svg";
	const store = useInvoiceStore();
</script>
<style lang="scss">
	.invoice-list {
		max-width: fit-content;
		margin: auto;
		.invoice-empty {
			padding: $pd-mb-invoices;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				padding: $pd-mb-invoices;
			}
			p {
				max-width: 24ch;
				text-align: center;
				color: var(--color-text-soft);
			}
		}
	}
</style>
