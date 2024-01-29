<script setup>
const countries = useState("countries" , () => ["Ukraine", "US", 'United Kingdom', 'German', 'France', 'Spain', 'Poland'])


</script>

<template>
    <div class="w-full grow flex flex-col p-5 justify-center items-center">
        <Vueform size="md" class="text-white" :display-errors="false">
            <StaticElement name="register_title" content="Create account" tag="h1" />
            <StaticElement name="divider" tag="hr" />
            <GroupElement name="container" description="Make sure it matches your legal name">
                <TextElement name="first_name" placeholder="First name" :columns="{
                    container: 6,
                    label: 12,
                    wrapper: 12,
                }" field-name="First name" :rules="[
    'required',
    'max:255',
]" />
                <TextElement name="last_name" placeholder="Last name" :columns="{
                    container: 6,
                    label: 12,
                    wrapper: 12,
                }" field-name="Last name" :rules="[
    'required',
    'max:255',
]" />
            </GroupElement>
            <DateElement name="birthday" placeholder="Birthday" field-name="Birthday" :rules="[
                'required',
            ]" description="Your birthday is not visible others." display-format="MMMM Do, YYYY" />
            <SelectElement name="country" :search="true" :native="false" input-type="search" autocomplete="disabled"
                placeholder="Country" :items="countries" />
            <TextElement name="phone" input-type="tel" placeholder="Phone" :rules="[
                'required',
            ]" field-name="Phone" />
            <TextElement name="email" input-type="email" :rules="[
                'required',
                'max:255',
                'email',
            ]" placeholder="Email" field-name="Email"
                description="You will receive a confirmation letter to this email." />
            <TextElement name="password" input-type="password" :rules="[
                'required',
                'min:8',
                'same:password_confirmation',
            ]" field-name="Password" placeholder="Password" />
            <TextElement name="password_confirmation" input-type="password" :rules="[
                'required',
            ]" field-name="Password confirmation" placeholder="Password again" />
            <StaticElement name="divider_1" tag="hr" />
            <ButtonElement name="register" :submits="true" button-label="Create account" :full="true" size="lg" />
        </Vueform>
    </div>
</template>
