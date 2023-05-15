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

const postUser = (req,res) => {
    const email = req.body.email;
    const family_name = req.body.family_name;
    const given_name = req.body.given_name;
    const phone = req.body.phone;
    const type = req.body.type;
    const id = req.body.id;
    const insert = async() => {
        let result = await knex('users').insert({id:id,email:email, family_name:family_name, given_name:given_name, phone:phone, type:type}).onConflict('email').merge();
        return result;
    }
    insert().then((response) => {
        /// add validations 
        return res.json({respose:response})
    })
}
  
module.exports = {
    getUsers,
    postUser
};
