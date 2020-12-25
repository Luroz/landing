
import React from "react";
import { Image, Row, Col, Button } from "antd";

const Concurso = () => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Row>
        <Col xs={8}>
          <Image
            width={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col xs={16}>
          <p style={{ textAlign: "left" }}>
            Neque porro quisquam est qui amet, consectetur, adipisci velit...
          </p>
          <Button>PARTICIPAR</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Concurso;