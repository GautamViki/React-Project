export function AddTODO() {
  return (
    <div className="row">
      <div className="col-4">
        <input type="text" placeholder="Enter TODO here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Success
        </button>
      </div>
    </div>
  );
}
