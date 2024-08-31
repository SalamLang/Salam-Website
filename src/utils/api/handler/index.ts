import instance from "@/utils/axios/http"

export const sendNumber = () => {
    return instance.post('send-number')
}