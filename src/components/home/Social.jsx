import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/thenileshmishra" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/thenileshmishra" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
      {/* <a href="https://leetcode.com/u/thenilesh/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-brackets-curly"></i>
      </a> */}
      <a
        href="https://leetcode.com/u/thenilesh/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg"
          alt="LeetCode"
          className="leetcode-img"
        />
      </a>

    </div>
  );
}

export default Social;
