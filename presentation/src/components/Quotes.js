import React from "react";

const Quotes = () => {
  return (
    <div className="q">
      <h4>“We love Dukaan.”</h4>
      <h5>
        Okay, we wrote these testimonials on their behalf. But you get the idea
      </h5>
      <div className="q-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          fill="none"
          viewBox="0 0 88 88"
        >
          <path
            fill="#146EB4"
            d="M88 41.32H66.656c.365 15.838 4.777 17.635 10.318 18.149l2.137.27v17.415l-2.463-.134c-7.236-.415-15.236-1.743-20.573-8.452-4.679-5.88-6.742-15.489-6.742-30.238V11H88v30.32zM38.668 11v30.32h-21.06c.366 15.838 4.635 17.635 10.176 18.149l1.995.27v17.415l-2.32-.134c-7.237-.415-15.308-1.743-20.646-8.452C2.135 62.688.001 53.08.001 38.33V11h38.667z"
          />
        </svg>
        <h1>
          “I run an apparel boutique. With Dukaan, I am able to accept orders
          from anywhere in India. Business has gone up 64% after I switched to
          Dukaan.”
        </h1>
        <h2>
          ujju banna <span>Hotel @Pichhore</span>
        </h2>
      </div>
    </div>
  );
};

export default Quotes;
