import oscP5.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

OscP5 oscP5;
String result = "";


void setup() {
  size(500,500);
  frameRate(25);
  oscP5 = new OscP5(this,8000);  
}


void draw() {
  background(0);
  fill(255);
  text(result,100,100);
}


void oscEvent(OscMessage theOscMessage) {
  print("### received an osc message."); 
  String mes = theOscMessage.get(0).stringValue();
  Charset charset = StandardCharsets.UTF_8;
  byte[] bytes = Base64.getDecoder().decode(mes.getBytes());
  result = new String(bytes, charset);
}
