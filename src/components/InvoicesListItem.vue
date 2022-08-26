<script lang="ts" setup>
	import { computed } from "vue";
	import IconArrowRight from "./icons/IconArrowRight.vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	import type { MyObj } from "@/utils/model";
	import type { PropType } from "vue";
	const store = useInvoiceStore();
	const props = defineProps({
		item: {
			type: Object as PropType<MyObj>,
			required: true,
		},
	});
	const statusColors = computed(() => {
		let textColor = "";
		let bgColor = "";

		switch (props.item.status) {
			case "paid":
				textColor = "hsl(160, 67%, 52%)";
				bgColor = "hsla(160, 67%, 52%, 0.057)";
				break;
			case "pending":
				textColor = "hsl(34, 100%, 50%)";
				bgColor = "hsla(34, 100%, 50%, 0.057)";
				break;
		}

		return {
			"--text-color": textColor,
			"--bg-color": bgColor,
		};
	});

	const invoiceAction = () => {
		props.item?.status === "draft"
			? store.editForm(props.item?.id)
			: store.viewById(props.item?.id);
	};
</script>
<template>
	<div class="item grid-flow p-2" @click="invoiceAction()">
		<h4 class="id" :value="item.id">#{{ item.id }}</h4>
		<p class="due"><span>Due </span> {{ item.paymentDue }}</p>

		<p class="client-name">{{ item.clientName }}</p>
		<h3 class="total">£{{ item.total.toFixed(2) }}</h3>

		<h4 class="status" :style="statusColors">● {{ item.status }}</h4>

		<IconArrowRight class="right-arrow" />
	</div>
</template>
<style lang="scss" scoped>
	.grid-flow {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(4, 2rem);
		column-gap: 69px;
		.id {
			grid-area: 1/1, 1/1;
		}
		.client-name {
			grid-column: 2/3;
			grid-row: 1/2;
			align-self: right;
		}
		.status {
			grid-column: 2/3;
			grid-row: 3/5;
			width: 104px;
		}
		.right-arrow {
			display: none;
		}
		.due {
			grid-column: 1/2;
			grid-row: 3/4;
		}
		.total {
			grid-column: 1/2;
			grid-row: 4/5;
		}
	}
	.item {
		background-color: var(--color-background-mute);
		box-shadow: $shadow-invoice;
		border-radius: $radius-invoice;
		margin-bottom: 16px;

		span {
			color: var(--color-text);
		}

		h2 {
			color: var(--color-text);
		}
		p {
			color: var(--color-text-soft);
		}
		.status {
			--text-color: var(--color-draft);
			--bg-color: var(--color-draft-bg);
			background: var(--bg-color);
			color: var(--text-color);
			padding: 1rem;
			border-radius: $radius-invoice;
			padding-inline: 1.5rem;

			text-align: center;
		}
	}
	.item:hover {
		outline: solid var(--primary-60);
		transition: all 200ms ease-in-out;
	}
	@media screen and (min-width: $sz-tablet) {
		.grid-flow {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
			// grid-template-rows: 1fr;
			gap: 1rem;
			align-items: center;
			grid-template-rows: 1fr;
			width: auto;
			.right-arrow {
				display: inline-block;
			}

			.due,
			.total,
			.client-name {
				grid-column: unset;
				grid-row: unset;
				justify-self: left;
			}
			.status {
				justify-self: center;
				grid-column: unset;
				grid-row: unset;
			}
		}
	} ;
</style>
