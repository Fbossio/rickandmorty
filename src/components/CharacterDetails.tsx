import { useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisode } from '../services/fetcEpisodes';
import { setEpisode } from '../store/episodeSlice';
import { AppDispatch, RootState } from '../store/store';


const CharacterDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const episode = useSelector((state: RootState) => state.episodes.episode)

    useEffect(() => {
        const getEpisodeData = async () => {
            try {
                const parts = character.episode[0].split("/episode/")
                const episodeId = parts[1];
                const result = await fetchEpisode(episodeId)
                dispatch(setEpisode(result))
            } catch (error) {
                console.error("Error loading data: ", error);
            }
        }
        getEpisodeData()
    }, [dispatch, episode])
    const character = useSelector((state: RootState) => state.characters.character);
    return (
        <>
            <div className="details-container">
                <div className="details-title d-flex align-items-center justify-content-center my-4">
                    <h1>Character Details</h1>
                </div>
                <Container className='d-flex align-items-center justify-content-center my-4'>
                    
                    <Row>
                        <Col className='my-2'>
                        <div className="character-image">
                            <img src={character.image} alt="Character Image" />
                        </div>
                        </Col>
                    <Col>
                        <div className="character-details">
                            <Table striped="columns" className='my-2'>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{character.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{character.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Species</td>
                                        <td>{character.species}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{character.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Origin</td>
                                        <td>{character.origin.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Appearances</td>
                                        <td>{character.episode.length}</td>
                                    </tr>
                                    <tr>
                                        <td>First Appearance</td>
                                        <td>{`${episode.episode} - ${episode.name}`}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CharacterDetails