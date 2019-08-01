//Action creator
export const dummyAction = (dummy) => ({
    type: 'DUMMY_ACTION',
    payload: dummy
});

export const anotherDummy = () => {
    //return a function which in turn returns an action object later
    return async (dispatch) => {
        const response = await 'nothing here';
        dispatch({ type: 'FETCH_DUMMY', payload: response.data });
    };
};
