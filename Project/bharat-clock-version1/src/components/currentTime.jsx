let CurrentTime = () => {
  let time = new Date();
  return (
    <h3>
      This is the CurrentTime : {time.toLocaleDateString()}{" "}
      {time.toLocaleTimeString()}
    </h3>
  );
};
export default CurrentTime;
