import type { MyObj } from "@/utils/model";
import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      count: 0,
      isShowForm: false,
			newItem: {
				name: "",
				quantity: 0,
				price: 0,
				total: 0,
			},
      payload: {id: "",
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
    }
  },

  actions: {
  
    onSubmit() {
			this.updateInvoice(this.payload);
			this.payload.status = "pending";
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
    discardForm() {
			this.isShowForm = false;
			this.isViewInvoice = false;
			this.payload = { ...this.initPayload };
		},
		openForm() {
			this.payload = { ...this.initPayload };
			this.isShowForm = true;
    },
    addItem() {
			this.payload.items.push({ ...this.newItem });
		},
		deleteItem(index: number) {
			this.payload.items.splice(index);
		},
	
  },

  getters: {
    getTotals: (state) => {
      state.payload.items.forEach(
        (item) => (item.total = item.price * item.quantity)
      );
      state.payload.total = state.payload.items.reduce((acu, obj) => {
        return acu + obj.total;
      }, 0);
		},
		getPayload: (state) => {
			state.payload = state.initPayload
			
		}
	
  }
})