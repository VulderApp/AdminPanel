import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../states";
import { getSchools, getSchoolsWithPagination } from "../../../../api";
import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  TextField,
} from "@mui/material";
import { Schools } from "../../../../api/models/schools/schools";
import { NavigateFunction } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SchoolBrowserList from "./SchoolBrowserList";
import { debounce } from "lodash";

interface SchoolBrowserListProps {
  navigate: NavigateFunction;
}

const SchoolBrowserContent: React.FC<SchoolBrowserListProps> = ({
  navigate,
}) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Schools | null>(null);
  const token = useRecoilValue(jwtToken);

  const handleBrowserList = async () => {
    const response = await getSchools(token!, page);
    if (response.status !== 200) return;

    setItems(response.data);
  };

  const handleSearchBarChange = async (input: string) => {
    const response = await getSchoolsWithPagination(token!, input, page);
    if (response.status !== 200) return;

    setItems(response.data);
  };

  const debouncedSearchBar = useRef(
    debounce(async (input: string) => await handleSearchBarChange(input), 1000)
  ).current;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  useEffect(() => {
    (async () => await handleBrowserList())();
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearchBar.cancel();
    };
  }, [debouncedSearchBar]);

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="search-input"
          label="Search"
          variant="standard"
          onChange={(event) => debouncedSearchBar(event.target.value)}
        />
      </Box>
      {items ? (
        <SchoolBrowserList schools={items.schools} navigate={navigate} />
      ) : (
        <CircularProgress />
      )}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination count={items?.pages} onChange={handlePageChange} />
      </Container>
    </Container>
  );
};

export default SchoolBrowserContent;
