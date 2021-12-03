const { response, request } = require("express");
const ColorService = require("../services/colorsService");


class ColorsController {

    async createColors(req = request, res = response) {

        try {
            const result = await ColorService.createColor(req.body);
            return res.json({
                state: true,
                result
            })       
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                state: false,
                message: 'Error interno del servidor'
            })
        }
    }

    async getColors(req = request, res = response) {

        try {
            const limit = parseInt(req.query.limit);
            const skip = parseInt(req.query.skip);
            const result = await ColorService.getColors(limit, skip);
            return res.json({
                state: true,
                result
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                state: false,
                message: 'Error interno del servidor'
            })
        }
    }

    async getOneColor( req = request, res = response) {

        try {
            const result = await ColorService.getColorsById(req.params.id);
            return res.json({
                state: true,
                result
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                state: false,
                message: 'Error interno del servidor'
            })
        }
    }

}

module.exports = new ColorsController();
