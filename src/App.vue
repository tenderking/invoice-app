<script setup lang="ts">
	import TheNavBar from "./components/TheNavBar.vue";
</script>

<template>
	<header><TheNavBar /></header>
	<div id="modal"></div>
	<main class="main">
		<router-view />
	</main>
</template>

<style lang="scss">
	#app {
		height: 100vh;

		#modal {
			position: relative;
		}
		main {
			margin-inline: auto;
			padding-top: 6rem;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		#app {
			display: flex;
			main {
				padding-top: 2rem;
				position: relative;
				width: 100%;
			}
		}
	}
</style>
