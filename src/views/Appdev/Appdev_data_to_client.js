import Appdev_Header from "../../layouts/Appdev_Header";
import { Card, CardBody } from "reactstrap";

const Appdev_data_to_client = () => {
  return (
	<div>
      <Appdev_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Appdev: Data: Outbound to client
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};
export default Appdev_data_to_client;