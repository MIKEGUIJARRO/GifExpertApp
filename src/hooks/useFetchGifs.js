import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);

    useEffect(() => {
        fetchGifs(category).then((gifs) => {
            setImages(gifs);
            setIsLoading(false);
        });

    }, [])

    const fetchGifs = async (category) => {
        const gifs = await getGifs(category);
        return gifs;
    }



    return {
        images,
        isLoading,
    }
}