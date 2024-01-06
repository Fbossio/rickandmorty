/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { queryCharactersImages } from '../services/queryCharacterImages';
import { setImages } from '../store/characterImagesSlice';
import { AppDispatch, RootState } from '../store/store';

const CarouselComponent = () => {
    const character = useSelector((state: RootState) => state.characters.character);    
    const dispatch = useDispatch<AppDispatch>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const characterImages = useSelector((state: RootState) => state.images)
    const images = characterImages.images
    
    

    useEffect(() => {
      const getLocationData = async () => {
        try {
          const parts = character.location.url.split("/location/")
          const locationId = parts[1];
          const result = await queryCharactersImages(locationId)
          dispatch(setImages(result))
          console.log(images)          
        } catch (error) {
          console.error("Error loading data: ", error);
        }
      }
      getLocationData()
    }, [dispatch, character])
  return (
    <Carousel>      
      {images && images.map((image: any) => {
        return (
          <Carousel.Item >
            <Image src={image.image}/>
            {/* <Carousel.Caption>
              <h3>{image.name}</h3>
              <p>{image.type}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        )
      })}      
    </Carousel>
  )
}

export default CarouselComponent