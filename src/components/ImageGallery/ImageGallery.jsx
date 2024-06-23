import Container from "../Container/Container";
import { ImageCard } from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export const ImageGallery = ({photos, handleOpenModal,}) => {
  return (
    <div className={s.iner}>
      <Container>
        <ul className={s.list_style}>
          {photos.map((item) => (
            <ImageCard key={item.id} item={item} handleOpenModal={handleOpenModal}/>
          ))}
        </ul>
      </Container>
    </div>
  );
};
export default ImageGallery;
