import React from "react";
import './neon.scss'
// import styled from "styled-components";

function Neon() {
  // const { showIt } = props;

  return (
    <div className = 'container'>
      <div className="wrap">
        <h2>Cold</h2>
        <h1>Beer</h1>
        <div className="beer">
          <div className="inner"></div>
          <div className="foam">
            <div className="drip"></div>
            <div className="drip"></div>
          </div>
        </div>
        <div className="wheat">
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Neon;

// const Container = styled.div`
//   display: ${props => (props.showIt ? `flex` : `none`)};
//   justify-content: center;
// `;

// const Film = styled.video`
//   max-height: 29rem;
//   max-width: 60vw;
// `;
