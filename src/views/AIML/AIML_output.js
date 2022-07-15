import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_output = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: Output review
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default AIML_output;