import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/theme";
import { pages, siteName, heroContent } from "../../siteInfo";
import NativeImage from "../general/NativeImage.js";

const Hero = () => {
    return (
        <Box sx={{ paddingTop: "6rem" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} wrap="wrap-reverse">
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1em",
                                justifyContent: "center",
                            }}
                        >
                            <Typography variant="h1">
                                {heroContent.title}
                            </Typography>
                            <Box>
                                {heroContent.highlights.map(
                                    (highlight, index) => {
                                        return (
                                            <Typography
                                                key={index}
                                                sx={{ marginBottom: ".5em" }}
                                            >
                                                {highlight}
                                            </Typography>
                                        );
                                    }
                                )}
                            </Box>
                            <Box sx={{ display: "flex", gap: "1em" }}>
                                {heroContent.buttons.map((button, index) => {
                                    return (
                                        <Link key={index} href={button.href}>
                                            <Button
                                                variant={button.variant}
                                                size="large"
                                            >
                                                {button.text}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <NativeImage maxSize={2000} image={heroContent.image} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
