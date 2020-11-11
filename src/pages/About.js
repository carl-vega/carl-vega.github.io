import React from "react";
import { Link } from "react-router-dom";
import {
  photoCredit,
  aboutWrapper,
  aboutArea,
  aboutTitle,
} from "./Styles.module.css";

export default function About() {
  return (
    <>
      <main className={aboutWrapper}>
        <div className={aboutArea}>
          <h4 className={aboutTitle}>Welcome To Me</h4>
          <p>
            To become a retail manager there must be effort put forth, and many
            lessons learned along the way. But the most important lesson is that
            change is necessary sometimes to continue to move forward. So, when
            hard work comes I am resolute, and when an adaptation is required I
            evolve. This is also my approach to coding, I am determined and
            flexible.
          </p>
          <p>
            As a techvangelist, I fill my free time viewing different
            applications and technology theories, viewing the newest gadgets,
            programs, and technologies. All of this build toward my goal of
            understanding the latest hardware and software available or in the
            coming future.
          </p>
          <p>
            On a personal level, I long to establish a gritty personality, but
            grit is a long-term compounding goal for achieving expertise. That
            is my philosophy with technology, to go forward and create something
            that has an impact. It will not happen in a singular moment, but in
            the multitude of moments that brings me one step closer each time.
          </p>

          <Link to="/portfolio">👉🏻👉🏻</Link>

          <div className={photoCredit}>
            <span className="white">
              Photo by Miguel Á. Padriñán from Pexels
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
