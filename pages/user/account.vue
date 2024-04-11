<script setup>
const userData = ref(null);

</script>

<template>
  <div class="w-full text-white flex flex-col items-center p-3">
    <div class="flex w-1/2 items-center h-44">
      <div class="w-1/2 h-full flex items-center">
        <img class="h-5/6" src="/account-icon.svg" />
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
    <ElementGroup title="User" :default="true">
      <div class="w-full space-y-4 p-3">
        <div>
          <p class="text-xl">Account details</p>
          <ClientOnly>
            <Vueform
              :endpoint="
                (data, form) => {
                  console.log(form);
                }
              "
              ref="userData"
            >
              <GroupElement name="name">
                <TextElement
                  name="firstName"
                  label="First name"
                  value="current email"
                  rules="required"
                  :columns="{ container: 6 }"
                ></TextElement>
                <TextElement
                  name="lastName"
                  label="Last name"
                  value="current email"
                  :columns="{ container: 6 }"
                ></TextElement>
                <TextElement
                  name="email"
                  label="email"
                  value="current email"
                  rules="required|email"
                >
                </TextElement>
              </GroupElement>
              <GroupElement>
                <ButtonElement
                  class="w-full"
                  name="submit"
                  :submits="true"
                  :columns="{ container: 1 }"
                >
                  Save
                </ButtonElement>
                <ButtonElement
                  class="w-full"
                  type="button"
                  name="cancel"
                  :columns="{ container: 1 }"
                >
                  Cancel
                </ButtonElement>
              </GroupElement>
            </Vueform>
          </ClientOnly>
        </div>
        <div>
          <p class="text-xl">Change password</p>
          <ClientOnly>
            <Vueform>
              <TextElement
                name="password"
                label="New password"
                rules="required|min:8|same:password_confirmation"
              ></TextElement>
              <TextElement
                name="password_confirmation"
                label="Confirm new password"
                rules="required"
              >
              </TextElement>
              <ButtonElement name="submit" :submits="true">
                Save
              </ButtonElement>
              <ButtonElement type="button" name="cancel">
                Cancel
              </ButtonElement>
            </Vueform>
          </ClientOnly>
        </div>
      </div>
    </ElementGroup>
    <ElementGroup title="Plan" :default="false">
      <div class="flex justify-center flex-wrap space-x-2 ">
        <PlanDetail name="Giga all" subtitle="Vip plan">
          <ul>
            <li>All films</li>
            <li>All series</li>
            <li>All movies</li>
            <li>All resolution</li>
            <li>All audio</li>
          </ul>
        </PlanDetail>
                <PlanDetail name="Giga all" subtitle="Vip plan">
          <ul>
            <li>All films</li>
            <li>All series</li>
            <li>All movies</li>
            <li>All resolution</li>
            <li>All audio</li>
          </ul>
        </PlanDetail>
                <PlanDetail name="Giga all" subtitle="Vip plan">
          <ul>
            <li>All films</li>
            <li>All series</li>
            <li>All movies</li>
            <li>All resolution</li>
            <li>All audio</li>
          </ul>
        </PlanDetail>
      </div>
    </ElementGroup>
    <ElementGroup title="Payments" :default="false">
      
    </ElementGroup>
  </div>
</template>
