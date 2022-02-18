import React, { ReactElement, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../states";
import { getSchools } from "../../../../api";
import {
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
} from "@mui/material";
import { Schools } from "../../../../api/models/schools/schools";

const SchoolBrowserList = (): ReactElement => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Schools | null>(null);
  const token = useRecoilValue(jwtToken);

  const handleBrowserList = async () => {
    const response = await getSchools(token!, page);
    if (response.status !== 200) return;

    setItems(response.data);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  useEffect(() => {
    (async () => await handleBrowserList())();
  }, []);

  return (
    <Container>
      {items ? (
        <List>
          {items!.schools.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
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

export default SchoolBrowserList;
