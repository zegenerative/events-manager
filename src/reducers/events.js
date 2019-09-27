const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case 'EVENTS_FETCHED':
            return state = action.events
        default:
            return state
    }
}

export default reducer