import { Box, CardContent, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriverTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";

const topUsersRetriever = createSelector(retriverTopUsers, (topUsers) => ({
  topUsers,
}));
export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;

                  return (
                    <Card
                      variant="outlined"
                      sx={{ width: 320 }}
                      key={member._id}>
                      <CardOverflow sx={{ height: 273, padding: 0 }}>
                        <img src={imagePath} />
                      </CardOverflow>

                      <CardOverflow className="member-nickname ">
                        <Box>{member.memberNick}</Box>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className={"no-data"}>No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
