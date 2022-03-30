<script lang="ts" setup>
	import { ref } from "vue";
	import IconArrowRight from "./icons/IconArrowRight.vue";
	import { useInvoiceStore } from "@/stores/invoice";
	const store = useInvoiceStore();
	const props = defineProps({
		item: Object,
	});
	const colr = ref("");
	const bg = ref(""),

	switch (props.item?.status) {
		case "paid":
			colr.value = (store.statusColor.paid.text);
			bg.value = store.statusColor.paid.bg;
			console.log("we are here", colr.value);
			break;
		case "pending":
			colr.value = store.statusColor.pending.text;
			bg.value = store.statusColor.pending.bg;
			break;
		case "draft":
			colr.value = store.statusColor.draft.text;
			bg.value = store.statusColor.draft.bg;
			console.log("we are here", colr.value);
			break;
	}
	const styleObject = {
		color: colr.value,
		background-color: bg.value,
	}
</script>
<template>
	<div class="item grid-flow p-2">
		<h4 class="id">#{{ item?.id }}</h4>
		<p class="due"><span>Due </span> {{ item?.paymentDue }}</p>

		<p class="client-name">{{ item?.clientName }}</p>
		<h3 class="total">£{{ item?.total }}</h3>

		<h4 class="status" :style="styleObject">⏺ {{ item?.status }}</h4>
		<i class="right-arrow">
			<IconArrowRight />
		</i>
	</div>
</template>
<style lang="scss">
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
			background-color: v-bind("bg");
			color: v-bind(("colr"));
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
			grid-template-columns: repeat(6, 1fr);
			// grid-template-rows: 1fr;
			gap: 1rem;
			align-items: center;
			grid-template-rows: 1fr;

			.right-arrow {
				display: block;
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
