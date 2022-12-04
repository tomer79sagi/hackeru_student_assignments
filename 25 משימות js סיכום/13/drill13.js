let i,j,result;
document.write("<table border=1px; >");
for(i=1;i<=10;i++){
    document.write("<tr>");
for(j=1;j<=10;j++){
   result = Math.random().toString(36).substring(2,7);
    document.write(" <td> "+result+"<td/>");
  
   
}
    document.write("</tr>");

}
    document.write("</table>");