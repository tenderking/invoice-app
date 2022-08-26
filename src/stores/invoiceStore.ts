import { defineStore } from "pinia";
import type { MyObj } from "../utils/model";
import data from "../utils/data.json";

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

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => {
		return {
			invoices: data,
			status: [] as string[],
			invoiceId: "RG0314",
			isViewInvoice: false,
			isShowForm: false,
			isEditMode: false,
			itemTotal: 0,
			newItem: {
				name: "",
				quantity: 0,
				price: 0,
				total: 0,
			},
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
			payload: {} as MyObj,
		};
	},

	actions: {
		// TODO:
		// -[]Push a new draft to the state draft array
		// -[]remove an invoice from draft (discard)

		onSubmit() {
			this.updateInvoice(this.payload);
			this.isShowForm = false;
			this.payload.status = "pending";
		},

		onUpdateForm() {
			this.invoices.filter((invoice) => (invoice.id = this.invoiceId));
			this.payload.id = randomID();
			this.isShowForm = false;
			this.payload.status = "pending";
			this.updateInvoice(this.payload);
			console.log("updated form");
		},
		onSubmitDraft() {
			console.log("submitted form");
		},
		setStatus(val: string) {
			this.status.push(val);
		},
		setStatusAsPaid(id: string) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			this.invoices.find((invoice) => invoice.id === id)!.status = "paid";
		},
		viewById(val: string) {
			this.invoiceId = val;
			this.isViewInvoice = true;
		},
		discardForm() {
			this.isShowForm = false;
			this.isViewInvoice = false;
			this.payload = { ...this.initPayload };
		},
		openForm() {
			this.payload = { ...this.initPayload };
			this.isShowForm = true;
		},
		editForm(id: string) {
			this.isEditMode = true;
			const matchingInvoice = this.invoices.find(
				(invoice) => invoice.id === id
			);
			// we destructure so thats changes to editPayload wont change our invoices[id] state
			if (matchingInvoice) this.payload = { ...matchingInvoice };
			this.isShowForm = true;
		},

		addItem() {
			this.payload.items.push({ ...this.newItem });
		},
		deleteItem(index: number) {
			this.payload.items.splice(index);
		},
		updateInvoice(payload: MyObj) {
			this.invoices.push(payload);
		},
	},

	getters: {
		getSelectedInvoice: (state) => {
			if (state.invoices)
				return state.invoices.find((invoice) => invoice.id === state.invoiceId);
		},

		getInvoices: (state) => {
			const filteredInvoices = state.invoices.filter((item) =>
				state.status.some((val) => item.status === val)
			);
			if (state.status.length === 0) {
				return state.invoices;
			} else {
				return filteredInvoices;
			}
		},
		getTotals: (state) => {
			state.payload.items.forEach(
				(item) => (item.total = item.price * item.quantity)
			);
			state.payload.total = state.payload.items.reduce((acu, obj) => {
				return acu + obj.total;
			}, 0);
		},


	},
});
