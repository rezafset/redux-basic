const initState = {
    apiUsers: []
}

const ApiUserReducer = (state = initState , action) => {
    switch(action.type){

        case 'STORE_USER': 
        return {apiUsers: action.payload}
        case 'DELETE_API_USER':
        const delApi = state.apiUsers.filter(apiUser => apiUser.id != action.id)
        return {apiUsers: delApi}
        default: 
        return state;
    }
};

export default ApiUserReducer;