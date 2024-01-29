<script setup>
const data = [
    'Action',
    'Adventure',
    'Comedy',
    'Crime',
    'Drama',
    'Horror',
    'Science Fiction',
    'Thriller',
    'Fantasy',
    'Romance',
    'Animation',
    'Documentary',
    'Historical',
    'Fantasy',
    'Mystery',
    'War',
    'Sport',
    'Musical',
    'Comics',
    'Children',
    'Film Noir',
    'Gaming',
    'Family'
];

const state = useState("categoryState", () => data.map((el, index) => { return { index: index, text: el, state: false } }))

function changeState(id) {
    state.value[id].state = !state.value[id].state
    state.value.sort((a, b) => {
        return (a.state === b.state) ? 0 : a.state ? -1 : 1;
    });
}
function getState(id) {
    return state.value[id].state
}

</script>

<template>
    <div class="w-1/4 bg-[#121212] h-full rounded-lg">
        <ElementGroup title="Genre">
            <div class="w-full space-x-3 flex items-center justify-start flex-wrap shrink-0 overflow-hidden duration-300 h-full"
                >
                <ButtonsSearchCategoryButton v-for="(item, index) in state" @click="() => { changeState(index) }"
                    :status="getState(index)" :text="item.text"></ButtonsSearchCategoryButton>
            </div>
        </ElementGroup>
    </div>
</template>