import { useEffect } from "react";
import ImageGalerry from "./components/ImageGalerry/ImageGalerry";
import SearchBar from "./components/SearchBar/SearchBar";
import { getData } from "./services/api";

const App = () => {

useEffect(() => {
    
},[])

  return (
    <>
      <SearchBar />
      <ImageGalerry />
    </>
  );
};

export default App;
