import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas 06-deses-obj', () => { 

    test('debe retornar un objeto', () => { 


        const obj = {
            clave: 'Ironman',
            edad: 35,
        }

        const user = usContext(obj);

        const {clave, edad} = obj;

        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
});