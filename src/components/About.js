import React from "react";
import styled from "styled-components";

function About(props) {
  const { showIt } = props;

  return (
    <Container showIt={showIt}>
      <Text>
        בשנת 1989 הקים חנוך בראל את "פאב ראש פינה" במרכז ברודצקי ברמת אביב, כדי
        שיהיה לו תירוץ לעשן ולשתות בכל ערב. מאז, הפך פאב "ראש פינה" לפאב השכונתי
        של רמת אביב, כבר 31 שנה.
      </Text>
      <Text>
        מבלי להיכנע לטרנדים חולפים ומבלי להתחנף אך עם "פלייליסט" מצויין, מנות
        פאבים קלאסיות מהמטבח ומתן דגש על אהבת הלקוחות, אירוח ושמחה ללא גבול.
      </Text>
      <Text>
        נשמח שתקפצו לבקר ותהיו גם אתם "ראש- פינאים" גאים.
      </Text>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: ${props => (props.showIt ? `flex` : `none`)};
  justify-content: center;
  max-width: 100vw;
  flex-wrap: wrap;
`;

const Text = styled.div`
  margin: auto;
  font-family: "Suez One";
  direction: rtl;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  width: 60vw;
`;
