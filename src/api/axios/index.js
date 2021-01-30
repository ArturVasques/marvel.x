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

const GetHeroes = () => {
  return instance.get(`/characters${keys}`).then( res => res.data);
};

const GetHeroeImage = (link) => {
  // Example https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_small.jpg
  // Possible Sizes
  // portrait_small	50x75px
  // portrait_medium	100x150px
  // portrait_xlarge	150x225px
  // portrait_fantastic	168x252px
  // portrait_uncanny	300x450px
  // portrait_incredible 216x324px
  const sizeMedium = 'portrait_medium.jpg';
  return instance.get(`${link}/${sizeMedium}`);
}

export default { GetHeroes, GetHeroeImage };
