import "./Complaint.css";
const Complaint = () => {
  return (
    <>
      <section className="card">
        <div className="container mt-5 pt-4 pb-2">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-sm-5  col-md-6 offset-md-0 contact">
              <h2>Enter Complaint</h2>
              <form action="complaint.php" name="contactform" method="post">
                <div className="form-group">
                  <label for="name">User Id</label>
                  <input
                    className="form-control"
                    type="text"
                    name="userid"
                    placeholder="Your Id..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="region">region</label>
                  <input
                    type="text"
                    className="form-control"
                    name="region"
                    placeholder="Your Region..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="complaint">Enter Complaint Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="complaint"
                    placeholder="Write your Complaint here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success mt-2 ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr
          style={{
            borderWidth: 2,
            borderColor: "#000000",
            backgroundColor: "gray",
            borderRadius: 2,
          }}
        />
      </section>
    </>
  );
};
export default Complaint;
