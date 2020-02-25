import React from "react";
import beer_video from "../media/beer.mp4";
import styled from "styled-components";

function Video(props) {

    const {showIt} = props;

  return (
      <Container showIt={showIt}>
          <Film id="background-video" loop autoPlay>
            <source
              src={beer_video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </Film>
      </Container>
  );
}

export default Video;

const Container = styled.div`
display: ${props => (props.showIt ? `flex` : `none`)};
  justify-content: center;
`;

const Film = styled.video`
height: 29rem;
`;
