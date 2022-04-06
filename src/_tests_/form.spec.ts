import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useInvoiceStore } from "@/stores/invoice";
const store = useInvoiceStore();
describe("invoice store", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it("should not submit when empty", () => {});

	it("should not submit when empty", () => {});
});
