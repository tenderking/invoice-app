<template>
	<ButtonBase>
		<div class="new-button">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="16" cy="16" r="16" fill="white" />
				<path
					d="M17.3136 21.0229V17.3131H21.0234V14.7328H17.3136V11.0229H14.7333V14.7328H11.0234V17.3131H14.7333V21.0229H17.3136Z"
					fill="#7C5DFA"
				/>
			</svg>

			<h4>New Invoice</h4>
		</div>
	</ButtonBase>
</template>
<script lang="ts" setup>
	import ButtonBase from "./ButtonBase.vue";
	import IconPlus from "../icons/IconPlus.vue";
</script>
<style lang="scss" scoped>
	.button {
		--button-color: var(--neutral-100);
		--button-bg: var(--primary-60);
		--hover-bg: var(--primary-70);
		padding-inline: 1rem;
		.new-button {
			display: flex;
			align-items: center;
			gap: 1em;
		}
	}
</style>
