import Smithco_Header from "../../layouts/Smithco_Header";
import { Card, CardBody } from "reactstrap";

const Smithco_user_management = () => {
  return (
	<div>
      <Smithco_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    Smithco: User management
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default Smithco_user_management;
