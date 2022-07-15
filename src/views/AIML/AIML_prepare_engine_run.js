import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_prepare_engine_run = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: Prepare for engine run
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default AIML_prepare_engine_run;