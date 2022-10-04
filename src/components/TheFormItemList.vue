<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import IconDelete from "./icons/IconDelete.vue";
	import ButtonAdd from "./ButtonAdd.vue";
	import type { Item } from "@/types/Invoice";
	import { computed, type PropType } from "vue";

	const props = defineProps({
		modelValue: {
			type: Array as PropType<Item[]>,
			required: true,
		},
		addItemFun: {
			type: Function,
			required: true,
		},
		deleteItemFun: {
			type: Function,
			required: true,
		},
	});
	const emit = defineEmits(["update:modelValue"]);

	const items = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			return emit("update:modelValue", value);
		},
	});
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
				<tr v-for="(item, index) in items" :key="item.name">
					<td>
						<TheFormBaseInput
							id="itemName"
							v-model:modelValue="item.name"
							type="text"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="qty"
							v-model:modelValue="item.quantity"
							type="number"
							step="0.01"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="price"
							v-model:modelValue="item.price"
							type="number"
							step="0.01"
						/>
					</td>
					<td>{{ item.total }}</td>
					<td><IconDelete @click="deleteItemFun(index)" /></td>
				</tr>
			</tbody>
		</table>

		<ButtonAdd @click.prevent="addItemFun()" />
	</div>
</template>

<style lang="scss">
	table {
		width: 100%;
	}
</style>
