import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 55,
  },
  headers: {
    "X-RapidAPI-Key": "0b218a6dc1msh503bc2a07e581d3p12f866jsnbf66a29fcf40",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (err) {
    console.error("Error fetching data from API:", err);
  }
};
