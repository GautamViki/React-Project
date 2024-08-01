export function TODOItems() {
  let todoName = "Buy Milk";
  let todoDate = "15/09/2024";
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
