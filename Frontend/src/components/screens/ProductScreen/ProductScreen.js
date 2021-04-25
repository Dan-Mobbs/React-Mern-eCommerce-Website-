import './ProductScreen.css';
import { Container, Row, Col, Card, Button, Image, Dropdown } from 'react-bootstrap';
import Img from '../../../assets/img/img.jpg';

const ProductScreen = () => {
    return (
        <>
            <Container className="py-5 mx-auto">
                <Row>
                    <Col><Image src={Img} thumbnail /></Col>
                    <Col>
                    <Card border="secondary" style={{ width: '40rem' }}>
                        <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Text className="py-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
                                </Card.Text>      
                                <Dropdown className="py-3">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Card.Text className="py-3">
                                    Price: <span>£300</span>
                                </Card.Text>
                                <Button submit size="lg" block variant="success">Pay Now</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        </>
    )
}

export default ProductScreen

