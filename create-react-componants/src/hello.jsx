export function Hello1() {
  let name = "vikas";
  let lastName = () => {
    return " kumar gautam";
  };
  return (
    <h3>
      hello my name is {name}
      {lastName()}
    </h3>
  );
}
