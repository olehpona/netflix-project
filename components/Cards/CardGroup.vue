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
    button: 5px;
    left: 0;
    margin-left: 2rem;
}
</style>

<template>
    <div class="w-full h-32">
        <header class="w-full h-28 card__group__header p-8">
            <h2 class="text-white font-semibold text-4xl">{{ title }}</h2>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

