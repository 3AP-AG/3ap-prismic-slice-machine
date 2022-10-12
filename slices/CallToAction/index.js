import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const CallToAction = ({ slice }) => (
  <section>
    <div className="callToAction">
      <div className="overline">
        <PrismicRichText field={slice.primary.overline} />
      </div>
      <div className="title">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="description">
      {
        slice.primary.description ?
          <PrismicRichText field={slice.primary.description} />
        : <p>start by editing this slice from inside Slice Machine!</p>
      }
      </div>
      <button className="catBtn" onClick={() => console.log(`Navigating to ${slice.primary.url}`)}>{ slice.primary.callToAction }</button>
    </div>
    <style jsx>{`
        section {
          color: #161615;
          background-color: #fff;
          //padding-top: 2rem;
          margin-top: 4rem;
          margin-bottom: 4rem;
        }
        .callToAction {
          margin: auto;
          max-width: 1024px;
          text-align: left;
          padding: 2rem 0 1rem 0;
        }
        .overline {
          text-decoration-line: none;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .title {
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .description {
          margin-bottom: 2rem;
        }
        .catBtn {
          width: 250px;
          height: 50px;
          text-transform: uppercase;
          border: 1px solid #161615;
          border-radius: 99999px;
        }
        .catBtn::after {
          content: " -->";
        }
    `}</style>
  </section>
)

export default CallToAction
