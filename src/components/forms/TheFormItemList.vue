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
				<tr v-for="item in 4">
					<td>
						<TheFormBaseInput id="itemName" modelValue="" type="text" />
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="qty"
							modelValue="0"
							type="number"
						/>
					</td>
					<td>
						<TheFormBaseInput
							class="number-input"
							id="price"
							modelValue="0"
							type="number"
						/>
					</td>
					<td>{{ 0 }}</td>
					<td><IconDelete /></td>
				</tr>
			</tbody>
		</table>
		<ButtonAdd />
	</div>
</template>

<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import IconDelete from "../icons/IconDelete.vue";
	import ButtonAdd from "../buttons/ButtonAdd.vue";
</script>
<style lang="scss">
	table {
		width: 100%;
	}
</style>
