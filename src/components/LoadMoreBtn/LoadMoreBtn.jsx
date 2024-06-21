import s from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ({hendleLoadMore}) => {

  return <div className={s.iner}><button onClick={hendleLoadMore}>Load More</button></div>
}
export default LoadMoreBtn