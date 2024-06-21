import { useEffect } from 'react';
import s from './ImageModal.module.css'


const ImageModal = ({children, title = 'Default modal', CloseModal  }) => {
// до цього handleBackDropClick все робило  

useEffect(() => {
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      CloseModal();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [CloseModal]);

const handleBackdropClick = e => {
  if (e.target === e.currentTarget) {
    CloseModal();
  }
};

useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = 'auto';
  };
}, []); 

    return (
        <div onClick={handleBackdropClick} className={s.wrapper}>
            <div className={s.content}>
                <>
                    <h1>{title}</h1>
                    <hr />
                </>
                <button className={s.closeBtn} onClick={CloseModal}>x</button>
                {children}
            </div>
        </div>
    )
}

export default ImageModal