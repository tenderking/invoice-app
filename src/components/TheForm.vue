<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import TheFormDatePicker from "./TheFormDatePicker.vue";
	import TheFormSelect from "./TheFormSelect.vue";
	import TheFormItemList from "./TheFormItemList.vue";
	import TheFormNewInvoiceButtonsVue from "./TheFormNewInvoiceButtons.vue";
	import TheFormEditInvoiceButtonsVue from "./TheFormEditInvoiceButtons.vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	// 	import { shallowRef, computed } from "vue";
	import { useFormStore } from "@/stores/formStore";
	import type EditInvoiceVue from "@/views/EditInvoice.vue";
	import { computed } from "vue";
	const store = useInvoiceStore();
	const props = defineProps({
		isEditMode: {
			type: Boolean,
			required: true,
		},
		id: {
			type: String,
		},
	});

	const editInvoice = computed(() => {
		const matchingInvoice = store.getInvoices.find(
			(invoice) => invoice.id === props.id
		);
		// we destructure so thats changes to editPayload wont change our invoices[id] state
		if (matchingInvoice) {
			return matchingInvoice;
		} else {
			return {
				id: "",
				createdAt: "",
				paymentDue: "",
				description: "",
				paymentTerms: 1,
				clientName: "",
				clientEmail: "",
				status: "",
				senderAddress: {
					street: "",
					city: "",
					postCode: "",
					country: "",
				},
				clientAddress: {
					street: "",
					city: "",
					postCode: "",
					country: "",
				},
				items: [
					{
						name: "",
						quantity: 0,
						price: 0,
						total: 0,
					},
				],
				total: 0,
			};
		}
	});
</script>
<template>
	<div class="form-modal">
		<div class="form-container">
			<h2 class="pb-2">
				{{ props.isEditMode ? "Edit invoice" : "New Invoice" }}
			</h2>
			<form action="Get" @submit.prevent="">
				<h4 class="primary pb-1">Bill From</h4>
				<TheFormBaseInput
					id="adress"
					:modelValue="editInvoice.senderAddress.street"
					label="Street Adress"
				/>

				<div class="form-adress pb-1">
					<TheFormBaseInput
						id="city"
						:modelValue="editInvoice.senderAddress.city"
						label="City"
					/>

					<TheFormBaseInput
						id="postCode"
						:modelValue="editInvoice.senderAddress.postCode"
						label="Post Code"
					/>

					<TheFormBaseInput
						id="country"
						:modelValue="editInvoice.senderAddress.country"
						label="Country"
					/>
				</div>
				<h4 class="primary pb-1">Bill To</h4>
				<TheFormBaseInput
					id="name"
					:modelValue="editInvoice.clientName"
					label="Client's Name"
				/>

				<TheFormBaseInput
					id="email"
					:modelValue="editInvoice.clientEmail"
					type="email"
					label="Client's Email"
				/>

				<TheFormBaseInput
					id="adress"
					:modelValue="editInvoice.clientAddress.street"
					label="Street Adress"
				/>

				<div class="form-adress">
					<TheFormBaseInput
						id="city"
						:modelValue="editInvoice.clientAddress.city"
						label="City"
					/>

					<TheFormBaseInput
						id="postCode"
						:modelValue="editInvoice.clientAddress.postCode"
						label="Post Code"
					/>

					<TheFormBaseInput
						id="country"
						:modelValue="editInvoice.clientAddress.country"
						label="Country"
					/>
				</div>
				<div class="form-adress">
					<!-- TODO: -->
					<TheFormDatePicker />
					<TheFormSelect />
				</div>
				<TheFormBaseInput
					id="description"
					:modelValue="editInvoice.description"
					label="Project Description"
				/>

				<TheFormItemList :modelValue="editInvoice.items" />
				<component
					:is="
						isEditMode
							? TheFormEditInvoiceButtonsVue
							: TheFormNewInvoiceButtonsVue
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

		// max-height: 100vh;
		min-height: 100vh;
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

			// height: 100vh;
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
