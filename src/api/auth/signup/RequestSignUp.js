import { signUpRoute } from "./IndexSignUp";

const INTERNAL_ERROR = "Internal error. Try in a few seconds!";

export const signUp = async(payload) => {
    try {
        let response = await signUpRoute.post("",{
            email: payload.email,
            password: payload.password,
            company_name: payload.company_name
        });
        return {...response.data, error: false}
    } catch (error) {
        if (!error.response) {
            return { errorText: INTERNAL_ERROR, error: true };
        } else {
            return {errorText: error.response.data.message, error: true}
        }
    }
}