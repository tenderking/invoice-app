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
			@input="onInput"
			class="form-input br-4 p-1"
		/>
	</div>
</template>
<script setup lang="ts">
	const props = defineProps({
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
	const emit = defineEmits(["update:modelValue"]);

	function onInput(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		if (props.type === "number") {
			emit("update:modelValue", value === "" ? 0 : Number(value));
			return;
		}
		emit("update:modelValue", value);
	}
</script>
<style lang="scss" scoped>
	.form {
		&-label {
			color: var(--color-text-soft);
		}
		&-input {
			background-color: var(--color-background-soft);
			border: 2px solid var(--color-form-border);
			color: var(--color-text);
			font-weight: bold;
			font-size: $fs-h4;
			line-height: $font-h4-lh;
			width: 100%;
		}
	}
</style>
