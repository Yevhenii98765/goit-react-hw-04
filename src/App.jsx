import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getPost } from "./services/api";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {

  const [comments, setComments] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false)
        const {comments } = await getPost({ skip });
        setComments(prev => [...prev, ...comments]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

    };
    getData(skip);
  },[skip])


  return (
    <>
      <SearchBar/>
      < ImageGallery comments={comments} setSkip={setSkip} isLoading={isLoading}/>
      {isLoading && < Loader />}
      {error && <div>Sometging weat wrong</div>}

    </>
  );
};

export default App;
