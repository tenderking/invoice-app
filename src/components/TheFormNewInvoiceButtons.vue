<script lang="ts" setup>
import ButtonBase from "./ButtonBase.vue";
defineProps({
  handleSubmit: {
    type: Function,
    required: true,
  },
  handleSubmitDraft: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <div class="form-btns">
    <router-link to="/">
      <ButtonBase class="discard-btn" type="reset">Discard</ButtonBase>
    </router-link>
    <router-link to="/">
      <ButtonBase @submit="handleSubmit()" class="draft-btn">
        Save as Draft</ButtonBase
      >
    </router-link>
    <router-link to="/">
      <ButtonBase @submit="handleSubmit()" class="send-btn">
        Save & Send</ButtonBase
      >
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.form-btns {
  display: flex;
  padding-block: 2rem;
  justify-content: flex-end;
  gap: 1rem;
  .discard-btn {
    --button-color: var(--color-btn-light-text);
    --button-bg: var(--color-btn-light-bg);
    --hover-bg: var(--color-btn-hover-bg);
    --hover-color: var(--neutral-100);
    padding-block: 1rem;
    margin-right: auto;
  }
  .send-btn {
    --button-color: var(--neutral-100);
    --button-bg: var(--primary-60);
    --hover-bg: var(--primary-70);
    padding-block: 1rem;
  }
  .draft-btn {
    --button-color: var(--color-text-soft);
    --button-bg: var(--color-background-misc);
    --hover-bg: var(--color-btn-hover-bg);
    --hover-color: var(--neutral-100);
    padding-block: 1rem;
  }
}
</style>
