/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Character } from '../inerfaces/characters';
import { fetchCharacters } from '../services/fetchCharacters';

const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState('1')

    useEffect(() => {        
        const getCharactersData = async () => {
            try {
                const result = await fetchCharacters(page)
                setCharacters(result.results)
            } catch (error) {
                console.error("Error loading data: ", error);
            }
        }
        getCharactersData();
    }, [page])
  return (
    <Row className="justify-content-md-center" lg={4}>
        
        {characters && characters.map((character: Character) => {
            const {id, name, status, species, image} = character;
            return (
                <Col className="d-flex">
                    <Link to={'/details'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card key={id} className="flex-fill my-2">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle>
                            <Badge bg={status === 'Alive' ? 'success' : status === 'Dead' ? 'danger' : 'secondary'}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </Badge>
                            </Card.Subtitle>
                            <Badge bg='primary'>{species}</Badge>                        
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )
})}
               
    </Row>
  )
}

export default CharacterList