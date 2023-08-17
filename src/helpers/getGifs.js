export const getGifs = async (category) => {
    const apiKey = '1pnLlUQFERQOTymquQwAUOQ0qooM5Rl2';
    const limit = 9;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    console.log(gifs)
    return gifs;
}