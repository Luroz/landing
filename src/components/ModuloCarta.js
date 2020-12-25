import {Card} from "antd"

const ModuloCarta = ({ancho, largo}) => {

  const {Meta} = Card

  return (
    <Card
    hoverable
    style={{ width: ancho, height: largo }}
    cover={<img alt="example" src="https://icdn.football-espana.net/wp-content/uploads/2020/11/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg" />}
    >
    <Meta description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque nunc tortor, ultricies luctus purus ultrices non.  " />
    </Card>
  )
}

export default ModuloCarta