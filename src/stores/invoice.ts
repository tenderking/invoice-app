import { defineStore } from "pinia";
import InvoiceList from "../components/InvoiceList.vue";
import ViewInvoice from "../components/ViewInvoice.vue";
import TheFormNewInvoiceButtons from "@/components/forms/TheFormNewInvoiceButtons.vue";
import TheFormEditInvoiceButtons from "@/components/forms/TheFormEditInvoiceButtons.vue";
import type { MyObj } from "./model";
import data from "./data.json";
const randomID = () => {
	return (
		String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
		String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
		Math.floor(1000 + Math.random() * 9000)
	);
};
const days = 10;
const createdAt = new Date(Date.now());
const calcDate = new Date();
const dueDate = new Date(calcDate.setDate(createdAt.getDate() + days));

console.log("DUE: ", dueDate.toISOString().slice(0, 10));

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => {
		return {
			invoices: data,
			status: [] as string[],
			invoiceId: "RG0314",
			viewInvoice: false,
			formOpen: false,
			editMode: false,
			itemTotal: 0,
			editPayload: {} as MyObj,
			initPayload: {
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
			},
			payload: {
				id: randomID(),
				createdAt: createdAt.toISOString().slice(0, 10),
				paymentDue: dueDate.toISOString().slice(0, 10),
				description: "Re-branding",
				paymentTerms: 1,
				clientName: "Jensen Huang",
				clientEmail: "jensenh@mail.com",
				status: "paid",
				senderAddress: {
					street: "19 Union Terrace",
					city: "London",
					postCode: "E1 3EZ",
					country: "United Kingdom",
				},
				clientAddress: {
					street: "106 Kendell Street",
					city: "Sharrington",
					postCode: "NR24 5WQ",
					country: "United Kingdom",
				},
				items: [
					{
						name: "Brand Guidelines",
						quantity: 1,
						price: 1800.9,
						total: 0,
					},
					{
						name: "Brand",
						quantity: 2,
						price: 1000,
						total: 0,
					},
				],
				total: 0,
			},
		};
	},

	actions: {
		// TODO:
		// -[]Push a new item to the state item  array (add item)
		// -[]Push a new invoice to the state invoice array  (save and send)
		// -[]Push a new draft to the state draft array
		// -[]remove an item from the state item array
		// -[]remove an invoice from draft (discard)

		onSubmit() {
			// this fucnction submits a new invoice from form to invoice list
			// it also calculates totals within items and total of all items
			// closes form and applies status as "pending"

			this.updateInvoice(this.payload);
			this.payload.items.forEach(
				(item) => (item.total = item.price * item.quantity)
			);
			this.payload.total = this.payload.items.reduce((acu, obj) => {
				return acu + obj.total;
			}, 0);
			this.formOpen = false;
			this.payload.status = "pending";
		},
		// -[]update draft fields
		setStatus(val: string) {
			this.status.push(val);
		},

		viewById(val: string) {
			this.invoiceId = val;
			this.viewInvoice = true;
		},

		openForm() {
			// const formModal = document.querySelector<HTMLElement>("form-modal")!;
			// formModal.style.display = "block";
			this.formOpen = true;
		},
		editForm(id: string) {
			// const formModal = document.querySelector<HTMLElement>("form-modal")!;
			// formModal.style.display = "block";
			this.formOpen = true;
			this.editMode = true;
			this.editPayload = this.invoices.find((invoice) => invoice.id === id)!;
		},
		updateInvoice(payload: any) {
			this.invoices.push(payload);
		},
	},

	getters: {
		// TODO:
		// get the state invoices

		getFormPayload: (state) => {
			return state.editMode ? state.editPayload : state.initPayload
		},
		getInvoice: (state) => {
			return state.invoices.find((invoice) => invoice.id === state.invoiceId);
		},

		filteredInvoice: (state) => {
			//function that returns either all invoices or a list filtered by status
			if (state.status.length === 0) {
				return state.invoices;
			} else {
				return state.invoices.filter((item) =>
					state.status.some((val) => item.status === val)
				);
			}
		},

		current: (state) => {
			if (state.viewInvoice) return ViewInvoice;
			if (!state.viewInvoice) return InvoiceList;
		},
		isEditMode: (state) => {
			if (state.editMode) return TheFormEditInvoiceButtons;
			if (!state.editMode) return TheFormNewInvoiceButtons;
		},
	},
});
