<template>
  <v-app>
    <v-snackbar v-for="(tost, index) in toasts" :key="index" v-model="tost.run" style="position: fixed;z-index: 1100;"
      :timeout="tost.timeOut" :color="tost.color" class="d-flex">
      {{ tost.text }}
    </v-snackbar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useAlert } from "./store";

const store = useAlert()

const toasts = computed<any>(() => {
  setTimeout(() => {
    store.$state.toast = []
  }, 5000)
  return store.$state.toast
})/* /tost */

</script>
