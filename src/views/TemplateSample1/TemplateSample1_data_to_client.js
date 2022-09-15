import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_data_to_client = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: Data: Outbound to client
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};
export default AIML_data_to_client;