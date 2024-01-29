<template>
    <div class="w-full text-white justify-center flex p-3 h-full">
        <div class="w-full bg-[#121212] rounded-lg p-5 flex flex-col items-center">
            <div class="flex w-1/2 items-center h-44">
                <div class="w-1/2 h-full flex items-center">
                    <img class="h-5/6" src="/account-icon.svg?url">
                    <div class="space-y-3">
                        <p>Name</p>
                        <p>Login</p>
                    </div>
                </div>
                <div class="w-1/2 space-y-3">
                    <p>Plan</p>
                    <p>Next Pay Date</p>
                    <p>Pay Method</p>
                </div>
            </div>
            <ElementGroup title="User">
                <p>User Settings</p>
            </ElementGroup>
            <ElementGroup title="Plan">
                <p>Plan Settings</p>
            </ElementGroup>
            <ElementGroup title="Payments">
                <p>Payments Settings</p>
            </ElementGroup>
        </div>
    </div>
</template>