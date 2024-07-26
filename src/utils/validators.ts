import { isEmpty, isEmptyArray, isNullOrUndefined } from '@/helper/functions'


// 👉 Required Validator
export const requiredValidator = async (value: unknown, locale: string) => {
    if (isNullOrUndefined(value) || isEmptyArray(value as any) || value === false)
        return "column is required"

    return !!String(value).trim().length || "column is required"
}/* /requiredValidator */

// 👉 password validator
export const passwordValidator = (password: string, locale: string) => {
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

    const validPassword = regExp.test(password)
    return (
        // eslint-disable-next-line operator-linebreak
        validPassword || "It must be at least eight characters long and contain uppercase and lowercase letters, numbers and symbols."
        
    )
}/* /passwordValidator */




