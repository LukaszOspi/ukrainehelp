import React from 'react'
import Image from '../elements/Image'

const Tile = (props) => {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <a href={props.url}>
              <Image
                src={props.picture}
                alt={props.alt}
                width={props.w}
                height={props.h}
              />
            </a>
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">{props.title} </h4>
          <div className="m-0 text-sm">{props.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Tile
