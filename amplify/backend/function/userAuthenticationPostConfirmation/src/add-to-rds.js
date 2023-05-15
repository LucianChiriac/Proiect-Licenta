const axios = require('axios');
const path = require('path');
const apiGateway = 'https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev';


exports.handler = async (event) => {
    console.log(event.request.userAttributes)
    const email = event.request.userAttributes.email;
    const family_name = event.request.userAttributes.family_name;
    const given_name = event.request.userAttributes.given_name;
    const phone = event.request.userAttributes.phone_number;
    const id = event.request.userAttributes.sub;
    
    axios.post(path.join(apiGateway,'users'), {
        id: id,
        email : email,
        family_name: family_name,
        given_name: given_name,
        phone : phone,
        type : "registered"
      })
      .then(function (response) {
        console.log("I send the payload");
        console.log(response);
      })
      .catch(function (error) {
        console.log("This is the error I got:");
        console.log(error);
      }); 
    return event;
};




