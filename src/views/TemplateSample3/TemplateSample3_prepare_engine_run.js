import Acme_Header from "../../layouts/Acme_Header";
import { Card, CardBody } from "reactstrap";

const Acme_prepare_engine_run = () => {
  return (
	<div>
      <Acme_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Acme: Prepare for engine run
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default Acme_prepare_engine_run;