//למצוא פיתרון טוב יותר

function dating(){

let year,month,day;
let year1,month1,day1,year2,month2,day2;
const d=[];
let i;
    for ( i=0;i<2;i++){
    year=+prompt("enter year date num"+ (i+1));
    day=+prompt("enter day date num"+ (i+1));
    month=+prompt("enter month date num "+ (i+1));
    d[i]=new Date(year,month ,day , 0, 0,0);
    
    }
    document.write(d[0] + "<br/>");
    document.write(d[1] + "<br/>");
    
    day1=d[0].getDate();
    month1=d[0].getMonth();
    year1=d[0].getFullYear();
    day2=d[1].getDate();
    month2=d[1].getMonth();
    year2=d[1].getFullYear();
    
        if (year1>year2){
        document.write("<br/> biggest date is " + d[0]);
        }
   
        else if (year1<year2){
        document.write("<br/> biggest date is " + d[1]);
        }
        else if (month1>month2){
         document.write("<br/> biggest date is " + d[0]);
        }
         else if (month1<month2){
        document.write("<br/> biggest date is " + d[1]);
         }
         else if (day1>day2){
        document.write("<br/> biggest date is " + d[0]);
         }
        else if (day1<day2){ 
        document.write("<br/> biggest date is " + d[1]);
        }
        else{ 
        alert("dates are even ");
        }


}

