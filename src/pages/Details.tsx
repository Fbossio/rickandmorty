import { Container } from 'react-bootstrap'
import CarouselComponent from '../components/CarouselComponent'
import CharacterDetails from '../components/CharacterDetails'

const Details = () => {
  return (
    <Container className='justify-content-center my-4'>
      <CharacterDetails />
      <CarouselComponent />
    </Container>
  )
}

export default Details