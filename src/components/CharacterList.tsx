/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Character } from '../inerfaces/characters';
import { fetchCharacters } from '../services/fetchCharacters';
import { setCharacter, setCharacters, setInfo } from '../store/slice';
import { AppDispatch, RootState } from '../store/store';

const CharacterList = () => {
    const characters = useSelector((state: RootState) => state.characters.characters);
    const page = useSelector((state: RootState) => state.characters.page);
    const info = useSelector((state: RootState)=> state.characters.info);
    const dispatch = useDispatch<AppDispatch>();

    const handleCardClick = (character: Character) => {
        dispatch(setCharacter(character));
    };

    useEffect(() => {        
        const getCharactersData = async () => {
            try {
                const result = await fetchCharacters(page)
                dispatch(setCharacters(result.results));
                dispatch(setInfo(result.info));
            } catch (error) {
                console.error("Error loading data: ", error);
            }
        }
        getCharactersData();
    }, [dispatch, page])
  return (
    <Row className="justify-content-md-center" lg={4}>
        
        {characters && characters.map((character: Character) => {
            const {id, name, status, species, image} = character;
            return (
                <Col className="d-flex" key={id}>
                    <Link to={'/details'}
                     style={{ textDecoration: 'none', color: 'inherit' }}
                     onClick={() => handleCardClick(character)}
                     >
                        <Card className="flex-fill my-2">
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