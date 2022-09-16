import AIML_Header from "../../layouts/AIML_Header";
import { Card, CardBody } from "reactstrap";

const AIML_engine_run = () => {
  return (
	<div>
      <AIML_Header />
	    <div>
          <h1>
		    AIML: Engine run
	      </h1>


	<table class="Parent"  valign="top" align="left">
	<td>
	<table class="column1"  valign="top" align="left">
		<td  vertical-align="top" align="left">
		  <tr>
					  <td align="left" bgcolor="white">
						<font size="3">Generate ITEMS</font>
					  </td>
					  <td align="left" bgcolor="white">
						<font size="3"><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1210_Generate_items_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align="left" bgcolor="white">
						<font size="3">Generate LOCATIONS</font>
					  </td>
					  <td align="left" bgcolor="white">
						<font size="3"><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1220_Generate_locations_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align="left" bgcolor="white">
						<font size="3">Generate MATRIX</font>
					  </td>
					  <td align="left" bgcolor="white">
						<font size="3"><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1230_Generate_matrix_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align="left" bgcolor="white">
						<font size="3">Generate COREDATA</font>
					  </td>
					  <td align="left" bgcolor="white">
						<font size="3"><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1240_Generate_coredata_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align="left" bgcolor="white">
						<font size="3">Generate Post-processed COREDATA</font>
					  </td>
					  <td align="left" bgcolor="white">
						<font size="3"><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1250_PostProcess_coredata.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
		</td>
	</table>
	</td>

	<td  valign="top" align="left">
	<table class="column2" valign="top" align="left">

	 <tr>
	  <td>
		<div class="output_html rendered_html output_subarea output_execute_result">
				<iframe
					name="iframe1"
					width="720"
					height="720"
					src="http://18.212.18.67/index_iframe_initial.html"
					frameborder="0"
					vertical-align="top"
					allowfullscreen    
				>
						{/*-- iFrame content will be inserted here! --> */}
			</iframe>        
		</div>
	  </td>
	 </tr>
	</table>

	</td>
	</table>
	    </div>
	</div>
  );
};
export default AIML_engine_run;