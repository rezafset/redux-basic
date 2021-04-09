import axios from "axios";
const FetchUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            // console.log(response.data);
            dispatch({ type: 'STORE_USER', payload: response.data })
        }
        catch (error) {
            console.log("Fetch Error :", error);
        }
    }
};

export default FetchUser;