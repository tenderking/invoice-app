<template>
	<nav>
		<IconLogoBg />
		<div class="nav">
			<IconTheme />
			<img
				src="@/assets/image-avatar.jpg"
				class="nav__avatar"
				alt="profile avatar"
			/>
		</div>
	</nav>
</template>
<script setup lang="ts">
	import IconLogoBg from "@/components/icons/IconLogoBg.vue";
	import IconTheme from "@/components/icons/IconTheme.vue";
</script>

<style lang="scss" scoped>
	nav {
		position: fixed;
		display: flex;
		justify-content: space-between;
		top: 0;
		width: 100%;
		background-color: var(--color-background-nav);
		.nav {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 32px;
			align-items: center;
			padding: 1rem 32px;

			&__avatar {
				border-radius: 100%;
				height: 32px;
			}
		}
	}
	@media screen and (min-width: $sz-tablet) {
		nav {
			height: 100%;
			flex-direction: column;
			width: initial;
			.nav {
				flex-direction: column;
				padding: 32px 1rem;
			}
		}
	}
</style>
