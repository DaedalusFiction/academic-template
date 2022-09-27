import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";

const BookItem = ({ book, isReversed }) => {
    return (
        <Grid
            className="section"
            container
            spacing={8}
            direction={isReversed ? "wrap" : "row-reverse"}
        >
            <Grid item xs={12} md={5}>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".25em",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="caption">{`${book.publisher}, ${book.date}`}</Typography>
                    <Typography variant="h3" sx={{ marginBottom: ".25em" }}>
                        {book.title}
                    </Typography>

                    <Typography>{book.description}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".25em",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <NativeImage image={book.image} maxSize={600} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default BookItem;
