import { signInRoute } from "./IndexSignIn";

export const signIn = async(payload) => {
    try{
        let response = await signInRoute.post("", {
            email: payload.email,
            password: payload.password
        });
        return {...response.data, error: false};
    } catch(error) {
        console.log(error.response.status);
        console.log(error.response.data.message);
        return {errorText: error.response.data.message, error: true};
    }
}