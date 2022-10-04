<template>
	<dialog ref="dialog">
		<div class="modal__container">
			<h2>Confirm Deletion</h2>
			<p>
				Are you sure you want to delete invoice #{{ id }} This action cannot be
				undone.
			</p>
			<div class="flex-flow-2">
				<ButtonCancel @click="closeModal">Cancel</ButtonCancel>
				<ButtonDelete>Delete</ButtonDelete>
			</div>
		</div>
	</dialog>
</template>
<script lang="ts" setup>
	import { onMounted, ref } from "vue";
	import ButtonCancel from "./ButtonCancel.vue";
	import ButtonDelete from "./ButtonDelete.vue";

	const closeModal = () => emits("update:isShowModal", !props.isShowModal);
	const props = defineProps({
		isShowModal: {
			type: Boolean,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	});
	const emits = defineEmits(["update:isShowModal"]);
	const dialog = ref<HTMLDialogElement | null>(null);
	onMounted(() => {
		dialog.value?.showModal();
	});
</script>
<style lang="scss">
	dialog {
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
		outline: none;
		border: none;

		background-color: var(--overlay);
		.modal__container {
			background-color: var(--color-background);

			box-shadow: $shadow-invoice;
			color: var(--color-text);
			padding: $pd-mb-modal;
			border-radius: $radius-invoice;
			width: fit-content;
			margin: auto;
			h2 {
				padding-bottom: $pd-mb-modal;
			}
			p {
				color: var(--color-text-soft);
				padding-bottom: $pd-mb-modal;
				max-width: 40ch;
			}
		}
	}
</style>
