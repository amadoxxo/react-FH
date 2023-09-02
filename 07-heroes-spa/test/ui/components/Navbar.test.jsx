import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('pruebas <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Elian'
        },
        logout: jest.fn()
    }

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect(screen.getByText('Elian')).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { "replace": true });

    });
});