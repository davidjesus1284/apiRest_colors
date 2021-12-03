const request = require('supertest');
const { client, server } = require('../../../app');

describe('Prueba en ruta /api/colors?limit=3&skip=1&format=json', () => {
    
    test('Debe de retornar status 200 y la data en formato json', async () => {
        
        const result = {
            "previousPage": null,
            "currentPage": 1,
            "nextPage": 2,
            "total": 12,
            "limit": 3,
            "numberPages": 4,
            "data": [
                {
                    "id": 1,
                    "name": "cerulean",
                    "color": "#98B2D1"
                },
                {
                    "id": 2,
                    "name": "uchsia rose",
                    "color": "#C74375"
                },
                {
                    "id": 3,
                    "name": "true red",
                    "color": "#BF1932"
                }
            ]
        }

        const consult = await request(server.app).get(`/api/colors?limit=3&skip=1&format=json`);
        
        expect(consult.statusCode).toBe(200);
        expect(consult.body.result).toEqual(result);
    });
    

    afterAll( () => {
        client.close()
    })
    
})
