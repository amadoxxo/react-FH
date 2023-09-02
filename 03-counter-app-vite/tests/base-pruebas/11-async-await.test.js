import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas 11-async-await', () => {
    test('getImagen debe de retornar un error si no tenemos api key', async() => {

        const resp = await getImagen();
        // const url = await getImagen();
        expect( resp ).toBe('No se encontro la imagen');

    })
});