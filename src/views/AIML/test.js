var AWS = require('aws-sdk/dist/aws-sdk-react-native');

AWS.config.update({
    accessKeyId: "ASIAVLW57Z3HHBQGX5EI",
    secretAccessKey: "d5McRA6NFZU0SapzPwX70mwXgnF1I+uSuqPRjAko",
    region: "us-east-1"
});

const params = {
    UserPoolId: 'us-east-1_sif1pTYL2',
    AttributesToGet: [
      'email',
    ],
};
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

cognitoidentityserviceprovider.listUsers(params, (err, data) => {
    if (err) {
        console.log(err);
        console.log('got an error');
    }
    else {
        console.log("data", data);
        console.log('didnt an error');
    }
})

