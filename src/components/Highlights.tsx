import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const items = [
  {
    icon: <PrecisionManufacturingIcon />,
    title: "Honors Student - Next Generation Robotics",
    description:
      "Currently working on GPS-free localization for autonomous robots using dead reckoning and terrain recognition.",
  },
  {
    icon: <HomeRepairServiceIcon />,
    title: "Workshops",
    description:
      "I have attended workshops on various topics such as Robotics, Rust, and 3D Printing.",
  },
  {
    icon: <SmartToyIcon />,
    title: "FIRST Tech Challenge Team Member",
    description:
      "I was a member of the FIRST Tech Challenge team Ro2D2, where we built a robot to compete in a series of challenges.",
  }
];

export default function Highlights() {
  const theme = useTheme();
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: theme.palette.mode === "light" ? "black" : "white",
        bgcolor: theme.palette.mode === "light" ? "#f9f6f5" : "06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
          >
            Find out more about my background and experience here.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor:
                    theme.palette.mode === "light" ? "white" : "black",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
