const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { AuthContext } = require("../../src/auth")
const { PrivateRoute } = require("../../src/router/PrivateRoute")

describe('Pruebas en <PrivateRoute />', () => { 

    test('debe de mostrar el children si no está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Elian'
            }
        }


        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    })
})