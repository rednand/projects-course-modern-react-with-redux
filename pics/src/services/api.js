import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID slA824OXyD7MAxvXRuKQO3nk4YR1_TB69bi7gH-1f6I",
  },
});
