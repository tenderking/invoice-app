<script setup lang="ts">
	import TheFormBaseInput from "./TheFormBaseInput.vue";
	import TheFormDatePicker from "./TheFormDatePicker.vue";
	import TheFormSelect from "./TheFormSelect.vue";
	import TheFormItemList from "./TheFormItemList.vue";
	import NewInvoiceButtons from "./TheFormNewInvoiceButtons.vue";
	import EditInvoiceButtons from "./TheFormEditInvoiceButtons.vue";
	import { reactive, computed } from "vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	import type { Item, Invoice } from "@/types/Invoice";
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

	const editPayload = reactive({
		...store.getInvoices.find((invoice) => invoice.id === props.id),
	} as Invoice);

	const initPayload = reactive({
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
		items: [] as Item[],
		total: 0,
	});
	const payload = computed(() => {
		if (props.isEditMode) {
			if (editPayload) {
				return editPayload;
			}
		}
		return initPayload;
	});

	function addItem() {
		console.log("adding item");
		if (props.isEditMode) {
			editPayload.items.push({
				name: "",
				quantity: 0,
				price: 0,
				total: 0,
			});
			return;
		}
		initPayload.items.push({
			name: "",
			quantity: 0,
			price: 0,
			total: 0,
		});
	}
	const deleteItem = (index: number) => {
		console.log("this is number", index);
		if (props.isEditMode) {
			editPayload.items.splice(index, 1);
			return;
		}
		initPayload.items.splice(index, 1);
	};

	function handleSubmit() {
		// store.$patch((state) => {
		//   state.invoices.push(initPayload);
		// });
		//
		console.log("submit: ", initPayload);
	}
	function handleSubmitDraft() {
		// store.invoices.push(initPayload);
		console.log("draft: ", initPayload);
		//
	}
	function handleChanges() {
		// store.invoices.push(editPayload);
		console.log("edited:", initPayload);
		//
	}
	// TODO:
	// editmode and newmode payload
	//  --newmode : reactive object that we can apply some changes
	//  --editmode : reactive object too.
	// validate before submitting
</script>
<template>
	<div class="form-modal">
		<div class="form-container">
			<h2 class="pb-2">
				{{ props.isEditMode ? "Edit invoice" : "New Invoice" }}
			</h2>
			<form
				action="Get"
				@submit.prevent="handleSubmit || handleSubmitDraft || handleChanges"
			>
				<h4 class="primary pb-1">Bill From</h4>
				<TheFormBaseInput
					v-model:modelValue="payload.senderAddress.street"
					id="adress"
					label="Street Adress"
				/>

				<div class="form-adress pb-1">
					<TheFormBaseInput
						v-model:modelValue="payload.senderAddress.city"
						id="city"
						label="City"
					/>

					<TheFormBaseInput
						v-model:modelValue="payload.senderAddress.postCode"
						id="postCode"
						label="Post Code"
					/>

					<TheFormBaseInput
						v-model:modelValue="payload.senderAddress.country"
						id="country"
						label="Country"
					/>
				</div>
				<h4 class="primary pb-1">Bill To</h4>
				<TheFormBaseInput
					v-model:modelValue="payload.clientName"
					id="name"
					label="Client's Name"
				/>

				<TheFormBaseInput
					v-model:modelValue="payload.clientEmail"
					id="email"
					type="email"
					label="Client's Email"
				/>

				<TheFormBaseInput
					v-model:modelValue="payload.clientAddress.street"
					id="adress"
					label="Street Adress"
				/>

				<div class="form-adress">
					<TheFormBaseInput
						v-model:modelValue="payload.clientAddress.city"
						id="city"
						label="City"
					/>

					<TheFormBaseInput
						v-model:modelValue="payload.clientAddress.postCode"
						id="postCode"
						label="Post Code"
					/>

					<TheFormBaseInput
						v-model:modelValue="payload.clientAddress.country"
						id="country"
						label="Country"
					/>
				</div>
				<div class="form-adress">
					<!-- TODO: -->
					<TheFormDatePicker />
					<TheFormSelect />
				</div>
				<TheFormBaseInput
					v-model:modelValue="payload.description"
					id="description"
					label="Project Description"
				/>

				<TheFormItemList
					v-model:modelValue="payload.items"
					:addItemFun="addItem"
					:deleteItemFun="deleteItem"
				/>
				<component
					:is="isEditMode ? EditInvoiceButtons : NewInvoiceButtons"
					:handleSubmit="handleSubmit"
					:handleChange="handleChanges"
					:handleSubmitDraft="handleSubmitDraft"
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
