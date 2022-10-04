<template>
	<div class="form pb-1">
		<div class="form-label pb-1">
			<label for="netDays">Payment Terms</label>
		</div>
		<select class="select br-4 p-16" v-model="net" name="netDays" id="netDays">
			<option :value="1">Net 1 day</option>
			<option :value="7">Net 7 days</option>
			<option :value="14">Net 14 days</option>
			<option :value="30">Net 30 days</option>
		</select>
	</div>
</template>
<script lang="ts" setup>
	import { ref, computed } from "vue";
	const props = defineProps({
		netDays: {
			type: Number,
			required: true,
		},
	});
	const emits = defineEmits(["update:netDays"]);

	const net = computed({
		get() {
			return props.netDays;
		},
		set(value) {
			return emits("update:netDays", value);
		},
	});
</script>
<style lang="scss" scoped>
	.form {
		&-label {
			color: var(--color-text-soft);
		}
		select {
			background-color: var(--color-background-soft);
			border: 2px solid var(--color-form-border);
			color: var(--color-text);
			font-weight: bold;
			font-size: $fs-h4;
			line-height: $font-h4-lh;
			width: 100%;
			option {
				background-color: var(--color-background-soft);
				border: 2px solid var(--color-form-border);
				color: var(--color-text);
				font-weight: bold;
				font-size: $fs-h4;
			}
		}
	}
</style>
