const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox40de6e24794d42e5ad4a5556ce0850c7.mailgun.org';
const apiKey='be4dd373eaf5b2e0c207108817754ac4-76f111c4-c31268a1';
const mg = mailgun({apiKey: apiKey, domain:DOMAIN });
const sendWelcomeEmail = (email, name)=>{
    const data = {
        "from": 'Mailgun Sandbox <swaraj@sandbox40de6e24794d42e5ad4a5556ce0850c7>',
        to: email,
        subject: "Welcome to using an awesome app",
        text: `Welcome ${name} to using the Task Manager app!`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}
 
const sendCancelationEmail = (email, name)=>{
    const data = {
        from: 'Mailgun Sandbox <swaraj@sandbox40de6e24794d42e5ad4a5556ce0850c7>',
        to: email,
        subject: "Bye, Thankyou for using the app!",
        text: `Welcome ${name} to using the Task Manager app!`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}