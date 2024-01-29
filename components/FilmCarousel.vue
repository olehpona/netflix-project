<script setup>
const props = defineProps();

const id = useState("carouselElement", () => 0)

const data = [
{
    title:"The Creator",
    text:"The Creator Test",
    imgName:"poster.jpg"
},
{
    title:"Oppenheimer",
    text:"Oppenheimer test",
    imgName:"poster1.webp"
},
{
    title:"Interstellar",
    text:"Interstellar test",
    imgName:"poster3.jpg"
}
]



function moveForward() {
    if (id.value === data.length-1) {
        id.value = 0
    } else {
        id.value++;
    }
}

function moveBackward() {
    if (id.value === 0) {
        id.value = data.length-1
    } else {
        id.value--;
    }
}
setInterval(() => {
    moveForward();
}, 5000)


</script>

<template>
    <div id="filmCarousel" class="w-full flex flex-col items-center h-[60%]">
        <FilmTitle :title="data[id].title" :text="data[id].text" :imgName="data[id].imgName"/>
        <div class="w-full h-[60%] absolute flex justify-between items-center px-8">
            <ButtonsCarouselArrowButton @click="moveBackward"></ButtonsCarouselArrowButton>
            <ButtonsCarouselArrowButton @click="moveForward" class="rotate-180"></ButtonsCarouselArrowButton>

        </div>
    </div>
</template>