import { signInRoute } from "./IndexSignIn";

export const signIn = async(payload) => {
    try{
        let response = await signInRoute.post("", {
            email: payload.email,
            password: payload.password
        });
        return {...response.data, error: false};
    } catch(error) {
        return {error: true};
    }
}