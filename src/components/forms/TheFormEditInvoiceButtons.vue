<script lang="ts" setup>
	import ButtonBase from "../buttons/ButtonBase.vue";
</script>
<template>
	<div class="form-btns">
		<ButtonBase class="cancel-btn">Cancel</ButtonBase>
		<ButtonBase class="save-btn"> Save Changes</ButtonBase>
	</div>
</template>
<style lang="scss" scoped>
	.form-btns {
		display: flex;
		padding-block: 2rem;
		justify-content: flex-end;
		gap: 1rem;
		.cancel-btn {
			--button-color: var(--color-btn-light-text);
			--button-bg: var(--color-btn-light-bg);
			--hover-bg: var(--color-btn-hover-bg);
			--hover-color: var(--neutral-100);
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
