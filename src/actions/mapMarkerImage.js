export const CURRENT_IMAGE = "CURRENT_IMAGE";

export const setCurrentImageID = id => dispatch => {
    dispatch({
        type: CURRENT_IMAGE,
        currentImageId: id
    })
};