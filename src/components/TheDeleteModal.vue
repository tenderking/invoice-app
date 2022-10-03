<template>
  <dialog ref="dialog">
    <h2>Are you sure you want to Delete</h2>
    <button>Cancel</button>
    <button>Delete</button>
  </dialog>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const dialog = ref<HTMLDialogElement | null>(null);
onMounted(() => {
  dialog.value?.showModal();
});
</script>
