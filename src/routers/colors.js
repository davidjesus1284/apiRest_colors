const { Router } = require('express');
const { check } = require('express-validator');
const ColorsController = require('../controllers/colors.controlles');
const { validatorFields } = require('../middleware/validatorFields');
const router = Router();

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('color', 'The code hexadecimal of code is required').not().isEmpty(),
    validatorFields
], ColorsController.createColors);
router.get('/', ColorsController.getColors);
router.get('/:id', ColorsController.getOneColor);

module.exports = router;