import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import BookItem from "../../../components/publications/BookItem";
import { books } from "../../../siteInfo";

const index = () => {
    return (
        <Box className="section">
            <Typography
                variant="h1"
                sx={{ marginTop: "1em", textAlign: "center" }}
            >
                Books
            </Typography>
            <Container>
                {books.map((book, index) => {
                    return (
                        <Box key={index}>
                            <BookItem
                                book={book}
                                isReversed={index % 2 === 0}
                            />
                            <Divider
                                sx={{ maxWidth: "30rem", margin: "0 auto" }}
                            />
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
};

export default index;
