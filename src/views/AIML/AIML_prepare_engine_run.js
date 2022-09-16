import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";
var AWS = require('aws-sdk/dist/aws-sdk-react-native');

AWS.config.update({
    accessKeyId: "ASIAVLW57Z3HFCKTBA4L",
    secretAccessKey: "YjekSzO8Nr+73SAy744H6HnYneEhBfeQk6g5n6pf",
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
        <div> (err) </div>;
    }
    else {
        <div> (data) </div>;
    }
})

const AIML_prepare_engine_run = () => {
    <h1>hi</h1>
	
	return  (
        <h1>hi</h1>
        
	)
};

export default AIML_prepare_engine_run;