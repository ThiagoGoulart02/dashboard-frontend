import { signInRoute } from "./IndexSignIn";

const INTERNAL_ERROR = "Internal error. Try in a few seconds!";

export const signIn = async (payload) => {
    try {
        let response = await signInRoute.post("", {
            email: payload.email,
            password: payload.password
        });
        return { ...response.data, error: false };
    } catch (error) {
        if (!error.response) {
            return { errorText: INTERNAL_ERROR, error: true };
        } else {
            return { errorText: error.response.data.message, error: true };
        }
    }
}
