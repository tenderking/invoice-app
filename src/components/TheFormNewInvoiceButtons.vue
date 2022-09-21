<script lang="ts" setup>
	import ButtonBase from "./ButtonBase.vue";
	import { useInvoiceStore } from "@/stores/invoiceStore";
	const store = useInvoiceStore();
</script>
<template>
	<div class="form-btns">
		<ButtonBase class="discard-btn" type="reset" @click="store.discardForm()"
			>Discard</ButtonBase
		>
		<ButtonBase class="draft-btn" @click="store.onSubmitDraft()">
			Save as Draft</ButtonBase
		>
		<ButtonBase class="send-btn" @click="store.onSubmit()">
			Save & Send</ButtonBase
		>
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
