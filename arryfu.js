const a = () => {
  console.log("Hi");
};                          ---(noParameters)--

a();


const b = name => {
  console.log("Hello " + name);
};
                                --(oneperameters)---
b("Ravi");


const add = (a, b) => {
  return a + b;
};
                                  --  (Multiple Parameters)--
console.log(add(3, 5));



const bb = num => num * num;
                                --(Single Line)--
console.log(bb(4));

