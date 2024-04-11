<template>
    <div class="flex w-full h-12 bg-[#121212] space-x-4 p-2 rounded-lg">
        <img class="h-full" src="/search-icon.svg">
        <div class="search__input relative grow h-full">
            <input type="text" class="h-full w-full text-white bg-transparent">
        </div>

    </div>
</template>

<style>

.search__input::after {
    width: 100%;
    height: 2px;
    background: white;
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
}
</style>