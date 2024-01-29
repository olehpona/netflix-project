<script setup>
const props = defineProps({
    title: String
})

const isOpen = ref(false)


function changeOpen() {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <div class="w-full p-6">
        <div class="w-full bg-[#221F1F] select-none mb-2 rounded-lg p-1" @click="() => changeOpen()">
            <p class="text-white text-2xl">{{ title }}</p>
        </div>
        <div :class="[isOpen ? 'h-fit' : 'hidden']">
            <slot></slot>
        </div>

    </div>
</template>