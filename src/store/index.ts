import { defineStore } from "pinia"
import {ref,computed} from "vue"


export const useAlert = defineStore('alert', () => {
    const toast = ref<any[]>([])

    return { toast }
})