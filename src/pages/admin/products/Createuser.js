export default function Createuser() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2 className="text center mb-5">Create User </h2>

          <form>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">FULL NAME</label>
              <div className="col-sm-8">
                <input className="form-control" name="fullname" />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">EMAIL</label>
              <div className="col-sm-8">
                <input className="form-control" name="email" />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">CATEGORY</label>
              <div className="col-sm-8">
                <select className="form-select" name="category">
                  <option value="other">ADMIN</option>
                  <option value="other">USER</option>
                </select>
                <span className="text danger"></span>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">AVATAR</label>
              <div className="col-sm-8">
                <input className="form-control" type="file" name="image" />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
