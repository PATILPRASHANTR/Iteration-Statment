const Prime_Check = (N) => 
{
	 
	 let count = 0;
	 for(let num = 1; num <= N; num++){
	   if(N%num === 0)
	    count++;
	 }
	 if(count == 2)
	  return "YES"
	 else
	  return "NO"
};