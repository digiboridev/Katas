function l(log){
	console.log(log)
}

l('Hi there')

function factorial(n)
{
  let a;
  if (n > 12 || n < 0){
  	throw 'RangeError'
  }
  a = 1;
  while(n > 1){
  	a *= n--
  }
  return a
}

l(factorial(0))
l(factorial(1))
l(factorial(5))