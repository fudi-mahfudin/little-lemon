import { FC, HTMLAttributes } from "react";
import { Cards, Container, Title } from "./styles";
import CustomersSayCard from "../CustomersSayCard";
import person_1 from "../../assets/person_1.jpg";
import person_2 from "../../assets/person_2.jpg";
import person_3 from "../../assets/person_3.jpg";
import person_4 from "../../assets/person_4.jpg";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What our customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg={person_1}
          customerName="Jane"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        <CustomersSayCard
          rating={3}
          customerImg={person_2}
          customerName="Leo"
          testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
        <CustomersSayCard
          rating={4}
          customerImg={person_3}
          customerName="David"
          testimonial="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!"
        />
        <CustomersSayCard
          rating={5}
          customerImg={person_4}
          customerName="Jessica"
          testimonial="The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."
        />
      </Cards>
    </Container>
  )
}

export default CustomersSay