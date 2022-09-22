var AWS = require('aws-sdk/dist/aws-sdk-react-native');

AWS.config.update({
    accessKeyId: "ASIAVLW57Z3HB6XMQTLH",
    secretAccessKey: "q6/DP79xYW/IPJ89NRFf5cBfbiap4+YYcHvNutwF",
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
        console.log('didnt  an error');
    }
})

