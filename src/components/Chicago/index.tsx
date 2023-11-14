import { FC } from "react";
import { Container, Content, Image } from "./styles";
import marioAdrianA from "../../assets/MarioAdrianA.jpg";
import marioAdrianB from "../../assets/MarioAdrianB.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from Mediterranean region.
        </p>
      </Content>
      <Image>
        <img src={marioAdrianA} alt="Mario and Adrian" />
        <img src={marioAdrianB} alt="Mario and Adrian" />
      </Image>
    </Container>
  )
}

export default Chicago