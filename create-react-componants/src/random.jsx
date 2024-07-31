export function Random() {
  let num = Math.random() * 100;
  return <h1 style={{backgroundColor:"green"}}>Random Number is : {Math.round(num)}</h1>;
}
