import { FC } from 'react'
import { Container } from './styles';
import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import Specials from '../../components/Specials';
import CustomersSay from '../../components/CustomersSay';
import Chicago from '../../components/Chicago';
import Footer from '../../components/Footer';

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </Container>
  )
}

export default Home;