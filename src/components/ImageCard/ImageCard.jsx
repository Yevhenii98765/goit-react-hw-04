export const ImageCard = ({item, handleOpenModal}) => {
  const {urls} = item
  return <li style={{cursor: 'pointer'}}>
     <img onClick={() => handleOpenModal({src: urls.regular})} src={urls.small} alt="" />
  </li>
}
export default ImageCard