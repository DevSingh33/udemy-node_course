function foo1(a,b,cb,){
    const sum = a+b;
    cb(sum);
}
/*
As you transfered console.log as cb.
 And it's guaranteed that console.log will be called once function foo  has calculated the sum. And you will see "5" in console;
*/
foo1(3,2,console.log);

function foo2(x,y){
return x+y;
}

const sum = foo2(3,2);
console.log(sum);
/*
You see that console.log now doesn't depend on function foo and simply goes after it. 

It might happen that foo will calculate the sum for too long (imagine that the server calculates it on the North Pole and then sends it to you at the South Pole).
And until then const sum will stay undefined.
But code execution isn't gonna stop and wait for foo to calculate it for us on the North Pole. 
It will call foo(5, 2) and the next moment it will call console.log(sum) as they are not connected.  And  you will get "undefined" in console instead of  "5". 
As sum is still being calculated inside foo.

So, if you want console.log to log sum only when it's calculated than you gotta put it as a cb parameter for function foo, so console.log will be executed inside foo but not after it.
*/