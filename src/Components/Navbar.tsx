import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <h1>LOGO</h1>
      <ThemeSwitch />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
  border-bottom: 2px solid var(--border-color);
  box-shadow: var(--box-shadow);
  margin-bottom: 1rem;
  * {
    font-weight: bold;
    font-size: 2rem;
  }
`;

const ThemeSwitch = () => {
  return (
    <ThemeSwitchContainer>
      <ThemeSwitchButton htmlFor="theme">Toggle theme</ThemeSwitchButton>
      <ThemeSwitchInput type="checkbox" id="theme" />
    </ThemeSwitchContainer>
  );
};

const ThemeSwitchContainer = styled.div`
  padding: 0.75rem;
`;

const ThemeSwitchButton = styled.label`
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`;

const ThemeSwitchInput = styled.input`
  position: fixed;
  top: -9999px;
  left: -9999px;
`;
