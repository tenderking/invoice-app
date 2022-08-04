<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import TheFormDatePicker from "./TheFormDatePicker.vue";
	import TheFormSelect from "./TheFormSelect.vue";
	import TheFormItemList from "./TheFormItemList.vue";
	import { useInvoiceStore } from "@/stores/invoice";

	const store = useInvoiceStore;
</script>
<template>
	<div class="form-modal">
		<div class="form-container">
			<h2 class="pb-2">
				<!-- TODO:  {{ title }} -->
				New Invoice
			</h2>
			<form action="Get">
				<h4 class="primary pb-1">Bill From</h4>
				<TheFormBaseInput id="adress" label="Street Adress" />
				<div class="form-adress pb-1">
					<TheFormBaseInput id="city" label="City" />
					<TheFormBaseInput id="postCode" label="Post Code" />
					<TheFormBaseInput id="country" label="Country" />
				</div>
				<h4 class="primary pb-1">Bill To</h4>
				<TheFormBaseInput id="name" label="Client's Name" />
				<TheFormBaseInput id="email" type="email" label="Client's Email" />
				<TheFormBaseInput id="adress" label="Street Adress" />
				<div class="form-adress">
					<TheFormBaseInput id="city" label="City" />
					<TheFormBaseInput id="postCode" label="Post Code" />
					<TheFormBaseInput id="country" label="Country" />
				</div>
				<div class="form-adress">
					<!-- TODO: -->
					<TheFormDatePicker />
					<TheFormSelect />
				</div>
				<TheFormBaseInput id="description" label="Project Description" />
				<TheFormItemList />
			</form>
		</div>
	</div>
</template>
<style lang="scss">
	.form-closed {
		display: none;
	}

	.form-modal {
		position: absolute;

		width: 100%;
		height: 100vh;

		background-color: rgba(240, 255, 255, 0.496);
		z-index: 999;

		.form-container {
			/* TODO: position: absolute;*/
			position: absolute;
			background-color: var(--color-background-mute);
			inset: 0 auto auto 0;
			padding: 4.667rem;
			border-radius: 0 2rem;

			height: 100vh;
			overflow-y: auto;

			.form-adress {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				gap: 2rem;
				max-width: 100%;
				margin: auto;
				> * {
					flex: 1 1 auto;
				}
			}
		}
	}
</style>
