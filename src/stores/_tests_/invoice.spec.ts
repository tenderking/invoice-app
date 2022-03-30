import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useInvoiceStore } from "@/stores/invoice";

describe("invoice store", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it("loads the data", () => {
		const { invoices } = useInvoiceStore();
		expect(invoices.length).toBeGreaterThan(0);
	});

	it("filter by all", () => {
		const { filteredInvoice, invoices } = useInvoiceStore();
		expect(filteredInvoice).toEqual(invoices);
	});

	it("should have status of paid", () => {
		const { setStatus, status } = useInvoiceStore();
		setStatus("paid");
		expect(status).toEqual(["paid"]);
	});

	it("should have status of paid and draft", () => {
		const { setStatus, status } = useInvoiceStore();
		setStatus("paid");
		setStatus("draft");
		expect(status).toEqual(["paid", "draft"]);
		expect(status.length).toBe(2);
	});

	it("filter by paid", () => {
		const store = useInvoiceStore();
		store.setStatus("paid");

		expect(store.filteredInvoice.length).toBe(2);
	});

	it("filter by paid and draft", () => {
		const store = useInvoiceStore();
		store.setStatus("draft");
		store.setStatus("paid");
		// console.log("status array", store.filteredInvoice);

		expect(store.filteredInvoice.length).toBe(3);
	});

	it("filter by pending,paid and draft", () => {
		const store = useInvoiceStore();
		store.setStatus("draft");
		store.setStatus("paid");
		store.setStatus("pending");
		// console.log("status array", store.filteredInvoice);

		expect(store.filteredInvoice).toEqual(store.invoices);
	});

	it("should return color for paid status", () => {
		const { statusColor } = useInvoiceStore();
	});
});
