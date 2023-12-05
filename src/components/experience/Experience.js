import React from "react";
import "./style.css";
import Tools from "../tools/Tools";
export default function Experience() {
  return (
    <div id='experience'>
      <h1>Recent Career</h1>
      <p>
        You can find the details of my work on my resume. Here I have visual
        breakdowns of one of my favorite projects at my two most recent
        companies. These are largely simplified as full details are protected
        under NDA and can't be disclosed.
      </p>
      <p>
        I'd be glad to get into details (as much as NDA allows) if we ever chat.
      </p>
      <details open>
        <summary>
          ACI <img src='/imgs/albertsons.png' alt='albertsons logo' />
        </summary>
        <strong>
          Product:{" "}
          <a
            href='https://www.safeway.com/meals'
            target='_blank'
            rel='noreferrer'
          >
            https://www.safeway.com/meals
          </a>
        </strong>
        <p>
          Under the hood, parsing an ingredient name from freeform text and
          matching/searching the right products are very complex. Both were
          implemented from scratch with very highly accurate results.
        </p>
        <img
          className='system-design'
          src='/imgs/aci-project.jpg'
          alt='system design'
        />

        <Tools
          tools={[
            "elasticsearch",
            "sqlserver",
            "nodejs",
            "typescript",
            "javascript",
            "nextjs",
          ]}
        />
      </details>
      <details open>
        <summary>
          SCB <img src='/imgs/scb.svg' alt='sterling capital brokers logo' />
        </summary>
        <strong>
          Product:{" "}
          <a
            href='https://sterlingcapitalbrokers.com'
            target='_blank'
            rel='noreferrer'
          >
            https://sterlingcapitalbrokers.com
          </a>
        </strong>
        <p>
          Sending out feed files to carriers in a timely manner was extremely
          important. So the entire pipeline had to function all the time to make
          it happen. Otherwise people could be refused covered medication.
        </p>
        <img
          className='system-design'
          src='/imgs/scb-project.jpg'
          alt='system design'
        />
        <Tools
          tools={[
            "rails",
            "postgres",
            "nodejs",
            "typescript",
            "javascript",
            "eventstore",
          ]}
        />
      </details>
    </div>
  );
}
