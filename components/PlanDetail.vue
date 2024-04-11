<script setup>
import gsap from "gsap";

const props = defineProps({
    name: String,
    subtitle:String
})

const id = useId();

function animateHover() {
    gsap.to("#" + id, { duration: 0.5, height: "auto"});
}
function animateExit(){
    gsap.to("#" + id, { duration: 0.5, height: "3rem" });
}
</script>

<template>
    <div class="bg-[#221F1F] rounded-lg space-y-4 w-64 overflow-hidden min-h-48 h-fit p-4">
        <div class="w-full h-1/4 text-center">
            <p class="text-2xl">{{ name }}</p>
            <p class="text-xl">{{ subtitle }}</p>
        </div>
        <div :id="id" class="detail w-full h-16 flex overflow-hidden justify-center text-center" @mouseenter="animateHover" @mouseleave="animateExit">
                <slot></slot>
        </div>
        <div class="w-full space-y-2">
            <div class="w-full flex h-16 space-x-3 ">
                <ButtonsPlanBuyButton class="w-1/2">1 mounth (20$)</ButtonsPlanBuyButton>
                <ButtonsPlanBuyButton class="w-1/2">1 year (200$)</ButtonsPlanBuyButton>
            </div>
        </div>
    </div>
</template>