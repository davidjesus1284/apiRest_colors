const request = require('supertest');
const { client, server } = require('../../../app');

describe('Prueba en ruta /api/colors/6/?format=json', () => {

    test('Debe retornar status 200 y la informacion en json', async() => {
        
        const result = {
            "id": 1,
            "name": "cerulean",
            "year": "2000",
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        };

        const consult = await request(server.app).get(`/api/colors/1/?format=json`);
        
        expect(consult.statusCode).toBe(200);
        expect(consult.body.result).toEqual(result);
    });

    afterAll( () => {
        client.close()
    })
    
    
})
