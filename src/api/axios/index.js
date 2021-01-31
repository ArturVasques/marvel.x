import axios from "axios";
import CryptoJS from "crypto-js";

const PRIV_KEY = "9ffae6b879998bb217d6e32ae28b7652e66770d3";
const PUBLIC_KEY = "67fe90694ad4e4a5325d54f73b7dad26";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
const keys = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

const instance = axios.create({
  baseURL: "http://gateway.marvel.com:80/v1/public",
});

instance.defaults.headers.common["Content-Type"] = "application/json";

const GetHeroes = (limit, offset) => {
  return instance.get(`/characters${keys}&limit=${limit}&offset=${offset}`).then( res => res.data);
};

const GetSeries = (limit, offset) => {
  return instance.get(`/series${keys}&limit=${limit}&offset=${offset}`).then( res => res.data);
}

const GetComics = () => {
  return instance.get(`/comics${keys}`).then( res => res.data);
}

export default { GetHeroes, GetSeries, GetComics };
