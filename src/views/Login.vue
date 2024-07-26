<template>
    <div class="login d-flex align-center justify-center">
        <v-row>
            <v-col cols="12" md="8" sm="6" class="d-none d-md-flex d-sm-flex d-xs-none align-center justify-center">
                <v-sheet rounded="lg" class="pa-12 d-flex align-center justify-center" width="100%" height="90vh"
                    color="grey-lighten-3">
                    <v-img cover max-width="400px" src="img/svg/figuer-login.svg">
                    </v-img>
                </v-sheet>
            </v-col>
            <v-col class="d-flex align-center justify-center" cols="12" md="4" sm="6">
                <div class="loginForm" style="width:90%">
                    <div class="logoInfo d-flex flex-column align-center justify-center">
                        <v-img max-width="100px" style="border-radius:50%" src="logo.png">
                        </v-img>
                        <div class="mt-2">
                            Dynamic User Authentication
                        </div>
                    </div>
                    <v-form @submit.prevent="login" ref="form" class="pa-10">

                        <!-- email input -->
                        <v-text-field v-model="data.username" color="primary"
                            :rules="[requiredValidator(data.username, 'ar')]" append-inner-icon="mdi-account"
                            label="Username" variant="filled" class="mb-1"></v-text-field>

                        <!-- password input -->
                        <v-text-field class="elevation-0" v-model="data.password" color="primary"
                            :rules="[requiredValidator(data.password, 'ar'), passwordValidator(data.password, 'ar')]"
                            @click:append-inner="password = !password" :type="password ? 'password' : 'text'"
                            :append-inner-icon="password ? 'mdi-eye-off' : 'mdi-eye'" label="Password"
                            variant="filled"></v-text-field>

                        <!-- free IPA -->
                        <v-checkbox color="danube" v-model="data.freeIPA" label="Login by freeIPA">
                        </v-checkbox>


                        <div class="w-100 d-flex align-center justify-center mt-1">
                            <v-btn width="200px" :loading="loading" type="submit" color="primary" class="mx-auto">تسجيل
                                الدخول</v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { VForm } from "vuetify/components"
import { postRequest } from "@/API/baseService";
import { requiredValidator, passwordValidator } from "@/utils/validators"
import { useRouter } from "vue-router";

const form = ref<VForm>()
const password = ref(true)
const data = ref({
    username: "",
    password: "",
    freeIPA: false
})// /data
const loading = ref(false)

const router = useRouter()

onMounted(() => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("userData")
})// /mounted

const login = async () => {
    loading.value = true
    const url = data.value.freeIPA ? 'loginByFreeIPA' : 'login'
    const result = await postRequest(url, data.value) as any
    loading.value = false

    if (result.data) {
        const informationUser = result.data

        localStorage.setItem("accessToken", informationUser.accessToken)
        localStorage.setItem("userData", JSON.stringify(informationUser.userData))

        router.push({ name: 'home' })
    }// /if
}// /login
</script>

<style scoped>
.login {
    width: 100vw;
    height: 100vh;
}
</style>