import "./ImageGrid.scss"
import React, {useState, useEffect} from 'react'

/**
 * Grid of thumbnails (screenshots/sketches) that zoom slightly on
 * hover, and open in a fullscreen lightbox on click.
 *
 * @param {String[]} images
 */
function ImageGrid({ images }) {
    const [lightboxSrc, setLightboxSrc] = useState(null)

    useEffect(() => {
        if (!lightboxSrc)
            return

        const _onKeyDown = (e) => {
            if (e.key === 'Escape')
                setLightboxSrc(null)
        }

        window.addEventListener('keydown', _onKeyDown)
        return () => window.removeEventListener('keydown', _onKeyDown)
    }, [lightboxSrc])

    if (!images || images.length === 0)
        return <></>

    return (
        <>
            <div className={`expandable-card-image-grid`}>
                {images.map((src, key) => (
                    <img src={src}
                         alt={`Image ${key + 1}`}
                         key={key}
                         onClick={() => setLightboxSrc(src)}/>
                ))}
            </div>

            {lightboxSrc && (
                <div className={`image-lightbox-backdrop`} onClick={() => setLightboxSrc(null)}>
                    <button className={`image-lightbox-close`} onClick={() => setLightboxSrc(null)}>
                        <i className={`fa-solid fa-xmark`}/>
                    </button>
                    <img src={lightboxSrc}
                         className={`image-lightbox-image`}
                         onClick={(e) => e.stopPropagation()}
                         alt={`Enlarged view`}/>
                </div>
            )}
        </>
    )
}

export default ImageGrid