import Acme_Header from "../../layouts/Acme_Header";
import { Card, CardBody } from "reactstrap";

const Acme_data_to_client = () => {
  return (
	<div>
      <Acme_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Acme: Data: Outbound to client
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};
export default Acme_data_to_client;