const Print_pattern = (N) => 
{
 var s = "";
 for(let count=1;count<=N;count++)
 {
   for(let num=1;num<=count;num++)
    {
      s+= "*";
    }
      s+= "\n"; 
 }
  console.log(s);

};