import Smithco_Header from "../../layouts/Smithco_Header";
import { Card, CardBody } from "reactstrap";

const Smithco_data_to_aws = () => {
  return (
	<div>
      <Smithco_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Smithco: Data: Inbound to AWS
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default Smithco_data_to_aws;