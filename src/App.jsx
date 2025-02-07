import { Col, Container, Image, Row } from 'react-bootstrap'
import './App.css';
import moneyIcon from "./assets/money.png";
import ListDepense from './component/ListDepense';
import AddDepenseForm from './component/AddDepenseForm';

const App = () => {

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h1>
              <Image src={moneyIcon} rounded fluid />
              Gestionnaire de dépenses personnelles
            </h1><hr />
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row>
          <Col lg={6}>
            <ListDepense />
          </Col>
          <Col lg={6}>
            <AddDepenseForm />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
