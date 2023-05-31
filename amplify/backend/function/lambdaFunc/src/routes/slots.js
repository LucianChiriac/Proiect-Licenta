const express = require('express');
const router = express.Router();
const {knex} = require('/opt/RDSconnection')

router.get('/', function(req, res) {
  const getTimeSlots = async() => {
    let result = await knex.select('*').from('time_slots');
    return result;
 }
 getTimeSlots().then((response)=>{
   return res.status(200).json({success: 'get call succeed!', url: req.url, body : response});  
 });
});


module.exports = router;