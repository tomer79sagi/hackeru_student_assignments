

function dating(){
    let year=[],month=[],day=[];
   
    const d=[];
    let i;
  for ( i=0;i<2;i++){
  year[i]=+prompt("enter year date num"+ (i+1));
  day[i]=+prompt("enter day date num"+ (i+1));
 month[i]=+prompt("enter month date num "+ (i+1));
    d[i]=new Date(year[i],month[i] ,day[i] , 0, 0,0);

}
document.write(d[0] + "<br/>");
document.write(d[1] + "<br/>");






if (year[0]>year[1]){
    for (let i=2,j=day[1];j<=day[0]||month[1]<month[0]||year[1]<year[0];i++,day[1]++,j++){
        d[i]=new Date(year[1],month[1],(j) , 0, 0,0);
        j=d[i].getDate();
        month[1]=d[i].getMonth();
       year[1]=d[i].getFullYear();
        document.write("<br/>"+ d[i]);
    }
    }

    else if (year[0]<year[1]){

    for (let i=2,j=day[0];j<=day[1]||month[0]<month[1]||year[0]<year[1];i++,day[0]++,j++){
        d[i]=new Date(year[0],month[0],(j) , 0, 0,0);
        j=d[i].getDate();
        month[0]=d[i].getMonth();
       year[0]=d[i].getFullYear();
        document.write("<br/>"+ d[i]);
    }
    }
    else if (month[0]>month[1]){
 
     for (let i=2,j=day[1];j<=day[0]||month[1]<month[0];i++,day[1]++,j++){
        d[i]=new Date(year[1],month[1],(j) , 0, 0,0);
        j=d[i].getDate();
        month[1]=d[i].getMonth();
        document.write("<br/>"+ d[i]);
    }
    }
     else if (month[0]<month[1]){
        for (let i=2,j=day[0];j<=day[1]||month[0]<month[1];i++,day[0]++,j++){
            d[i]=new Date(year[0],month[0],(j) , 0, 0,0);
            j=d[i].getDate();
            month[0]=d[i].getMonth();
            document.write("<br/>"+ d[i]);
        }
    
     }
            else if (day[0]>day[1]){
    for (let i=2,j=day[1];j<=day[0];i++,day[1]++,j++){
        d[i]=new Date(year[1],month[1],(j) , 0, 0,0);
        j=d[i].getDate();
        document.write("<br/>"+ d[i]);
    }
     }
    else if (day[0]<day[1]){ 
        for (let i=2,j=day[0];j<=day[1];i++,day[0]++,j++){
            d[i]=new Date(year[0],month[0],(j) , 0, 0,0);
            j=d[i].getDate();
            document.write("<br/>"+ d[i]);
    }
}
    else{ 
    alert("dates are even ");
    }


}
     






























     
