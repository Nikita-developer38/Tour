import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Output({ name, image, price }) {
  return (
    <div className="col-lg-5 mt-5">
      <Card style={{ width: "35rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fs-3">Trip To {name}</Card.Title>
          <hr />
          <div className="d-flex flex-row justify-between">
            <p className="me-5 pe-5"> Total Price :-</p>
            <h2 className="ms-5 ps-5">₹ {price}</h2>{" "}
          </div>
          <Button variant="danger">Pay ₹ {price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Output;
