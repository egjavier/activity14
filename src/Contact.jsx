function Contact() {
  return(
    <section>
      <h1 className="fw-bold mb-5">CONTACT</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input name="name" id="name" className="form-control" type="text" placeholder="John Doe" required/><br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea className="form-control" id="feedback" name="feedback" placeholder="Type your feedback here..." rows="10" cols="50"></textarea><br/>
        <button className="btn btn-dark">Submit</button>
      </form>
    </section>
  )
}

export default Contact