const initState = {
    users: [
        {id: 1, name: "Reza", address: "Chawkbazar"}
    ]
}

const UserReducer = (state = initState, action) => {
    switch(action.type){
        
        case 'ADD_USER': 
        return {users: [action.payload, ...state.users]}

        case 'DELETE_USER':
        const delUser = state.users.filter(user => user.id != action.id)
        return {users: delUser}

        default:
            return state;
    }
};

export default UserReducer;