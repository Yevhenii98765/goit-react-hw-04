import ImageCard from "../ImageCard/ImageCard"
import s from './ImageGallery.module.css'

export const ImageGallery = ({ comments = [], isLoading, setSkip}) => {
  return <div className={s.iner}>
    <ul>
        {comments.map(item => (
            <ImageCard key={item.id} item={item}/>
        ))}
    </ul>
    {!isLoading && (
        <div style={{marginTop: 50}}>
            <button onClick={() => setSkip(prev => prev + 6)}>Load more</button>
        </div>)}
  </div>
}

export default ImageGallery