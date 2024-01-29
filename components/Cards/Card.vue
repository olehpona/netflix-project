<script setup>
const props = defineProps({
    imgUrl: String,
    title: String
})
</script>

<style>
.card__detail{
    background: linear-gradient( rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 50%);
}
</style>

<template>
    <div class="w-96 h-48 relative shrink-0 rounded-lg flex justify-center items-center">
        <div class="w-full h-full">
            <img class="w-full rounded-lg h-full object-fill" :src="imgUrl + '?url'">
        </div>
        <div class="card__detail absolute top-0 left-0 opacity-0 hover:opacity-100  duration-500 flex w-96 justify-between p-4 h-48">
            <div class="flex w-10 h-full space-y-4 flex-col">
                <ButtonsCardSmallPlayButton/>
                <ButtonsCardSmallAddToPlaylistButton/>
            </div>
            <p class="text-white text-2xl">{{ title }}</p>
        </div>
    </div>
</template>