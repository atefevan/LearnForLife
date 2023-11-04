import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { CloseRounded, SearchOutlined } from "@mui/icons-material";

interface SearchBarProp {
  style?: any;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const FilterItem = ({ item }: any) => {
  return (
    <div
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
      }}
    >
      <h3>{item}</h3>
    </div>
  );
};

const ITEMS = ["Gender", "AGE", "Salary"];

const SearchBar: React.FC<SearchBarProp> = ({ state, setState, style }) => {
  const { colorscheme } = useColorScheme();
  return (
    <div
      //className="row-center"
      style={{
        minHeight: 40,
        width: "35vw",
        backgroundColor: colorscheme.white,
        borderRadius: 25,
        paddingInline: 15,
        paddingBlock: 5,
        maxHeight: 250,
        // height: state ? 100 : 40,
        position: "absolute",
        // top: 15,
        left: "20vw",
        ...style,
      }}
    >
      <div>
        <div className="row-center" style={{ height: 40 }}>
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
        {state && (
          <>
            <div
              className="row-center"
              style={{
                maxWidth: "35vw",
                overflow: "scroll",
                scrollbarWidth: "none",
              }}
            >
              {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map(
                (item) => (
                  <FilterItem item={item} />
                )
              )}
            </div>
            <div style={{ overflow: "scroll", maxHeight: 150 }}>
              {Array(50)
                .fill(0)
                .map((item) => (
                  <h1>{item}</h1>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
