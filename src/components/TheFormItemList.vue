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
				<tr v-for="(item, index) in items" :key="item.name">
					<td>
						<TheFormBaseInput id="itemName" v-model="item.name" type="text" />
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="qty"
							v-model="item.quantity"
							type="number"
							step="0.01"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="price"
							v-model="item.price"
							type="number"
							step="0.01"
						/>
					</td>
					<td>{{ item.total }}</td>
					<td><IconDelete @click="store.deleteItem(index)" /></td>
				</tr>
			</tbody>
		</table>
		<ButtonAdd @click.prevent="store.addItem()" />
	</div>
</template>

<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import IconDelete from "./icons/IconDelete.vue";
	import ButtonAdd from "./ButtonAdd.vue";
	// import type { Item } from "@/utils/model";
	// import type { PropType } from "vue";
	import { useFormStore } from "@/stores/formStore";
	import { computed } from "vue";
	const store = useFormStore();
	const items = computed(() => store.newItem);

	// defineProps({
	// 	modelValue: {
	// 		type: Array as PropType<Array<Item>>,
	// 		required: true,
	// 	},
	// });
</script>
<style lang="scss">
	table {
		width: 100%;
	}
</style>
