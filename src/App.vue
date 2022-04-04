<script setup lang="ts">
	import TheNavBar from "./components/TheNavBar.vue";
	import { useInvoiceStore } from "./stores/invoice";
	import TheForm from "./components/forms/TheForm.vue";
	const store = useInvoiceStore();
</script>

<template>
	<header><TheNavBar /></header>
	<main>
		<!-- <keep-alive> -->

		<TheForm />

		<component :is="store.current"></component>
		<!-- </keep-alive> -->
	</main>
</template>
<style lang="scss">
	#app {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr auto;
		header {
			grid-column: 1/-1;
			grid-row: 1 / span 1;
		}
		main {
			grid-column: 1/-1;
			grid-row: 2 / span 1;
			margin-inline: auto;
			padding-top: $pd-mb-invoices;
		}
	}
	@media screen and (min-width: $sz-tablet) {
		#app {
			grid-template-columns: auto 1fr;
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
