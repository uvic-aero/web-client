export const CURRENT_IMAGE = "CURRENT_IMAGE";
export const FETCH_IMAGES = "FETCH_IMAGES";
const {getImages} = require("../api");

// dispatches the current image-marker that is being viewed in the MapVIew component
export const setCurrentImageID = id => dispatch => {
    dispatch({
        type: CURRENT_IMAGE,
        currentImageId: id
    })
};

// Makes an API call to GS to fetch images that weren't sent to web client
export const fetchImages = () => dispatch => {
    getImages()
    .then(images => {
        dispatch({
            type: FETCH_IMAGES,
            ...images
        })
    }
        
    );
  };