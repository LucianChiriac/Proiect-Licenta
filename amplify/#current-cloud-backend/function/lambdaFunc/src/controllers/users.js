const {knex} = require('/opt/RDSconnection');

const getUsers = (req, res)=>  {
    const querry = req.query;
    
    const users = async(query) => {
        let result = await knex.select('*').from('events');
        return result;
   }
   users(querry).then((response)=>{
     if (response.length === 0){
       return res.status(404).json("No users were found!");
     }
     return res.status(200).json({success: 'Success: retrieved from database', url: req.url, body : response});  
   });
};

  
module.exports = {
    getUsers
}