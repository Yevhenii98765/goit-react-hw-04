export const ImageCard = ({ item }) => {

    const { id, src } = item;

  return <li>
        <img src={src} alt="" />
  </li>
}
export default ImageCard