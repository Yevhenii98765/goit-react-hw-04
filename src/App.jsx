
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { searchPhotos } from "./services/api";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {

const [searchQuery, setSearchQueruy] = useState('');
const [page, setPage] = useState(1);
const [photos, setPhotos] = useState([])
const [isLoading, setIsLiading] = useState(false)
const [error, setError] = useState(false)
const [isOpenModal, setIsOpenModal] = useState(false)
const [selectImg, setSelectImg] = useState(null)

useEffect(() => {

  const getData = async () => {
    try {
      if(!searchQuery) return 
      setIsLiading(true)
      setError(false)
      const {results} = await searchPhotos(searchQuery, page)
      setPhotos(prev => [...prev, ...results,])
    } catch (error) {
      setError(error);
    } finally {
      setIsLiading(false)
    }
  }
  getData()
  },[page, searchQuery,])

const handleOpenModal = (img) => {
  setIsOpenModal(true)
  setSelectImg(img)
}

const closeModal = () => {
  setIsOpenModal(false)
  setSelectImg(null)
}

const onSubmit = (searchQuery) => {
  setSearchQueruy(searchQuery);
  setPhotos([])
  setPage(1)
}

const hendleLoadMore = () => {
  setPage(prev => prev + 1);
}


  return (
    <>
    <Container >
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery  
      photos={photos} 
      handleOpenModal ={handleOpenModal}
      />
        {isLoading && <Loader />}
        {error && (
          <div className={s.error}>
            <img
              src="https://static9.depositphotos.com/1010555/1192/i/450/depositphotos_11926134-stock-photo-error-concept.jpg"
              alt=""
            />
          </div>
        )}
        {isLoading && <LoadMoreBtn hendleLoadMore={hendleLoadMore}/>}
        <ImageModal modalIsOpen={isOpenModal} closeModal={closeModal} selectImg={selectImg}/>
    </Container>
    </>
  );
};

export default App;
