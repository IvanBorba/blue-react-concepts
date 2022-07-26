import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledNavButton } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledNavButton onClick={() => navigate("/")}>Home</StyledNavButton>
      <StyledNavButton red onClick={() => navigate("/login")}>
        Login
      </StyledNavButton>
      <StyledNavButton blue onClick={() => navigate("/register")}>
        Register
      </StyledNavButton>
    </StyledHeader>
  );
};

export default Header;
