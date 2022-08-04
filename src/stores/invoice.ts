import { defineStore } from "pinia";
import InvoiceList from "../components/InvoiceList.vue";
import ViewInvoice from "../components/ViewInvoice.vue";
import data from "./data.json";

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => {
		return {
			invoices: data,
			status: [] as string[],
			invoiceId: "RG0314",
			viewInvoice: false,
			formOpen: false,
			component: InvoiceList,
		};
	},

	actions: {
		// TODO:
		// -[]Push a new item to the state item  array (add item)
		// -[]Push a new invoice to the state invoice array  (save and send)
		// -[]Push a new draft to the state draft array
		// -[]remove an item from the state item array
		// -[]remove an invoice from draft (discard)
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
	},

	getters: {
		// TODO:
		// get the state invoices
		// get item total = qty*item_price
		// get the total amount depending on the items
		// filtered invoice'
		//[draft,paid]

		getInvoice: (state) => {
			return state.invoices.find((invoice) => invoice.id === state.invoiceId);
		},

		filteredInvoice: (state) => {
			if (state.status.length === 0) {
				return state.invoices;
			} else {
				return state.invoices.filter((item) =>
					state.status.some((val) => item.status === val)
				);
			}
		},

		current: (state) => {
			if (state.viewInvoice) return (state.component = ViewInvoice);
			if (!state.viewInvoice) return (state.component = InvoiceList);
		},
	},
});
