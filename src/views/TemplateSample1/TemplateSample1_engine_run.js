import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_engine_run = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: Engine run
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};
export default AIML_engine_run;