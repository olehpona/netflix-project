<style>
.main__film__title__text {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 1) 43%), linear-gradient(rgba(0,0,0,0) 80%, rgba(0,0,0,0.9) 100%);

}
</style>

<script setup>
const props = defineProps({
    title: String,
    text: String,
    imgName: String
})
</script>

<template>
    <div class="flex relative w-full h-full items-center">
        <div class="h-full w-[60%]">
            <img class="h-full w-full object-cover" :src="'/' + imgName + '?url'">
        </div>
        <div
            class="absolute w-full h-full main__film__title__text text-white flex justify-end items-center">
            <div class="w-1/2 flex items-center text-center px-24 space-y-5 flex-col">
                <h3 class="text-4xl">{{ title }}</h3>
                <p>{{ text }}</p>
            <div class="w-full flex space-x-5 justify-center">
                <ButtonsTitlePlayButton></ButtonsTitlePlayButton>
                <ButtonsTitleAddToPlayList></ButtonsTitleAddToPlayList>
            </div>
        </div>
    </div>
</div>
</template>
