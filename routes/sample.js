
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { catchErrors } = require('../errorhandlers');
router.post('/payment/payumoney',AuthController.payUMoneyPayment);
router.post('payment/payumoney/response',AuthController.payUMoneyPaymentResponse);
router.post('/register',catchErrors(AuthController.register));
router.get('/getuser',catchErrors(AuthController.getUser));
router.put('/getuser/:id',catchErrors(AuthController.updateUser));
router.delete('/getuser/:id',catchErrors(AuthController.deleteUser));
module.exports = router;
