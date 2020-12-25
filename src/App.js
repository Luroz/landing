import './App.css';
import { Divider, Col, Row, } from 'antd';



import Concursos from "./components/Concursos";
import CardComponent from "./components/CardComponent";
import Title from "./components/Title";

function App() {


  const cartas = {
    ultimasNoticias: [
      {index: 1, component: <CardComponent/>},
      {index: 2, component: <CardComponent/>},
      {index: 3, component: <CardComponent/>},
      {index: 4, component: <CardComponent/>},
      {index: 5, component: <CardComponent/>},
      {index: 5, component: <CardComponent/>},
    ]
  }

  
  return (
    <div className="App" style={{ marginInline: "10%" }}>
      <Row>
        <Col md={8}>
          <Title title="concursos" />
          <Concursos />
          <Concursos />
          <Concursos />
        </Col>
        <Col md={8}>
          <CardComponent />
        </Col>
        <Col md={8}>
          <CardComponent />
        </Col>
      </Row>
      <Divider/>
      <Title title="concursos" />
      <Row gutter={[6,1]}>
        {cartas.ultimasNoticias.map((recom, index) => {
          return(
          <Col index={index} span={4}>
            {recom.component}
          </Col>
        )}
        )}
      </Row>
    </div>
  );
}

export default App;
