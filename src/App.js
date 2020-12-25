import './App.css';
import { Divider, Col, Row, Image, Button } from 'antd';
import ModuloCarta from "./components/ModuloCarta"

function App() {


  const cartas = {
    recomendado: [
      {index: 1, component: <ModuloCarta ancho={300} largo={200}/>},
      {index: 2, component: <ModuloCarta ancho={300} largo={200}/>},
    ],
    ultimasNoticias: [
      {index: 1, component: <ModuloCarta ancho={200} largo={140}/>},
      {index: 2, component: <ModuloCarta ancho={200} largo={140}/>},
      {index: 3, component: <ModuloCarta ancho={200} largo={140}/>},
      {index: 4, component: <ModuloCarta ancho={200} largo={140}/>},
      {index: 5, component: <ModuloCarta ancho={200} largo={140}/>},
    ]
  }

  
  return (
    <div className="App">
    <Row>
      <Col span={20} offset={2}>
      <Row >
        <Col span={6}>
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
        </Col>
        <Col span={18} >
          <Row gutter={[2,1]}>
              {cartas.recomendado.map((recom, index) => {
                return(
                <Col index={index} span={10}>
                  {recom.component}
                </Col>
              )}
              )}
          </Row>
        </Col>
      </Row>
      <Divider/>
      <Row gutter={[6,1]}>
        {cartas.ultimasNoticias.map((recom, index) => {
          return(
          <Col index={index} span={4}>
            {recom.component}
          </Col>
        )}
        )}
      </Row>
      </Col>
      </Row>
    </div>
  );
}

export default App;
