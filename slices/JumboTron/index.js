import React from "react";
import { PrismicRichText } from "@prismicio/react";

const JumboTron = ({ slice }) => (
  <section>
    <div className="jumbotron">
      <div className="title">
        <PrismicRichText field={slice.primary.overline} />
      </div>
      <div className="text">
        <PrismicRichText field={slice.primary.text} />
      </div>
      <img
        style={{ backgroundColor: "white" }}
        src={slice.primary.avatar.url}
        alt={slice.primary.avatar.alt}
      />
    </div>
    <style jsx>{`
      section {
        color: #fff;
        background-color: #161615;
        min-height: 250px;
        padding-top: 2rem;
        margin-bottom: 2rem;
      }
      .jumbotron {
        margin: auto;
        max-width: 1024px;
        text-align: left;
      }
      .title {
        margin-bottom: 1rem;
        display: inline-block;
      }
      .text {
        font-size: 32px;
        font-weight: 700;
      }
    `}</style>
  </section>
);

export default JumboTron;
