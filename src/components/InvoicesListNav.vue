<script lang="ts" setup>
import { useInvoiceStore } from '@/stores/invoiceStore';
import { ref } from 'vue';
import ButtonNewInvoice from './ButtonNewInvoice.vue';
import IconArrowDown from './icons/IconArrowDown.vue';
import TheForm from '@/components/TheForm.vue';
import { onClickOutside } from '@vueuse/core';
const isShowFilterMOdal = ref(false);

const openForm = ref(false);
const showFilters = () => (isShowFilterMOdal.value = !isShowFilterMOdal.value);

const store = useInvoiceStore();
const active = false;

const targetFilter = ref(null);
onClickOutside(targetFilter, event => {
	console.log(event);
	isShowFilterMOdal.value = false;
});

</script>
<template>
	<div class="nav p-2">
		<div>
			<h2>Invoices</h2>
			<p>{{ store.getInvoices.length }} Invoices</p>
		</div>

		<div class="filter-dd" @click="showFilters()">
			<h4>Filter</h4>
			<i><IconArrowDown  /></i>
		</div>
		<div class="filter shadow-filter br-8" ref="targetFilter" v-show="isShowFilterMOdal">
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
		<router-link to="/invoices/create">
			<ButtonNewInvoice />
		</router-link>

		<Teleport to="#modal">
			<TheForm v-if="openForm" :mode="active" />
		</Teleport>
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