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
				<tr v-for="(item, index) in modelValue" :key="index">
					<td>
						<TheFormBaseInput id="itemName" v-model="item.name" type="text" />
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="qty"
							v-model="item.quantity"
							type="number"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="price"
							v-model="item.price"
							type="number"
						/>
					</td>
					<td>{{ item.total }}</td>
					<td><IconDelete /></td>
				</tr>
			</tbody>
		</table>
		<ButtonAdd @click.prevent="addItem" />
	</div>
</template>

<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import IconDelete from "../icons/IconDelete.vue";
	import ButtonAdd from "../buttons/ButtonAdd.vue";
	import type { Item } from "@/stores/model";
	import { ref, type PropType } from "vue";
	defineProps({
		modelValue: {
			type: Array as PropType<Array<Item>>,
		},
	});
	const newItem = {
		name: "",
		quantity: 0,
		price: 0,
		total: 0,
	};
	let itemList = ref([newItem]);
	const addItem = () => itemList.value.push(newItem);
</script>
<style lang="scss">
	table {
		width: 100%;
	}
</style>
