import { baseApi } from "../../BaseUrl";
import createHttpClient from "../../Http-client";

export const signInRoute = createHttpClient("/user/signin", baseApi);
