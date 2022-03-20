import { defineStore } from "pinia";
import data from "./data.json";

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => ({
		invoices: data,
		status: [] as string[],
	}),
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
	},
	getters: {
		// TODO:
		// get the state invoices
		// get item total = qty*item_price
		// get the total amount depending on the items
		// filtered invoice'
		//[draft,paid]
		filteredInvoice: (state) => {
			if (state.status.length === 0) {
				return state.invoices;
			} else {
				return state.invoices.filter((item) =>
					state.status.some((val) => item.status === val)
				);
			}
		},
	},
});
