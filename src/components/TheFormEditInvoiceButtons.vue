<script lang="ts" setup>
import ButtonBase from "./ButtonBase.vue";
import ButtonCancel from "./ButtonCancel.vue";

defineProps({
  handleChanges: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <div class="form-btns">
    <router-link to="/">
      <ButtonCancel class="cancel-btn">Cancel</ButtonCancel>
    </router-link>
    <router-link to="/">
      <ButtonBase type="submit" @submit="handleChanges" class="save-btn">
        Save Changes</ButtonBase
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
  .cancel-btn {
    padding-block: 1rem;
  }
  .save-btn {
    --button-color: var(--neutral-100);
    --button-bg: var(--primary-60);
    --hover-bg: var(--primary-70);

    padding-block: 1rem;
  }
}
</style>
