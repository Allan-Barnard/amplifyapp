import Acme_Header from "../../layouts/Acme_Header";
import { Card, CardBody } from "reactstrap";

const Acme_user_management = () => {
  return (
	<div>
      <Acme_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Acme: User management
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default Acme_user_management;
