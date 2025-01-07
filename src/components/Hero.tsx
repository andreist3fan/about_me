import {alpha} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: "100%",
                backgroundImage:
                    theme.palette.mode === "light"
                        ? "linear-gradient(180deg, #CEE5FD, #FFF)"
                        : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
                backgroundSize: "100% 50%",
                backgroundRepeat: "no-repeat",
            })}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: {xs: 14, sm: 20},
                    //pb: {xs: 8, sm: 12},
                }}
            >
                <Stack spacing={2} useFlexGap sx={{width: {xs: "100%", sm: "70%"}}}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: "flex",
                            flexDirection: {xs: "column", md: "row"},
                            alignSelf: "center",
                            textAlign: "center",
                            fontSize: "clamp(3.5rem, 10vw, 4rem)",
                        }}
                    >
                        Hi, I'm&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: "clamp(3rem, 10vw, 4rem)",
                                color: (theme) =>
                                    theme.palette.mode === "light"
                                        ? "primary.main"
                                        : "primary.light",

                                fontWeight: "600",
                            }}
                        >
                            Andrei.
                        </Typography>
                    </Typography>

                    <Stack
                        direction="row"
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{pt: 2, width: {xs: "100%", sm: "auto"}}}
                    >
                        <Typography
                            textAlign="left"
                            color="text.secondary"
                            sx={{alignSelf: "center", width: {sm: "100%", md: "80%"}}}
                        >
                            I'm a second-year Computer Science and Engineering student at TU
                            Delft, passionate about exploring new skills and experiences.
                        </Typography>
                        <Box
                            id="image"
                            sx={(theme) => ({
                                //mt: {xs: 8, sm: 10}, // xs - extra small, sm - small (screen sizes)
                                ml: {xs: "auto", sm: 4},
                                alignSelf: "right",
                                width: "20vmin",
                                height: "20vmin",
                                backgroundImage:
                                    'url("https://avatars.githubusercontent.com/u/84128077?v=4")',
                                backgroundSize: "cover",
                                borderRadius: "10vmin",
                                outline: "1px solid",
                                outlineColor:
                                    theme.palette.mode === "light"
                                        ? alpha("#BFCCD9", 0.5)
                                        : alpha("#9CCCFC", 0.1),
                                boxShadow:
                                    theme.palette.mode === "light"
                                        ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                                        : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
                                flexShrink: 0,
                            })}
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
