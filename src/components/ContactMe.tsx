import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';




const contactLinks = [
  "mailto:and21ste@gmail.com",
  "https://www.linkedin.com/in/andrei-stefan-as1/",
  "tel:+40799522777",
  "https://github.com/andreist3fan",
  "https://www.facebook.com/stefandrei124",
  // "",
];

const logoStyle = {
  width: "80px",
  height: "80px",
  margin: "0 25px",
  opacity: 0.6,
  transition: "opacity 0.1s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
  color : "text.primary",
};

const logos = [
  <LinkedInIcon  sx={logoStyle} />,
  <EmailIcon sx={logoStyle} />,
  <LocalPhoneIcon sx={logoStyle} />,
  <GitHubIcon sx={logoStyle} />,
  <FacebookIcon sx={logoStyle} />,
]

export default function ContactMe() {

  return (
    <Box id="contactMe" sx={{ py: 4 }}>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          component="p"
          variant="subtitle2"
          align="center"
          color="text.secondary"
          fontSize={15}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "100%" },
              textAlign: "center",
            }}
          >
            <Typography component="h2" variant="h4">
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.400" }}>
              Want to talk about a project or just say hi? Feel free to reach
              out on any of the platforms below!
            </Typography>
          </Box>
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 0.1 }}>
          {logos.map((logo, index) => (
            <Grid item key={index}>
              <a href={contactLinks[index]}>
                {logo}
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
