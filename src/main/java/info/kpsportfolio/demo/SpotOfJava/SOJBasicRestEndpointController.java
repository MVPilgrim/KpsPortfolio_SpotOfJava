//-----BEGIN /SOJBasic-----
package info.kpsportfolio.demo.SpotOfJava;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.core.*;


import java.io.*;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/SOJBasic")
public class SOJBasicRestEndpointController {
  int maxLen = 50*1024;
  
  String begin_SOJBasic_hello_DlmLine = "//-----BEGIN /SOJBasic/hello-----";
  String end_SOJBasic_hello_DlmLine   = "//-----END /SOJBasic/hello-----";
  String srcFile = "java/info/kpsportfolio/demo/SpotOfJava/SOJBasicRestEndpointController.java";
  
  @RequestMapping(value = "/hello", method = RequestMethod.OPTIONS)
  public ResponseEntity<String> options(HttpServletResponse response) {
      response.setHeader("Allow", "GET,OPTIONS");
      return new ResponseEntity<String>(HttpStatus.OK);
  }
    
  //-----BEGIN /SOJBasic/hello-----
  @RequestMapping(value="/hello", produces = MediaType.APPLICATION_JSON_VALUE)
  public String getHello(HttpServletResponse response) {
    String retVal;
    
    try {
      JsonFactory factory = new JsonFactory();
      ByteArrayOutputStream baos = new ByteArrayOutputStream(1024);
      JsonGenerator generator = factory.createGenerator(baos, JsonEncoding.UTF8);
  
      generator.writeStartObject();
      generator.writeStringField("rc", "0");
      generator.writeStringField("errmsg", "ok");
      generator.writeStringField("cmd", "hello");
      generator.writeStringField("msg", "A SpotOfJava hello for you!");
      
      generator.writeFieldName("src");
      String srcCode = getSrcCode(begin_SOJBasic_hello_DlmLine,end_SOJBasic_hello_DlmLine);
      generator.writeString(srcCode);
      
      generator.writeEndObject();
      generator.close();
      
      retVal = baos.toString();
    } catch (Exception e) {
      retVal = " { \"rc\": \"1\", \"errmsg\": \"Exception creating JSON response: \" + e.getMessage() } "; 
    }
    
    response.setHeader("Allow", "GET,OPTIONS");
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    return retVal;
  }
  
  String getSrcCode(String beginDlmLine, String endDlmLine) throws IOException{
    InputStream in        = this.getClass().getClassLoader().getResourceAsStream(srcFile);
    InputStreamReader inr = new InputStreamReader(in);
    BufferedReader br     = new BufferedReader(inr);
    
    String line;
    StringBuffer sb = new StringBuffer(maxLen);
    while((line = br.readLine()) != null) {   
      if (Pattern.matches(".*" + beginDlmLine + ".*", line)) {
        sb.append("<" + "pre" + ">");
        while((line = br.readLine()) != null && !Pattern.matches(".*" + endDlmLine + ".*", line)) {
          sb.append(line);
          sb.append("\n");
        }
        //return sb.toString();
      } 
    }
    sb.append("<" + "/" + "pre" + ">");
    return sb.toString();
  }
//-----END /SOJBasic/hello-----
}
//-----END /SOJBasic-----
