


import React from "react";
import {Row} from 'antd'

const Modulo = ({ title, children }) => {
  return (
    <Row>
      <Row>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>
          {title.toUpperCase()}
        </p>
      </Row>
      <Row>
        {children}
      </Row>.
    </Row>


  );
};

export default Modulo