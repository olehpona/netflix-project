<script setup>
const props = defineProps({
    text: String,
    status: Boolean
})
</script>

<template>
    <button class="w-fit h-fit rounded-full mb-3 px-3 " :class="[status? 'bg-[#831010]' :'bg-[#221F1F]']">
        <p class="text-white text-xl">{{ text }}</p>
    </button>
</template>