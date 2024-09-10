import "./Footer.css";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import CardGroup from "react-bootstrap/CardGroup";

export default function Home() {
  return (
    <div className="main-container">
      <div className="text">
        <h1> DASHBOARD</h1>
      </div>
      <div className="container1">
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>TOTAL EARNINGS</Card.Title>
              <Card.Title>$63,448.78</Card.Title>
              <ProgressBar animated now={45} />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>CUSTOMERS</Card.Title>
              <Card.Title>PHP 39,354</Card.Title>
              <ProgressBar animated now={20} />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>PRODUCTS</Card.Title>
              <Card.Title>PHP 39,354</Card.Title>
              <ProgressBar animated now={70} />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="container2">
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>TOTAL SALES</Card.Title>
              <Card.Title>PHP 423,39</Card.Title>
              <ProgressBar animated now={35} />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>REFUNDS</Card.Title>
              <Card.Title>PHP 39,354</Card.Title>
              <ProgressBar animated now={15} />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>PROGRESSBAR</Card.Title>
              <Card.Text>
                <ProgressBar
                  striped
                  variant="success"
                  now={45}
                  label="Earnings 45%"
                />
                <ProgressBar
                  striped
                  variant="info"
                  now={20}
                  label="Customers 20%"
                />
                <ProgressBar
                  striped
                  variant="warning"
                  now={60}
                  label="Products 70%"
                />
                <ProgressBar
                  striped
                  variant="danger"
                  now={80}
                  label="Refunds 15%"
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
