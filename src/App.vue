<script setup lang="ts">
	import TheNavBar from "./components/TheNavBar.vue";
</script>

<template>
	<header><TheNavBar /></header>
	<main>
		<h1>Hello</h1>
	</main>
</template>
<style lang="scss">
	#app {
		height: 100vh;
		display: grid;
		grid-template-columns: max-content auto;
		grid-template-rows: max-content auto;
		header {
			grid-column: 1/-1;
			grid-row: 1 / span 1;
		}
		main {
			grid-column: 1/-1;
			grid-row: 2 / span 1;
			margin-inline: auto;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		#app {
			header {
				grid-column: 1 / span 1;
				grid-row: 1 / -1;
			}
			main {
				grid-column: 2/-1;
				grid-row: 1/ -1;
			}
		}
	}
</style>
