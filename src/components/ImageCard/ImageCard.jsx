export const ImageCard = ({item, openPost}) => {
  const {urls} = item
  return <li onClick={() => openPost(item)} style={{cursor: 'pointer'}}>
     <img src={urls.small_s3} alt="" />
  </li>
}
export default ImageCard