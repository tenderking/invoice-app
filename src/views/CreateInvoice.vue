<script setup lang="ts">
	import TheForm from "@/components/TheForm.vue";
</script>
<template>
	<teleport to="#modal">
		<TheForm :isEditMode="false" />
	</teleport>
</template>
