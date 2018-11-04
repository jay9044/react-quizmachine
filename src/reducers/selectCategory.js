function selectCategory(state = 'General Knowledge', action) {
    switch (action.type) {
        case 'SET_SELECT_CATEGORY':
            return action.selectCategory;
        default:
            return state;
    }
}

export default selectCategory;

