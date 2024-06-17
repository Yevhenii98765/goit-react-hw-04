import { DNA } from "react-loader-spinner"
import s from './ImageGallery/ImageGallery.module.css'
export const Loader = () => {
  return <div>
    <DNA
  visible={true}
  height="80"
  width="100%"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass={s.loader}
  />
  </div>
}
export default Loader