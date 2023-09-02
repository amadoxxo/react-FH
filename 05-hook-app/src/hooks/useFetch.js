import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        isLoading: true,
        data: null,
        hasError: null
    });

    const getUrl = async() => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            isLoading: false,
            data,
            hasError: null
        });
    }

    useEffect(() => {
        getUrl();
    }, [url])
    

    return {
        isLoading: state.isLoading,
        data: state.data,
        hasError: state.hasError
    }
}
