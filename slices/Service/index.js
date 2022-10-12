import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Service = ({ slice }) => (
  <section>
    <div className="service">
      <div className="icon">
        {
          <img src={slice.primary.icon.url} alt={slice.primary.icon.alt} />
        }
      </div>
      <div className="title">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="keywords">
        { slice?.items?.map((item, i) => <p key={i}>{ item.keyword }</p>) }
      </div>
    </div>
    <style jsx>{`
        section {
          color: #161615;
          margin: auto;
          background-color: #fff;
        }
        .service {
          //max-width: 1024px;
          padding: 2rem;
          text-align: left;
        }
        .icon {
          width: 4rem;
          height: 4rem;
          margin-bottom: 2.5rem;
        }
        .title {
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.2;
          letter-spacing: .01rem;
          text-transform: uppercase;
        }
        .keywords {
          text-transform: capitalize;
        }
    `}</style>
  </section>
)

export default Service
