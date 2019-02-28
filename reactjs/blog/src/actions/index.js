import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = async () => {

  // bad approach why does crash the redux rules
  const response = await jsonPlaceHolder.get('/posts');
  
  return{
    type: 'FETCH_POSTS',
    playload: response
  };
};