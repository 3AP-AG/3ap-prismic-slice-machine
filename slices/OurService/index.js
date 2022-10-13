import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const OurService = ({ slice }) => {
  return (
    <section>
      <div className="our-services">
        { slice?.items?.map((item, i) => (
          <div className="service" key={i}>
            <img src={item.icon.url} alt={item.icon.alt} />
            <div className="title"><PrismicRichText field={item.title}/></div>
            <PrismicRichText field={item.keywords} />
          </div>
        )) }
      </div>

      <style jsx>{`
        section {
          color: #161615;
          background-color: #fff;
          margin-top: 5rem;
        }
        .our-services {
          margin: auto;
          max-width: 1024px;
          text-align: left;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .service {
          flex: 33.33%;
        }
        .title {
          margin-bottom: 1rem;  
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: 700;
        }
    `}</style>
    </section>
  );
}

export default OurService;
