import Container from '../Container/Container'
import { ImageCard } from '../ImageCard/ImageCard'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'
import { SearchBar} from '../SearchBar/SearchBar'
import s from './ImageGalerry.module.css'

export const ImageGalerry = ({onSubmit, photos, hendleLoadMore, isLoading, error, openPost, isOpen, toggleModal, CloseModal, modal}) => {



  return <div className={s.iner}>
            <Container>
            < SearchBar onSubmit={onSubmit}/>
            <ul className={s.list_style}>
              {photos.map(item => (
                <ImageCard key={item.id} item={item} openPost={openPost}/> 
              ))}
            </ul>
              {isLoading &&  <Loader />}
              {error && <div className={s.error}><img src="https://static9.depositphotos.com/1010555/1192/i/450/depositphotos_11926134-stock-photo-error-concept.jpg" alt="" /></div>}
              { !isLoading && <LoadMoreBtn hendleLoadMore={hendleLoadMore}/>}
              {isOpen && <ImageModal title={modal.title} toggleModal={toggleModal} CloseModal={CloseModal}>
                <img src={modal.urls.small_s3} alt="" />
                <p>{modal.description}</p>
              </ImageModal>}
            </Container>
        </div>
}
export default ImageGalerry