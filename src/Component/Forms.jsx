import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Output from "./Output";
import { useLocation } from "react-router-dom";
function Forms() {
  const location = useLocation();
  const { name, price, image } = location.state;
  return (
    <div className="row">
      <div className="col-lg-6 ms-3">
        <div className="d-flex flex-row align-items-center">
          <img
            alt="img"
            className="w-50 h-25"
            src="https://i.pinimg.com/originals/bc/8e/76/bc8e764bece45d88dfb31c6fcabca83a.png"
          />
          <h1 className="" style={{ fontFamily: "cursive" }}>
            {" "}
            Tour & Travel
          </h1>
        </div>
        <div className="text-start mb-4">
          <span className="text-primary">Cart</span> / Information / Shipping /
          Payment
        </div>
        <div className="d-flex flex-row justify-around align-items-center">
          <h2 className="fs-3 pe-5 fw-2">Contact Information</h2>
          <p>
            Already have an Account?{" "}
            <span className="text-primary"> Log in</span>
          </p>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
          <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Email me with news and offers" />
          </Form.Group>
        </Form.Group>
        <div>
          <h2 className="mb-3 fs-3 pe-5 fw-2 text-start">Shipping Address</h2>
          <Form>
            <Form.Select className="mb-3" aria-label="Default select example">
              <option>Country/region</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <div className="row mb-3   d-flex justify-between flex-row">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="First name"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  placeholder="Last Name"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Company(optional)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Apartment,suit,etc(optional)"
              />
            </Form.Group>

            <div className="row mb-3  d-flex justify-between flex-row">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Postal Code"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  placeholder="City"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <div className="d-flex flex-row justify-start">
              <Button variant="primary">Continue Shipping</Button>
              <Button variant="link">Return to Cart</Button>
            </div>
          </Form>
        </div>
        <hr />
        <div className="text-primary d-flex flex-row justify-content-between text-start">
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
        </div>
      </div>
      <Output name={name} image={image} price={price} />
    </div>
  );
}

export default Forms;
