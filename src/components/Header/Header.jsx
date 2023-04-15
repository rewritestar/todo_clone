import React, { useContext } from "react";
import * as S from "./Header.styles";
import { HiSun, HiMoon } from "react-icons/hi";
import { DarkModeContext, useDarkMode } from "../../context/DarkModeContext";
const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <S.Container>
      <S.IconButton onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </S.IconButton>
      <S.Filters>
        {filters.map((f, idx) => (
          <S.Filter key={idx}>
            <S.Button selected={f === filter} onClick={() => onFilterChange(f)}>
              {f}
            </S.Button>
          </S.Filter>
        ))}
      </S.Filters>
    </S.Container>
  );
};

export default Header;
