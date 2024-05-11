import { styled } from "@mui/material/styles";

import Image from "../../assets/images/ScoreAppBackground.jpg";

const AppBackground = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.text.secondary};
  padding: ${theme.spacing(3)};
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  z-index:-1;
  position: absolute; 
  height: 100%; 
  width: 100%; 
`
);

export default AppBackground;
