const express = require('express');
const router = express.Router();
const { getEvents,
    getEventsById,
    getEventsDef,
    putEvent,
    putEventDef,
    postEvent,
    postEventDef,
    deleteEvent,
    deleteEventDef} = require('../controllers/events');


router.get('/', getEvents);
router.get('/:eventID',getEventsById);
router.get('/*', getEventsDef);

/****************************
* Example post method *
****************************/

router.post('/',);
router.post('/*',);

/****************************
* Example put method *
****************************/

router.put('/',);
router.put('/*',);

/****************************
* Example delete method *
****************************/

router.delete('/',);
router.delete('/*', );

module.exports = router;