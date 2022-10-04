
import ViewInvoice  from '@/views/ViewInvoice.vue';
import { createRouter, createWebHistory } from "vue-router"
import InvoiceList from "@/views/InvoiceList.vue";
import CreateInvoice from "@/views/CreateInvoice.vue"
import EditInvoice from "@/views/EditInvoice.vue"


const routes = [



  {
    path: '/', name: 'Invoices', component: InvoiceList,

    children: [
      { path: '/invoices/create', name: 'InvoicesCreate', component: CreateInvoice }
    ],
  },


  {
    path: '/invoices/:id', name: 'InvoicesShow', component: ViewInvoice,
    children: [
            { path: '/invoices/:id/edit', name: 'InvoicesEdit', component: EditInvoice },
    ]


  },

  
]

const router = createRouter({
  
  history: createWebHistory(),

  routes

})

export default router