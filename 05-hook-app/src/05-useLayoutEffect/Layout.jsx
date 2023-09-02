import { useFetch, useCounter } from '../hooks'
import { LoadingQuotes, Quotes } from '../03-examples'


export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { isLoading, data, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading ?
                <LoadingQuotes /> :
                <Quotes quote={ quote } author={ author } />
            }

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
                disabled={ isLoading }>
                    Next Quote
            </button>

        </>
    )
}
