import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_user_management = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: User management
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>
  );
};

export default AIML_user_management;
