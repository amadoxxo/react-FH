import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'RASE',
        email: 'eamado@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);

    useEffect( () => {
        // console.log('formState changed');
    }, [ formState ]);

    useEffect(() => {
        // console.log('Email changed');
    }, [ email ]);

    return (
        <>
            <h1>Formulario Simple</h1>

            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={ username }
                onChange={ onInputChange }/>

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="eamado@email.com"
                name="email"
                value={ email }
                onChange={ onInputChange }/>

            {
                (username === 'amadoxxo') && <Message />
            }
        </>
    )
}
