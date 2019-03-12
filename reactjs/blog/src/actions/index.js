import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = async () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', playload: response })
};
