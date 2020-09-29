const express = require('express');
const tourController = require('../../controller/tourController');
const authController = require('./../../controller/authController');
const router = express.Router();

router
  .route('/top-cheap-tour')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-status').get(tourController.getTourStatus);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.postTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.delteTour
  );

module.exports = router;
