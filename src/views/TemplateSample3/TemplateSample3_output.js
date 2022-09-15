import Acme_Header from "../../layouts/Acme_Header";
import { Card, CardBody } from "reactstrap";

const Acme_output = () => {
  return (
	<div>
      <Acme_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Acme: Output review
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default Acme_output;