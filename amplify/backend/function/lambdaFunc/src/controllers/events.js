const {knex} = require('/opt/RDSconnection');

const getEvents = (req, res)=>  {
  const querry = req.query;
  
  const getEvents = async(query) => {
    if (querry.type) // if the type of event is mentioned
    {  
      let result = await knex.select('*').from('events').where('type',querry.type);
      return result;
    } else{
      let result = await knex.select('*').from('events');
      return result;
    }

 }
 getEvents(querry).then((response)=>{
   if (response.length === 0){
     return res.status(404).json("No events of specified type were found!");
   }
   return res.status(200).json({success: 'Success: retrieved from database', url: req.url, body : response});  
 });
};

const getEventsById =  function(req, res) {
   const eventID = Number(req.params.eventID);
   const getEvents = async() => {
    let result = await knex.select('*').from('events').where('id',eventID);
    return result;
 }
 getEvents().then((response)=>{
   if(Object.keys(response).length === 0){
     return res.status(404).json(`Event with is = ${eventID} does not exist in the database!`);
   }
   return res.json({success: 'get call succeed!', url: req.url, body : response});  
 });
};

const getEventsDef = function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
};

const postEvent =  function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
};

const postEventDef =  function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
};

const putEvent =  function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
};

const putEventDef =  function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
};

const deleteEvent =  function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
};

const deleteEventDef =  function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
};


module.exports = {
    getEvents,
    getEventsById,
    getEventsDef,
    putEvent,
    putEventDef,
    postEvent,
    postEventDef,
    deleteEvent,
    deleteEventDef
}