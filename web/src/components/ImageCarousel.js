import React from 'react'

import ReactSwipe from 'react-swipe'

import NextIcon from '../assets/icons/next.svg'

const Carousel = (props) => {
  const { images } = props
  const imageArray = images.map((image, index) => {
    return (
      <div key={index}>
        <img
          src={image.url}
          className="slide"
          style={{ maxWidth: '100%', maxHeight: '70vh' }}
          alt={image.alt || ''}
        />
        <h1>{image.caption}</h1>
      </div>
    )
  })
  let reactSwipeEl
  return (
    <>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {imageArray}
      </ReactSwipe>
      <NextIcon
        id="previous"
        onClick={() => reactSwipeEl.prev()}
        alt="Previous"
      />
      <NextIcon id="next" onClick={() => reactSwipeEl.next()} />
    </>
  )
}

export default Carousel
