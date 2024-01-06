import Container from 'react-bootstrap/Container';
import CharacterList from '../components/CharacterList';
import Paginator from '../components/Paginator';

const Characters = () => {
  return (
    <Container >
      <Container className='my-5'>
        <CharacterList/>
      </Container>
      <Container className='my-3'>
        <Paginator/>
      </Container>
    </Container>
  )
}

export default Characters