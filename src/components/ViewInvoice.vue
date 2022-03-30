<template>
	<div class="container wrapper-1 p-2 br-8 shadow-invoice">
		<div class="company flex-flow">
			<div class="invoice-id">
				<h4># {{ invoice.id }}</h4>
				<p>
					{{ invoice.description }}
				</p>
			</div>
			<div class="company-adress">
				<p class="body-2">
					{{ invoice.senderAddress.street }} <br />
					{{ invoice.senderAddress.city }} <br />
					{{ invoice.senderAddress.postCode }} <br />
					{{ invoice.senderAddress.country }} <br />
				</p>
			</div>
		</div>
		<div class="client wrapper-1">
			<div class="col-1 row-1">
				<p class="mb-1">Invoice Date</p>
				<h3 class="pb-2">{{ invoice.createdAt }}</h3>
				<p class="pb-1">Payment Due</p>
				<h3 class="pb-2">{{ invoice.paymentDue }}</h3>
			</div>
			<div class="col-2 row-1">
				<p class="pb-1">Bill to</p>
				<h3 class="pb-1">{{ invoice.clientName }}</h3>
				<p class="body-2">
					{{ invoice.clientAddress.street }} <br />
					{{ invoice.clientAddress.city }} <br />
					{{ invoice.clientAddress.postCode }} <br />
					{{ invoice.clientAddress.country }} <br />
				</p>
			</div>
			<div class="sent-to">
				<p class="pb-1">Sent to</p>
				<h3>{{ invoice.clientEmail }}</h3>
			</div>
		</div>
		<div class="invoice-details wrapper-1">
			<div v-for="item in invoice.items" class="flex-flow">
				<div>
					<h4 class="pb-1">
						{{ item.name }}
					</h4>

					<h4 class="soft-color pb-2">
						{{ item.quantity }} x £{{ item.price }}
					</h4>
				</div>
				<h4>{{ item.total }}</h4>
			</div>
		</div>
		<div class="grand-total flex-flow">
			<p>Grand total</p>
			<h2>£ {{ invoice.total }}</h2>
		</div>
	</div>
</template>
<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoice";

	const { filteredInvoice } = useInvoiceStore();
	const invoice = filteredInvoice[1];
</script>
<style lang="scss">
	.container {
		background-color: var(--color-background-mute);
		p {
			color: var(--color-text-soft);
		}
		.invoice-details {
			background-color: var(--color-background-soft);
			padding: $pd-mb-modal;
			border-radius: 8px 8px 0 0;
		}
		.grand-total {
			background-color: var(--color-background-misc);
			color: var(--color-text);
			padding: $pd-mb-modal;
			border-radius: 0 0 8px 8px;
		}
		.client {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.col-1 {
				grid-column: 1/2;
			}
			.col-2 {
				grid-column: 2/3;
			}
			.row-1 {
				grid-row: 1/2;
			}
		}
	}
	@media screen and (min-width: $sz-tablet) {
		.client {
			grid-template-columns: 1fr 1fr 1fr;
			gap: 8rem;
			.sent-to {
				grid-column: 3/4;
			}
		}
	}
</style>
