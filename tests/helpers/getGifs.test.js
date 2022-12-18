import { getGifs } from '../../src/helpers/getGifs';

describe('Debe de retornar un arreglo de Gifs', () => {

    test('Debe retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

    });
});