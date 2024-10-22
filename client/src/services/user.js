import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;



export const getUserData = async (token) => {
  try {
    const { data } = await axios.post(`${host}/user/get_user_data`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAllPosts = async (token) => {
    try {
      const { data } = await axios.get(`${host}/get_all_posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };
  
  export const createNewPost = async (token, datas) => {
    console.log(token)
    try {
      const { data } = await axios.post(`${host}/add_post`, datas, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };

