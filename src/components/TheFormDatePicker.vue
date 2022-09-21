<template>
	<div class="form pb-1">
		<div class="form-label pb-1">
			<label for="date" class="form-label"> Invoice date </label>
		</div>
		<input
			type="date"
			name="date"
			id="date"
			value="2018-07-22"
			class="form-input br-4 p-16"
		/>
	</div>
</template>
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
