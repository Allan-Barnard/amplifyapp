import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import AIML_Header from "../layouts/AIML_Header";

const BlogData = [
];

const AIML = () => {
  return (
    <div>
	<AIML_Header />
      {/***Top Cards***/}

	  <Row>
	    <a href="http://18.212.18.67:80/index_public.html">AI/ML Data-generation and processing on AWS Windows server</a>
	  </Row>
	  <Row>
		<table class="parent1">

			 <tr>
			  <td align=center width=434px>

					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=5>AI/ML Windows Python Server: <b><font color=red>INDEX_LOCAL.html</font></b></font></b>
					  </td>
					 </tr>
					 
					  <tr>
					  <td align=left bgcolor=white>
						<font color=red>
						<font size=2>
							Each "<b>Execute</b>" will not return a result until it succeeds or fails.<br>
							Please be patient.
						</font>
						</font>
					  </td>
					 </tr>
					 
					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>
					
					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3><b><font color=red>DASH</font></b> Test Scripts</font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td width=84 align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>DASH chart</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white width=72>
						<font size=3><a href="http://18.212.18.67:8082" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>

					<table class="child1">
					
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3><b><font color=red>PLOTLY</font></b> Test Scripts</font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>image</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_sample_chart_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>ITEMS View</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_items_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>LOCATIONS View</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_locations_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>MATRIX View</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_matrix_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>COREDATA View</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_coredata_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>COREDATA2 View</b> to <b><font color=red>webserver</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_coredata2_to_webserver.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>image</b> to <b><font color=blue>file</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_sample_chart_to_file.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3><b>ITEMS view</b> to <b><font color=blue>file</font></b></font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/cgi-bin/DataGen/python_plotly/plotly_display_items_to_file.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>View newly created HTML ITEMS file</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/plotly_display_items.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>


					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3>Generate INITIAL Datasets <font color=red>(multiple years of data)</font></font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Show Configuration Values</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1110_Load_config_main_standalone.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate ITEMS</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1210_Generate_items_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate LOCATIONS</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1220_Generate_locations_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate MATRIX</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1230_Generate_matrix_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate COREDATA</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1240_Generate_coredata_initial.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate Post-processed COREDATA</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67:80/cgi-bin/Datagen/python_datagen/DataGen_1250_PostProcess_coredata.py" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>

					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3>Load and Run AI/ML <font color=red>(multiple years of data)</font></font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Load data into Snowflake</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #1</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 </tr>
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #2</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #3</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #4</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Execute AI/ML Engine</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Process AI/ML Results</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>

					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3>Extend Datasets <font color=red>(one new period)</font></font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate ITEMS</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate LOCATIONS</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate MATRIX</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate COREDATA</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Generate Post-processed COREDATA</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					</table>
					<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>

					<table class="child1">
					 <tr>
					  <td align=center bgcolor=white>
						<b><font size=3>Load and Run AI/ML <font color=red>(one new period)</font></font></b>
					  </td>
					 </tr>
					</table>

					<table class="child1">

					 <tr>
					  <td align=left bgcolor=white>
						<b><font size=3>Function</font></b>
					  </td>
					  <td align=left bgcolor=white>
						<b><font size=3>URL</font></b>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Load data into Snowflake</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #1</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 </tr>
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #2</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #3</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Data cleansing: Step #4</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>

					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Execute AI/ML Engine</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					 <tr>
					  <td align=left bgcolor=white>
						<font size=3>Process AI/ML Results</font>
					  </td>
					  <td align=left bgcolor=white>
						<font size=3><a href="http://18.212.18.67/index_iframe_pending.html" target="iframe1">Execute</a></font>
					  </td>  
					 </tr>
					 
					</table>  
			  </td>	  

		</table>

		<p style="font-family: Arial; font-size: 4pt">&nbsp;</p>




	  </Row>

      {/***Table ***/}
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AIML;
