import "./Footer.css";
import { Link } from "react-router-dom";
export default function Createproduct() {
  return (
    <div className="main-footer1">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8 mx-auto rounded border p-4">
            <h2 className="text center mb-5">
              FILL UP THIS FORM TO CONTACT US{" "}
            </h2>

            <form>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">FULL NAME</label>
                <div className="col-sm-8">
                  <input className="form-control" name="fullname" />
                  <span className="text-danger"></span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">ADDRESS</label>
                <div className="col-sm-8">
                  <input className="form-control" name="address" />
                  <span className="text-danger"></span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">PHONE NUMBER</label>
                <div className="col-sm-8">
                  <input className="form-control" name="fullname" />
                  <span className="text-danger"></span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">EMAIL ADDRESS</label>
                <div className="col-sm-8">
                  <input className="form-control" name="fullname" />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">COMMENT</label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    name="description"
                    rows="4"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>

              <div className="row">
                <div className="offset-sm-4 col-sm-4 d-grid">
                  <Link className="btn btn-primary me-1" to="/" role="button">
                    Send
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
