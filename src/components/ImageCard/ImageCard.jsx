import s from './ImageCard.module.css'

export const ImageCard = ({ item }) => {

    const {id, body, user} = item;

    const {fullName} = user

  return <li className={s.li_style}>
    <div className={s.wraper}>
        <h2>Name: </h2>
        <h3>{fullName}</h3>
    </div>
    <div className={s.wraper}>
        <h2>Comment: </h2>
        <p>{body}</p>
    </div>
  </li>
}
export default ImageCard