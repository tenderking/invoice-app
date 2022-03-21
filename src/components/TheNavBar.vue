<template>
	<nav>
		<IconLogoBg />
		<div class="nav">
			<div class="icon">
				<IconTheme />
			</div>
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
		// position: fixed;
		--color-border: hsl(232, 20%, 36%);
		display: flex;
		justify-content: space-between;

		height: 100%;
		background-color: var(--color-background-nav);
		.nav {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 32px;
			align-items: center;
			padding-inline-end: 32px;
			.icon {
				padding: 28px 32px;
				border-right: solid 1px var(--color-border);
			}

			&__avatar {
				border-radius: 100%;
				height: 32px;
			}
		}
	}
	@media screen and (min-width: $sz-tablet) {
		nav {
			flex-direction: column;
			border-radius: 0 $radius-nav $radius-nav 0;
			.nav {
				padding-inline-end: 0;
				padding-block-end: 32px;
				.icon {
					padding: 32px 28px;
					border-bottom: solid 1px var(--color-border);
					border-right: 0;
				}
				flex-direction: column;
				&__avatar {
					width: 32px;
				}
			}
		}
	}
</style>
