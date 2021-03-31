import axios from "axios";
import News from "../../types/newsTypes";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

interface newsResponse {
  news: News;
}

export async function fetchHedlineNews(
  page: number
): Promise<newsResponse> {
  const params = {
    "page": page,
    "apiKey": REACT_APP_API_KEY,
  }
  return await axios.get(`https://newsapi.org/v2/top-headlines?country=us`, { params: params });
}

export async function fetchEverythingNews(
  page: number,
  sortBy: string,
  searchTerm: string
): Promise<newsResponse> {

  const params = {
    page: page,
    apiKey: REACT_APP_API_KEY,
    sortBy: sortBy,
    q: searchTerm,
  }

  return await axios.get(`https://newsapi.org/v2/everything`, { params: params });
}