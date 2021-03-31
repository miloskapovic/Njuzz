export interface SourceType {
    id?: string | null;
    name?: string;
}

export interface ArticleType {
    author?: string;
    content?: string;
    title?: string;
    description?: string;
    urlToImage?: string;
    publishedAt?: string;
    url?: string;
    source?: SourceType;
}

export default interface NewsType {
    articles?: Array<ArticleType>;
    totalResults?: number;
    page?: number;
}