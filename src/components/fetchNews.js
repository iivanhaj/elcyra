async function fetchNews(searchKeyword) {
    let url = 'http://127.0.0.1:3000/news';
    if (searchKeyword) {
        url += `?searchKeyword=${searchKeyword}`;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch news data');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; // re-throw the error to be handled by the caller
    }
}

export default fetchNews;
