<template>
    <div class="w-full grow flex flex-col p-5  justify-center items-center">
        <ClientOnly>
            <Vueform size="md" class="text-white" :display-errors="false">
                <StaticElement name="register_title" content="Sign in" tag="h1" />
                <StaticElement name="divider" tag="hr" />
                <TextElement name="email" input-type="email" :rules="[
                    'required',
                    'max:255',
                    'email',
                ]" placeholder="Email" field-name="Email" />
                <TextElement name="password" input-type="password" :rules="[
                    'required',
                    'min:8',
                ]" field-name="Password" placeholder="Password" />
                <StaticElement name="divider_1" tag="hr" />
                <ButtonElement name="register" :submits="true" button-label="Sign in" :full="true" size="lg" />
            </Vueform>
        </ClientOnly>
    </div>
</template>