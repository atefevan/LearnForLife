import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { CloseRounded, SearchOutlined } from "@mui/icons-material";

interface SearchBarProp {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProp> = ({ state, setState }) => {
  const { colorscheme } = useColorScheme();
  return (
    <div
      className="row-center"
      style={{
        height: 40,
        width: "35vw",
        backgroundColor: colorscheme.white,
        borderRadius: 25,
        paddingInline: 15,
        paddingBlock: 5,
      }}
    >
      <div className="row-center">
        <SearchOutlined htmlColor={colorscheme.gray800} />
        <div style={{ width: 10 }} />
        <input
          id="search-query"
          style={{ width: "100%" }}
          className="search-bar"
          value={state}
          type="text"
          placeholder="Search name, id here..."
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      {state && (
        <div onClick={() => setState("")}>
          <CloseRounded htmlColor={colorscheme.gray800} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
