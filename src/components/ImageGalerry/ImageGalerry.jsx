import ImageCard from "../ImageCard/ImageCard"

export const ImageGalerry = ({ photo = [] }) => {
  return <div>
    <ul>
        {photo.map(item => (
            <ImageCard key={item.id} item={item}/>
        ))}
    </ul>
  </div>
}
export default ImageGalerry