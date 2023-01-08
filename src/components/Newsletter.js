import { Alert, Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    var email_req = { "email": document.getElementById('newsletter').value };


    let response = await fetch("https://dead-pear-lion-shoe.cyclic.app/newsletter", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email_req)
    }).catch((e) => {
      console.log(e)
    })


    let result = await response.json();
    if (result.status) {
      document.getElementById('newsletter').value = '';
      document.getElementById('newsletter_submit').style.backgroundColor = "green";
      document.getElementById('newsletter_submit').innerText = "Success";
    } else {
      document.getElementById('newsletter_submit').style.backgroundColor = "red";
      document.getElementById('newsletter_submit').innerText = "Failed. try again?";
    }
  }


  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br>Don't worry, we wont spam your inbox :)</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input type="email" id="newsletter" placeholder="Email Address" required />
                <button type="submit" id="newsletter_submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
