<script setup>
const props = defineProps({
    title: String
})
</script>

<style>
.card__group__header::after {
    width: 50%;
    height: 4px;
    background-color: white;
    content: "";
    position: absolute;
    left: 0;
    margin-left: 2rem;
}
</style>

<template>
    <div class="max-w-full px-8 h-32 ">
        <header class="w-full card__group__header mb-4">
            <h2 class="text-white font-semibold text-4xl">{{ title }}</h2>
        </header>
        <div class="max-w-full overflow-x-scroll rounded-lg snap-mandatory flex space-x-8">
            <slot></slot>
        </div>
    </div>
</template>

