<template>
	<nav>
		<IconLogoBg />
		<div class="nav">
			<div class="icon" @click="changeTheme">
				<IconTheme v-model:isMoon="isDark" />
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
	import { ref } from "vue";
	const body = document.body;

	const isDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
	const changeTheme = () => {
		if (
			window.matchMedia("(prefers-color-scheme: dark)").matches
			//prefers||or dark class||prefers dark and light class
		) {
			if (body.classList.contains("light")) {
				document.body.classList.remove("light");
				body.classList.add("dark");
				// lightTheme.value = false;
				console.log("prefers dark and is light class");
			} else {
				body.classList.remove("dark");
				body.classList.add("light");
			}

			console.log("prefers dark");
		} else {
			if (body.classList.contains("dark")) {
				document.body.classList.remove("dark");
				body.classList.add("light");
				console.log("prefers light and is dark class");
			} else {
				body.classList.remove("light");
				body.classList.add("dark");
			}
		}
	};
	// watch(theme);
</script>

<style lang="scss" scoped>
	nav {
		position: fixed;
		z-index: 1000;
		--color-border: hsl(232, 20%, 36%);
		display: flex;
		justify-content: space-between;
		top: 0;
		width: 100vw;

		// height: 100vh;
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
			height: 100vh;
			max-width: fit-content;
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
