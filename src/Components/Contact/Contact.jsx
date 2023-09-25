import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section>
        <div className="container mt-5 pt-4 pb-2">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-sm-5  col-md-6 offset-md-0 contact">
              <h2>Contact us</h2>
              <form action="contactus.php" name="contactform" method="post">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="Phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone Number..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="message"
                    placeholder="Write your message here..."
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
export default Contact;
