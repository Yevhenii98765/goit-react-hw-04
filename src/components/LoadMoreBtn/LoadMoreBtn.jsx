import s from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ({hendleLoadMore}) => {

  return <div className={s.iner}>
           <button className={s.lm_btn} onClick={hendleLoadMore}>Load More</button>
        </div>
}

