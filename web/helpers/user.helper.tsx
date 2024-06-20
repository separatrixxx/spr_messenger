import axios, { AxiosResponse } from "axios";
import { setUser } from "../features/user/userSlice";


export async function getUser(dispatch: any) {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');

        dispatch(setUser({ ip: response.data.ip }))
    } catch (err) {
        console.log(err);
    }
}