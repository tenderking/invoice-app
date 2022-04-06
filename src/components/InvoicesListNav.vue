<script lang="ts" setup>
	import { useInvoiceStore } from "@/stores/invoice";
	import { ref } from "vue";
	import ButtonNewInvoice from "./buttons/ButtonNewInvoice.vue";
	import IconArrowDown from "./icons/IconArrowDown.vue";
	const filterBox = ref(false);
	const showFilters = () => (filterBox.value = !filterBox.value);

	const store = useInvoiceStore();
</script>
<template>
	<div class="nav p-2">
		<div>
			<h2>Invoices</h2>
			<p>Invoices</p>
		</div>

		<div class="filter-dd" @click="showFilters()">
			<h4>Filter</h4>
			<i><IconArrowDown /></i>
		</div>
		<div class="filter shadow-filter br-8" v-show="filterBox">
			<div class="filter-item">
				<input
					type="checkbox"
					name="paid"
					id="paid"
					value="paid"
					v-model="store.status"
				/>
				<label for="paid">
					<h4>Paid</h4>
				</label>
			</div>

			<div class="filter-item">
				<input
					type="checkbox"
					name="pending"
					id="pending"
					value="pending"
					v-model="store.status"
				/>
				<label for="pending">
					<h4>Pending</h4>
				</label>
			</div>
			<div class="filter-item">
				<input
					type="checkbox"
					name="draft"
					id="draft"
					value="draft"
					v-model="store.status"
				/>
				<label for="draft">
					<h4>Draft</h4>
				</label>
			</div>
		</div>

		<ButtonNewInvoice />
	</div>
</template>
<style lang="scss" scoped>
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.filter-dd {
			display: flex;
			gap: 1rem;
			margin-left: auto;
			padding: 1rem;
		}
		.filter {
			position: absolute;
			top: 5rem;
			right: 12rem;
			z-index: 10;
			background-color: var(--color-background-mute);
			width: max-content;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;

			&-item {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}
	}
</style>
