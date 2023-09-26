import "./Admin.css";
const Admin = () => {
  return (
    <>
      <section className="card">
        <div className="container mt-5 pt-4 pb-2">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-sm-5  col-md-6 offset-md-0 contact">
              <h2>Admin Login</h2>
              <form action="complaint.php" name="contactform" method="post">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Your Password..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-outline-success mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Admin;
