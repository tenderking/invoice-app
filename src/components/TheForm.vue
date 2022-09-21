<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import TheFormDatePicker from "./TheFormDatePicker.vue";
	import TheFormSelect from "./TheFormSelect.vue";
	import TheFormItemList from "./TheFormItemList.vue";
	import TheFormNewInvoiceButtonsVue from "./TheFormNewInvoiceButtons.vue";
	import TheFormEditInvoiceButtonsVue from "./TheFormEditInvoiceButtons.vue";
	// import { useInvoiceStore } from "@/stores/invoiceStore";
	// 	import { shallowRef, computed } from "vue";
	import { useFormStore } from "@/stores/formStore";	
	const store = useFormStore();
	const props = defineProps({
		mode: {
			type: Boolean,
			required: true,
		},
		id: {
			type: String,
		},
	});
</script>
<template>
	<div class="form-modal">
		<div class="form-container">
			<h2 class="pb-2">
				{{ props.mode ? "Edit invoice" : "New Invoice" }}
			</h2>
			<form action="Get" @submit.prevent="">
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
				<component
					:is="
						mode ? TheFormEditInvoiceButtonsVue : TheFormNewInvoiceButtonsVue
					"
				></component>
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
		outline: solid;
		max-height: 100vh;
		width: 100vw;
		background-color: var(--overlay);
		z-index: 10;

		// inset: -100vh auto 0 auto;
		padding-top: 3rem;
		.form-container {
			background-color: var(--color-background-mute);

			padding: 4.667rem;
			border-radius: 0 2rem;
			z-index: 10;

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
	@media screen and (min-width: $sz-tablet) {
		.form-modal {
			left: -15px;
			padding-top: 0;
			padding-left: 6rem;
			.form-container {
				width: 60vw;

				border-radius: 0 2rem 2rem 0;
			}
		}
	}
</style>
