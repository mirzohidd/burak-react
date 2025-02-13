import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { Box, Container, Stack } from "@mui/material";
import { CardOverflow } from "@mui/joy";
import { DescriptionOutlined } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

const populsrDishesRetriever = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({
    popularDishes,
  })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(populsrDishesRetriever);
  console.log("popularDishes", popularDishes);
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame" direction="row" spacing={2}>
            {popularDishes.length !== 0 ? (
              popularDishes.map((product:Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;

                return (
                  <CssVarsProvider key={product._id}>
                    <Card className="card" sx={{ width: 250 }}>
                      <CardCover>
                        <img src={imagePath} alt={product.productName} />{" "}
                        
                      </CardCover>
                      <CardCover className="card-cover" />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="center">
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}>
                            {product.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}>
                            {product.productView}
                            <VisibilityIcon sx={{ marginLeft: 1 }} />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          borderColor: "neutral.outlinedBorder",
                          height: "60px",
                        }}>
                        <Typography
                          startDecorator={<DescriptionOutlined />}
                          textColor="neutral.300">
                          {product.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
