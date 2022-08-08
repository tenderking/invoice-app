<template>
	<div class="form pb-1">
		<div class="form-label pb-1">
			<label v-if="label" :for="id" class="form-label">
				{{ label }}
			</label>
		</div>
		<input
			:id="id"
			:type="type"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			class="form-input br-4 p-16"
			required
		/>
	</div>
</template>
<script setup lang="ts">
	defineProps({
		id: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
		modelValue: {
			type: [String, Number],
			default: "",
		},
		type: {
			type: String,
			default: "text",
		},
	});
	defineEmits(["update:modelValue"]);
</script>
<style lang="scss" scoped>
	.form {
		&-label {
			color: var(--color-text-soft);
		}
		&-input {
			background-color: var(--color-bg);
			border: 2px solid var(--color-form-border);
			color: var(--color-text);
			font-weight: bold;
			font-size: $fs-h4;
			line-height: $font-h4-lh;
			width: 100%;
		}
	}
</style>
