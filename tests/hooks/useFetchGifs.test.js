import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test in the useFetcGifs hook fn', () => {
    test('should return an initial state', () => {
        /* This is the initial state */
        const { result } = renderHook(() =>
            useFetchGifs('One Punch')
        )
        const { images, isLoading } = result.current;

        // console.log(result)
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading in false', async () => {
        /* This is the mount state on first render */
        const { result } = renderHook(() =>
            useFetchGifs('One Punch')
        );

        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0), {
            timeout: 2000
        });
        // console.log(result)
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    });
});
