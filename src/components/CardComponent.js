import React from "react";
import { Card, Image } from "antd";

const CardComponent = () => {
  return (
    <Card bordered={false}>
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <p>Neque porro quisquam est qui amet, consectetur, adipisci velit...</p>
    </Card>
  );
};

export default CardComponent;