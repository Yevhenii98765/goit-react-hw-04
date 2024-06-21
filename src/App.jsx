
import { useEffect, useState } from "react";
import ImageGalerry from "./components/ImageGalerry/ImageGalerry";
import { searchPhotos } from "./services/api";
import Container from "./components/Container/Container";

const App = () => {

const [searchQuery, setSearchQueruy] = useState('');
const [page, setPage] = useState(1);
const [photos, setPhotos] = useState([])
const [isLoading, setIsLiading] = useState(false)
const [error, setError] = useState(false)
const [modal, SetModal] = useState(null)
const [isOpen, setIsOpen] = useState(false)

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

const toggleModal = () => setIsOpen(prev => !prev);
const openPost = post => {
  toggleModal()
  SetModal(post)
}

const CloseModal = () => {
  setIsOpen(false)
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
      <ImageGalerry 
      onSubmit={onSubmit} 
      photos={photos} 
      hendleLoadMore={hendleLoadMore} 
      isLoading={isLoading} error={error} 
      openPost={openPost} isOpen={isOpen} 
      toggleModal={toggleModal}
      CloseModal={CloseModal}
      modal={modal}
      />
    </Container>
    </>
  );
};

export default App;
