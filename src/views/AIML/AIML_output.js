import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_output = () => {
  return (
	<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">

   <div class="output_html rendered_html output_subarea output_execute_result">
		   <iframe
			   name="iframe1"
			   width="720"
			   height="720"
			   src="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_items_to_webserver.py"
			   frameborder="0"
			   vertical-align="top"
			   allowfullscreen    
		   >
				   {/*-- iFrame content will be inserted here! --> */}
				   
	   </iframe>        
   </div>

   <div> 
    <object type="text/html" data="http://18.212.18.67:8082" >
    </object>
 </div>

	  </CardBody>
	</Card>
	</div>
  );
};

export default AIML_output;