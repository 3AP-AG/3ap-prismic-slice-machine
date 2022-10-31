import React from "react";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

const defaultClass = "default";
const darkModeClass = "darkMode";

const CallToAction = ({ slice }) => (
  <section
    className={clsx({
      [defaultClass]: slice.variation === "default",
      [darkModeClass]: slice.variation === "darkMode",
    })}
  >
    <div className="callToAction">
      <div className="overline">
        <PrismicRichText field={slice.primary.overline} />
      </div>
      <div className="title">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="description">
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </div>
      <button
        className="catBtn"
        onClick={() => console.log(`Navigating to ${slice.primary.url}`)}
      >
        {slice.primary.callToAction}
      </button>
    </div>
    <style jsx>{`
      section {
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
      .default {
        color: #161615;
        background-color: #fff;
      }
      .darkMode {
        color: #fff;
        background-color: #161615;
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
        border-radius: 99999px;
      }
      .default .catBtn {
        border: 1px solid #161615;
      }
      .darkMode .catBtn {
        border: 1px solid #fff;
      }
      .catBtn::after {
        content: " -->";
      }
    `}</style>
  </section>
);

export default CallToAction;
