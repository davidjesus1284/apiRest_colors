const { Router } = require('express');
const { check } = require('express-validator');
const ColorsController = require('../controllers/colors.controlles');
const { validatorFields } = require('../middleware/validatorFields');
const router = Router();

router.post('/', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('year', 'Debe colocar el año').not().isEmpty(),
    check('color', 'Se debe ingresa el codigo hexadecimal').not().isEmpty(),
    check('pantone_value', 'Este valor es requerido').not().isEmpty(),
    validatorFields
], ColorsController.createColors);
router.get('/', ColorsController.getColors);
router.get('/:id', ColorsController.getOneColor);

module.exports = router;