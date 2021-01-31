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

const GetHeroe = (id) => {
  return instance.get(`/characters/${id}${keys}`).then((res) => res.data);
};

const GetHeroeSearch = (startsWith) => {
  return instance.get(`/characters${keys}&nameStartsWith=${startsWith}`).then((res) => res.data);
};

const GetHeroes = (limit, offset) => {
  return instance
    .get(`/characters${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetHeroesBySerie = (limit, offset, id) => {
  return instance
    .get(`/series/${id}/characters${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetHeroesByComic = (limit, offset, id) => {
  return instance
    .get(`/comics/${id}/characters${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetSerie = (id) => {
  return instance.get(`/series/${id}${keys}`).then((res) => res.data);
};

const GetSeries = (limit, offset) => {
  return instance
    .get(`/series${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetSeriesByHeroe = (limit, offset, id) => {
  return instance
    .get(`/characters/${id}/series${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetComic = (id) => {
  return instance.get(`/comics/${id}${keys}`).then((res) => res.data);
};

const GetComics = (limit, offset) => {
  return instance
    .get(`/comics${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetComicsByHeroe = (limit, offset, id) => {
  return instance
    .get(`/characters/${id}/comics${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

const GetComicsBySerie = (limit, offset, id) => {
  return instance
    .get(`/series/${id}/comics${keys}&limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

export default {
  GetHeroe,
  GetHeroes,
  GetHeroesBySerie,
  GetHeroesByComic,

  GetHeroeSearch,

  GetSerie,
  GetSeries,
  GetSeriesByHeroe,

  GetComic,
  GetComics,
  GetComicsByHeroe,
  GetComicsBySerie,
};
