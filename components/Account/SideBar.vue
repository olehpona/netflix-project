<script setup>
const route = useRoute()
</script>

<template>
    <div class="w-1/6 bg-[#121212] flex flex-col space-y-3 p-3 h-fit rounded-lg">
        <NuxtLink class="text-center w-full p-2 duration-300 rounded-lg" to="/user/account/dashboard" :class="[route.path.split('/').pop() === 'dashboard'? 'bg-[#831010]': 'bg-[#221F1F]']">
            <p>Dashboard</p>
        </NuxtLink>
        <NuxtLink class="text-center w-full p-2 duration-300 rounded-lg" to="/user/account/plan" :class="[route.path.split('/').pop() === 'plan' ? 'bg-[#831010]' : 'bg-[#221F1F]']">
            <p>Plan</p>
        </NuxtLink>
        <NuxtLink class="text-center w-full p-2 duration-300 rounded-lg" to="/user/account/payments" :class="[route.path.split('/').pop() === 'payments' ? 'bg-[#831010]' : 'bg-[#221F1F]']">
            <p>Payments</p>
        </NuxtLink>
    </div>
</template>