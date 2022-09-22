<script setup lang="ts">
	import TheForm from "@/components/TheForm.vue";
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	const route = useRoute();
	const id = computed(() => {
		return route.params.id as string;
	});
</script>
<template>
	<teleport to="#modal">
		<TheForm :isEditMode="true" :id="id" />
	</teleport>
</template>
