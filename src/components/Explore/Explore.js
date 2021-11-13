import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Package from "../Packages/Package/Package";
const Explore = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://byke-app.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container className="mt-4">
          <hr className="border-bottom border border-dark border-3" />
          <h2 className="text-center text-danger my-5">Our All Products</h2>

          <Row className="g-4 mb-5">
            {packages.map((pkg) => (
              <Package key={pkg._id} package={pkg}></Package>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Explore;
