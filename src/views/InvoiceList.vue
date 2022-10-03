<template>
  <div class="invoice-list">
    <div class="wrapper-1">
      <InvoicesListNav />
    </div>
    <template v-if="store.getInvoices.length">
      <template v-for="item in store.getInvoices" :key="item">
        <InvoicesListItem :item="item" />
      </template>
    </template>
    <div class="invoice-empty" v-else>
      <img :src="illustrationEmpty" alt="no invoices" />
    </div>
  </div>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { useInvoiceStore } from "@/stores/invoiceStore";
import InvoicesListItem from "@/components/InvoicesListItem.vue";
import InvoicesListNav from "@/components/InvoicesListNav.vue";

import illustrationEmpty from "@/assets/illustration-empty.svg";
const store = useInvoiceStore();
</script>
<style lang="scss">
.invoice-list {
  max-width: fit-content;
  margin: auto;
  .invoice-empty {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
}
</style>
