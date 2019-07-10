export default function reducer(state={}, action) {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload
            }
    }
}