
<template>
    <nav class="w-full h-14 flex bg-[#121212] sticky top-0 z-10 px-3 justify-between items-center text-white">
        <div class="h-full flex justify-center space-x-8 items-center p-2">
            <div class="h-full">
                <NuxtLink to="/">
                    <img class="h-full" src="/logo.svg?url">
                </NuxtLink>
            </div>
            <div>
                <ul class="flex space-x-4">
                    <li>
                        Home
                    </li>
                    <li>
                        TV Show
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        Label
                    </li>
                    <li>
                        My List
                    </li>
                </ul>
            </div>
        </div>
        <div class="h-full flex space-x-4 py-2">
            <NuxtLink class="h-full" to="/search"><img class="h-full fill-white" src="/search-icon.svg?url"></NuxtLink>
            <img class="h-full" src="/notification-icon.svg?url">
            <img class="h-full" src="/account-icon.svg?url">
        </div>
    </nav>
</template>
