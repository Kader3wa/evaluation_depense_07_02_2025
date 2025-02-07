const DepenseReducer = (state, action) => {

    switch (action.type) {
        case ("ADD"):
            return {
                ...state,
                depenses: [...state.depenses, action.payload]
            }

        case ("REMOVE"): {
            return {
                ...state,
                depenses: state.depenses.filter((_, i) => i !== action.payload)
            }
        }

        default: return state;
    }

}

export default DepenseReducer;