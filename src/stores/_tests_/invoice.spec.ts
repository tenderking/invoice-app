import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useInvoiceStore } from "@/stores/invoiceStore";
import type { Invoice } from "@/types/Invoice";

const STORAGE_KEY = "invoice-app-invoices";

const buildInvoice = (id: string, status: "draft" | "pending" | "paid" = "draft"): Invoice => ({
	id,
	createdAt: "2026-04-23",
	paymentDue: "2026-04-30",
	description: "Test invoice",
	paymentTerms: 7,
	clientName: "Test Client",
	clientEmail: "test@example.com",
	status,
	senderAddress: {
		street: "1 Test Street",
		city: "Test City",
		postCode: "T35 7AA",
		country: "Testland",
	},
	clientAddress: {
		street: "2 Client Street",
		city: "Client City",
		postCode: "C11 3NT",
		country: "Clientland",
	},
	items: [
		{
			name: "Design",
			quantity: 2,
			price: 150,
			total: 0,
		},
	],
	total: 0,
});

describe("invoice store", () => {
	beforeEach(() => {
		const storage: Record<string, string> = {};
		Object.defineProperty(globalThis, "localStorage", {
			value: {
				getItem: (key: string) => storage[key] ?? null,
				setItem: (key: string, value: string) => {
					storage[key] = value;
				},
				removeItem: (key: string) => {
					delete storage[key];
				},
				clear: () => {
					Object.keys(storage).forEach((key) => delete storage[key]);
				},
			},
			configurable: true,
		});

		globalThis.localStorage.clear();
		setActivePinia(createPinia());
	});

	it("loads the data", () => {
		const { invoices } = useInvoiceStore();
		expect(invoices.length).toBeGreaterThan(0);
	});

	it("loads invoices from localStorage when present", () => {
		const storedInvoices = [buildInvoice("LS1000", "draft")];
		localStorage.setItem(STORAGE_KEY, JSON.stringify(storedInvoices));

		const store = useInvoiceStore();

		expect(store.invoices).toHaveLength(1);
		expect(store.invoices[0].id).toBe("LS1000");
	});

	it("adds invoice, recalculates totals, and persists", () => {
		const store = useInvoiceStore();
		const invoice = buildInvoice("NEW1000", "draft");

		store.addInvoice(invoice);

		const addedInvoice = store.invoices.find((item) => item.id === "NEW1000");
		expect(addedInvoice).toBeDefined();
		expect(addedInvoice?.items[0].total).toBe(300);
		expect(addedInvoice?.total).toBe(300);

		const persistedInvoices = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]",
		) as Invoice[];
		expect(persistedInvoices.some((item) => item.id === "NEW1000")).toBe(true);
	});

	it("updates invoice and persists changes", () => {
		const store = useInvoiceStore();
		const existingInvoice = store.invoices[0];
		const updatedInvoice: Invoice = {
			...existingInvoice,
			description: "Updated description",
			items: [
				{
					name: "Dev work",
					quantity: 3,
					price: 200,
					total: 0,
				},
			],
		};

		store.updateInvoice(updatedInvoice);

		const savedInvoice = store.invoices.find((item) => item.id === existingInvoice.id);
		expect(savedInvoice?.description).toBe("Updated description");
		expect(savedInvoice?.items[0].total).toBe(600);
		expect(savedInvoice?.total).toBe(600);

		const persistedInvoices = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]",
		) as Invoice[];
		const persistedInvoice = persistedInvoices.find((item) => item.id === existingInvoice.id);
		expect(persistedInvoice?.description).toBe("Updated description");
	});

	it("marks invoice as paid and persists", () => {
		const store = useInvoiceStore();
		const targetInvoice = store.invoices.find((item) => item.status !== "paid") || store.invoices[0];

		store.setStatusAsPaid(targetInvoice.id);

		expect(store.invoices.find((item) => item.id === targetInvoice.id)?.status).toBe("paid");

		const persistedInvoices = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]",
		) as Invoice[];
		expect(persistedInvoices.find((item) => item.id === targetInvoice.id)?.status).toBe("paid");
	});

	it("deletes invoice and persists", () => {
		const store = useInvoiceStore();
		const targetId = store.invoices[0].id;

		store.deleteInvoice(targetId);

		expect(store.invoices.some((item) => item.id === targetId)).toBe(false);

		const persistedInvoices = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]",
		) as Invoice[];
		expect(persistedInvoices.some((item) => item.id === targetId)).toBe(false);
	});

});
