import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { searchPhotos } from "./services/api";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!searchQuery) return;
        setIsLoading(true);
        setError(false);
        const { results, total_pages } = await searchPhotos(searchQuery, page);
        setPhotos((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, searchQuery]);

  const handleOpenModal = (img) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPhotos([]);
    setPage(1);
  };

  const hendleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Container>
        <SearchBar onSubmit={onSubmit} />
        <ImageGallery photos={photos} handleOpenModal={handleOpenModal} />
        {isLoading && <Loader />}
        {error && (
          <div>
            <img
              src="https://static9.depositphotos.com/1010555/1192/i/450/depositphotos_11926134-stock-photo-error-concept.jpg"
              alt=""
            />
          </div>
        )}
        {!isLoading && page < totalPages && (
          <LoadMoreBtn hendleLoadMore={hendleLoadMore} />
        )}
        <ImageModal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectImg}
        />
      </Container>
    </>
  );
};

export default App;
