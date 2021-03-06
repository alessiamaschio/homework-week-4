import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <small className="copyright">
        Coded with <i className="far fa-heart"></i> by
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/alessia-maschio-a8317734/"
          target="_blank"
          rel="noreferrer"
        >
          Alessia
        </a>
        &copy;2021
      </small>
      <small className="git-hub">
        Open-source code on
        <a
          href="https://github.com/alessiamaschio/homework-week-4"
          target="_blank"
          className="git-hub-link"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </small>
    </footer>
  );
}
