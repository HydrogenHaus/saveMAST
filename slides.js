var z = 0

function slideit(){


j=Math.round(Math.random()*10)
k=100
if (j==0) {
   a="croatia"
   b=62
   while(k>b|| k==0){k=Math.round(Math.random()*b)}
}
if (j==1) {
   a="boston"
   b=31
   while(k>b|| k==0){k=Math.round(Math.random()*b)}
}
else if (j==2) {
   a="newyork"
   b=43
   while(k>b|| k==0){k=Math.round(Math.random()*b)}
}
else if (j==3) {
   a="newhaven"
   b=33
   while(k>b|| k==0){k=Math.round(Math.random()*b)}

}
else if (j==4) {
   a="budapest"
   b=29
   while(k>b|| k==0){k=Math.round(Math.random()*b)}

}
else if (j==5) {
   a="prague"
   b=27
   while(k>b || k==0){k=Math.round(Math.random()*b)}
}
else if (j==6) {
   a="miami"
   b=43
   while(k>b || k==0){k=Math.round(Math.random()*b)}
}
else if (j==7 ) {
   a="philly"
   b=32
   while(k>b || k==0){k=Math.round(Math.random()*b)}
}
else if (j==8 ) {
   a="oceancity"
   b=24
   while( k>b|| k==0 || k==24){k=Math.round(Math.random()*b)}
}
else if (j==9) {
   a="newyork"
   b=43
   while(k>b || k==0){k=Math.round(Math.random()*b)}
}
else if (j==10)  {
   a="miami"
   b= 43
   while(k>b|| k==0 ){k=Math.round(Math.random()*b)}
}

if (k<10){
  check= "<img src='http://www.blakerego.com/Graphics/" + a  + "/0" + k + ".jpg'>"
  document.write( check )
}
else {
  check= "<img src='http://www.blakerego.com/Graphics/" + a  + "/" + k + ".jpg'>"
  document.write( check )
}
i++

}

setTimeout("slideit()",2500)
slideit()
