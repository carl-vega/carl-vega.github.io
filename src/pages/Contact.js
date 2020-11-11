import React from "react";
import Github from "../images/github.png";
import Gmail from "../images/gmail.svg";
import LinkedIn from "../images/linkedin.png";
import PDF from "../images/pdf.png";
import Voice from "../images/voice.svg";
import Resume from "../doc/resume.pdf";
import {
  contactWrapper,
  contactArea,
  iconWrapper,
  icon,
  contactMainTitle,
  contactTitleWrapper,
  contactTitle,
} from "./Styles.module.css";

export default function Contact() {
  return (
    <>
      <main className={contactWrapper}>
        <div className={contactArea}>
          <h4 className={contactMainTitle}>
            Social Media and Contact Information
          </h4>
          <hr />
          <div className={contactTitleWrapper}>
            <div className={contactTitle}>
              <h5>
                <strong>Name: &nbsp;</strong>
              </h5>
              <h5>
                <strong>Resume: &nbsp;</strong>
              </h5>
              <h5>
                <strong>Email: &nbsp;</strong>
              </h5>
              <h5>
                <strong>Github: &nbsp;</strong>
              </h5>
              <h5>
                <strong>LinkedIn: &nbsp;</strong>
              </h5>
              <h5>
                <strong>Google Voice: &nbsp;</strong>
              </h5>
            </div>
            <div>
              <h5>
                <strong> &ensp;Carl Vega</strong>
              </h5>
              <h5>
                &ensp;
                <a href={Resume} className={iconWrapper} download>
                  <img src={PDF} className={icon} alt="" />
                </a>
                &ensp;Resumé.pdf&nbsp;
              </h5>
              <h5>
                &ensp;
                <a
                  href="mailto:carljasonvega@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={iconWrapper}
                >
                  <img src={Gmail} alt="" className={icon} />
                </a>
                &ensp;carljasonvega@gmail.com&nbsp;
              </h5>
              <h5>
                &ensp;
                <a
                  href="https://github.com/carl-vega"
                  target="_blank"
                  rel="noreferrer"
                  className={iconWrapper}
                >
                  <img src={Github} alt="" className={icon} />
                </a>
                &ensp;https://github.com/carl-vega&nbsp;
              </h5>
              <h5>
                &ensp;
                <a
                  href="https://www.linkedin.com/in/carl-vega/"
                  target="_blank"
                  rel="noreferrer"
                  className={iconWrapper}
                >
                  <img src={LinkedIn} alt="" className={icon} />
                </a>
                &ensp;https://www.linkedin.com/in/carl-vega/&nbsp;
              </h5>
              <h5>
                &ensp;
                <a href="tel:+1-919-438-1853" className={iconWrapper}>
                  <img src={Voice} alt="" className={icon} />
                </a>
                &ensp;+1-919-438-1853&nbsp;
              </h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
