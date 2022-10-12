import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Testimonial = ({ slice }) => (
  <section>
    <div className="testimonial">
      <div className="reviewer">
        <img className="image" src={slice.primary.image.url} alt={slice.primary.image.alt} />
        <div className="name">
          <PrismicRichText field={slice.primary.name} />
        </div>
        <div className="title">
          <span >{ slice.primary.title }</span>
        </div>
      </div>
      <div className="quote">
        <PrismicRichText field={slice.primary.quote} />
      </div>
    </div>
    <style jsx>{`
        section {
          color: #161615;
          background-color: #fff;
          margin-top: 5rem;
        }
        .testimonial {
          margin: auto;
          max-width: 1024px;
          text-align: left;
          display: flex;
        }
        .reviewer {
          width: 33%;
          padding: 0 1rem 0 1rem;
        }
        .image {
          margin-bottom: 1rem;
          border-radius: 9999px;
          max-width: 200px;
        }
        .name {
          margin-bottom: 1rem;
        }
        .title {
          margin-bottom: 1rem;  
          text-transform: uppercase;      
        }
        .quote {
          flex: 1;
          font-size: 2rem;
          font-weight: 400;
        }
    `}</style>
  </section>
)

export default Testimonial;
