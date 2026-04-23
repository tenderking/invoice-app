import { defineStore } from "pinia";
import type { Invoice } from "../types/Invoice";
import data from "../data/data.json";

const STORAGE_KEY = "invoice-app-invoices";

function loadInvoices(): Invoice[] {
	if (typeof window === "undefined") {
		return data as Invoice[];
	}

	try {
		const storedInvoices = window.localStorage.getItem(STORAGE_KEY);
		if (!storedInvoices) {
			return data as Invoice[];
		}

		const parsedInvoices = JSON.parse(storedInvoices);
		if (Array.isArray(parsedInvoices)) {
			return parsedInvoices as Invoice[];
		}
	} catch {
		return data as Invoice[];
	}

	return data as Invoice[];
}

function calculateInvoiceTotals(invoice: Invoice): Invoice {
	const items = invoice.items.map((item) => {
		const quantity = Number(item.quantity) || 0;
		const price = Number(item.price) || 0;

		return {
			...item,
			quantity,
			price,
			total: quantity * price,
		};
	});

	const total = items.reduce((accumulator, item) => accumulator + item.total, 0);

	return {
		...invoice,
		items,
		total,
	};
}

export const useInvoiceStore = defineStore({
	id: "invoice",
	state: () => {
		return {
			invoices: loadInvoices(),
			status: [] as string[],
			invoiceId: "RG0314",
			isViewInvoice: false,		
			itemTotal: 0,		
		};
	},

	actions: {
		persistInvoices() {
			if (typeof window === "undefined") {
				return;
			}
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.invoices));
		},
		
		setStatus(val: string) {
			this.status.push(val);
		},
		setStatusAsPaid(id: string) {
			const invoice = this.invoices.find((item) => item.id === id);
			if (!invoice) {
				return;
			}

			invoice.status = "paid";
			this.persistInvoices();
		},
		addInvoice(invoice: Invoice) {
			const normalizedInvoice = calculateInvoiceTotals(invoice);
			this.invoices.push(normalizedInvoice);
			this.persistInvoices();
		},
		updateInvoice(invoice: Invoice) {
			const invoiceIndex = this.invoices.findIndex((item) => item.id === invoice.id);
			if (invoiceIndex === -1) {
				return;
			}

			this.invoices[invoiceIndex] = calculateInvoiceTotals(invoice);
			this.persistInvoices();
		},
		deleteInvoice(id: string) {
			this.invoices = this.invoices.filter((invoice) => invoice.id !== id);
			this.persistInvoices();
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
