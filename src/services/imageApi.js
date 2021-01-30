import axios from "axios";

const apiKey = '18873778-f39304832de2102fcf5072037';


const fetchArticlesWithQuery = (searchQuery, page = 1) => {
  return axios
    // .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=5`)
    .get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=15&key=${apiKey}`)
    .then((responce) => responce.data.hits);
};
export default { fetchArticlesWithQuery };
