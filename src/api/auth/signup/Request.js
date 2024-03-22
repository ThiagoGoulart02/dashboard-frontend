import { signUpRoute } from "./IndexSignUp";

export const signUp = async(payload) => {
    try {
        console.log(payload.email);
        console.log(payload.password);
        console.log(payload.company_name);
        let response = await signUpRoute.post("",{
            email: payload.email,
            password: payload.password,
            company_name: payload.company_name
        });
        return {...response.data, error: false}
    } catch (error) {
        return {errorText: error.response.data.message, error: true}
    }
}