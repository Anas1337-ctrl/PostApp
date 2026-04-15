import axios from "axios";

const baseURL = "https://69dcdc9f84f912a264044fdf.mockapi.io/posts";

export const getPosts = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(baseURL);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    console.log("Error fetching data");
    onError && onError(error);
  }
};


export const getPost = async ({onSuccess, onError, itemID}) => {
    try {
        const res = await axios.get(`${baseURL}/${itemID}`)
        onSuccess && onSuccess(res.data)
    } catch (error) {
        onError && onError(error)
    }
}

export const delPost = async ({onSuccess, onError, itemID}) => {
    try {
        const res = await axios.delete(`${baseURL}/${itemID}`)
        onSuccess && onSuccess(res.data)
    } catch (error) {
        onError && onError(error)
    }
}

export const upPost = async ({onSuccess, onError, itemID, body}) => {
    try {
        const res = await axios.put(`${baseURL}/${itemID}`, body)
        onSuccess && onSuccess(res.data)
    } catch (error) {
        onError && onError(error)
    }
}

export const ctPost = async ({onSuccess, onError, body}) => {
    try {
        const res = await axios.post(`${baseURL}`, body)
        onSuccess && onSuccess(res.data)
    } catch (error) {
        onError && onError(error)
    }
}