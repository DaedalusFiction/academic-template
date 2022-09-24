import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import NativeImage from "../general/NativeImage";

const Showcase = ({ showcaseContent }) => {
    return (
        <Box sx={{ background: theme.palette.primary.main }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: { xs: "none", md: "6rem" } }}>
                        <NativeImage
                            maxSize={2000}
                            image={showcaseContent.image}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: ".5em",
                        }}
                    >
                        <Typography variant="h5">
                            {showcaseContent.subTitle}
                        </Typography>
                        <Typography variant="h2">
                            {showcaseContent.title}
                        </Typography>
                        <Typography sx={{ maxWidth: "45ch" }}>
                            {showcaseContent.description}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                marginTop: "1em",
                            }}
                        >
                            {showcaseContent.buttons.map((button, index) => {
                                return (
                                    <Link key={index} href={button.href}>
                                        <Button
                                            variant={button.variant}
                                            size="large"
                                            color="secondary"
                                        >
                                            {button.text}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Showcase;
