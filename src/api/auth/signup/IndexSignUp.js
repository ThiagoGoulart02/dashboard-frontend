import { baseApi } from "../../BaseUrl";
import createHttpClient from "../../Http-client";

export const signUpRoute = createHttpClient("/user/signup", baseApi)