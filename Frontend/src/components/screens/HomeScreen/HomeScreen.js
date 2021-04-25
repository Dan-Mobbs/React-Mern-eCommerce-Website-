import './HomeScreen.css';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../../assets/img/img.jpg';

const HomeScreen = () => {
    return (
        <>
        <Container className="py-5">
            <CardDeck className="mb-5">                
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card> 
            </CardDeck>
            <CardDeck>                
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className="py-5">
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        Price<span>£300</span>
                    </Card.Text>
                    <Button variant="success"><Link to="/product/:id">Buy Now</Link></Button>{' '}
                    </Card.Body>
                </Card> 
            </CardDeck>
        </Container>    
        </>
    )
}

export default HomeScreen

