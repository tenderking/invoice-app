<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import IconDelete from "./icons/IconDelete.vue";
	import ButtonAdd from "./ButtonAdd.vue";

	import { useFormStore } from "@/stores/formStore";
	import { computed, reactive, type PropType } from "vue";
	import type { Item } from "@/utils/model";

	// interface Item {
	// 	name: string;
	// 	quantity: number;
	// 	price: number;
	// }
	const props = defineProps({
		modelValue: {
			type: Array as any,
			required: false,
		},
	});

	const item: Item = reactive({
		name: "",
		quantity: 0,
		price: 0,
		total: 0,
	});

	const itemsList = computed(() => {
		const items = reactive([] as Item[]);
		if (props.modelValue) {
			const data = props.modelValue;
			const combined = items.concat(data, items);
			return combined;
		}
		return items;
	});

	function addItem() {
		itemsList.value.push(item);
	}

	const total = computed(() => 0);

	const store = useFormStore();
	// const items = computed(() => store.newItem);

	const deleteItem = (index: number) => {
		console.log("this is number", index);
		// items.splice(index, 1);
	};
</script>

<template>
	<div class="list-container">
		<h3 class="pb-1 soft-color">Item List</h3>
		<table>
			<thead>
				<tr>
					<td>Item Name</td>
					<td>Qty.</td>
					<td>Price</td>
					<td>Total</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in itemsList" :key="item.name">
					<td>
						<TheFormBaseInput
							id="itemName"
							:modelValue="item.name"
							type="text"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="qty"
							:modelValue="item.quantity"
							type="number"
							step="0.01"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="price"
							:modelValue="item.price"
							type="number"
							step="0.01"
						/>
					</td>
					<td>{{ item.total }}</td>
					<td><IconDelete @click="deleteItem(index)" /></td>
				</tr>
			</tbody>
		</table>
		<ButtonAdd @click.prevent="addItem()" />
	</div>
</template>

<style lang="scss">
	table {
		width: 100%;
	}
</style>
