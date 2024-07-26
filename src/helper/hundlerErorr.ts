import { useAlert } from "@/store"

let store = ''

window.onload = () => {
    store = useAlert();
};

export default function handleError(_err: any) {

    console.error(_err)

    return new Promise((resolve) => {
        if (_err?.response?.status === 422) {
            console.log("data : ", _err?.response?.data)
            const payload = {
                color: 'warning',
                timeOut: 5000,
                run: true,
                text: _err?.response?.data?.message, // You might want to set text here based on validation errors
                position: {
                    top: true,
                    right: false,
                    left: false,
                    bottom: false,
                },
                update: false,
            }/* /payload */

            store.$state.toast.push(payload) // Fixed typo 'tosts' to 'toasts'
        } else if (_err?.response?.status === 500) {
            const payload = {
                color: 'error',
                timeOut: 5000,
                run: true,
                text: "Server Error", // Corrected text from "Server Erorr" to "Server Error"
                position: {
                    top: true,
                    right: false,
                    left: false,
                    bottom: false,
                },
                update: false,
            }/* /payload */

            store.$state.toast.push(payload) // Fixed typo 'tosts' to 'toasts'
        } else if (_err?.response?.status === 400 || _err?.response?.status === 404) {
            const payload = {
                color: 'error',
                timeOut: 5000,
                run: true,
                text: _err?.response?.data.message,
                position: {
                    top: true,
                    right: false,
                    left: false,
                    bottom: false,
                },
                update: false,
            }/* /payload */

            store.$state.toast.push(payload)

        } else if (_err?.response?.status === 401) {
            window.location.href = "/login"
            console.log("you must now go to login page")
        }

        resolve(true)
    })// /return
}/* /handleError */