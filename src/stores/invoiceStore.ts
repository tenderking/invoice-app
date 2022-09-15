import { defineStore } from "pinia";
import type { MyObj } from "../utils/model";
import data from "../utils/data.json";

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => {
		return {
			invoices: data,
			status: [] as string[],
			invoiceId: "RG0314",
			isViewInvoice: false,		
			itemTotal: 0,		
		};
	},

	actions: {
		
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
	},
});
