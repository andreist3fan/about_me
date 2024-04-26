import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Container from "@mui/material/Container";

const whiteLogos = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Femail-icon-white-png-38.png&f=1&nofb=1&ipt=ed14912a46a3ae37541cbfb6821a6438f89237c1ab4fd19c6c662b395cbdd984&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitcnet.gr%2Fwp-content%2Fuploads%2F2020%2F09%2FLinkedin-logo-on-transparent-Background-PNG-.png&f=1&nofb=1&ipt=8f01299d8ef0b6b69725362413968bdc6d25f2daf5937976f8030666449e215c&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrystalpng.com%2Fwp-content%2Fuploads%2F2023%2F02%2FC-Sharp-logo-600x600.png&f=1&nofb=1&ipt=84182dd6dd10fe575d36dd5bc7c2e1bb2d39670bacfac4628afb437004d8d1a9&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fscala_lang_logo_icon_170760.png&f=1&nofb=1&ipt=61974c6864ed3e31eff28e83c0641ae647f7887a106625c84190866a2d61bd47&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F6047a9e35e5dc54ac86ddd90%2F63065002ce321b529d375e07_2e261bcd.png&f=1&nofb=1&ipt=9416478ba6bd8452a74b89f0e27fb8b2cca067ed0752d8746116d1d8b01d1e2d&ipo=images",
];

const darkLogos = [
  "https://cdn-icons-png.flaticon.com/512/542/542689.png",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitcnet.gr%2Fwp-content%2Fuploads%2F2020%2F09%2FLinkedin-logo-on-transparent-Background-PNG-.png&f=1&nofb=1&ipt=8f01299d8ef0b6b69725362413968bdc6d25f2daf5937976f8030666449e215c&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrystalpng.com%2Fwp-content%2Fuploads%2F2023%2F02%2FC-Sharp-logo-600x600.png&f=1&nofb=1&ipt=84182dd6dd10fe575d36dd5bc7c2e1bb2d39670bacfac4628afb437004d8d1a9&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fscala_lang_logo_icon_170760.png&f=1&nofb=1&ipt=61974c6864ed3e31eff28e83c0641ae647f7887a106625c84190866a2d61bd47&ipo=images",
  // "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F6047a9e35e5dc54ac86ddd90%2F63065002ce321b529d375e07_2e261bcd.png&f=1&nofb=1&ipt=9416478ba6bd8452a74b89f0e27fb8b2cca067ed0752d8746116d1d8b01d1e2d&ipo=images",
];

const contactLinks = [
  "mailto:and21ste@gmail.com",
  "https://www.linkedin.com/in/andrei-stefan-as1/",
  // "https://github.com/andreist3fan/Edu-plusplus",
  // "",
  // "",
];

const logoStyle = {
  width: "100px",
  height: "100px",
  margin: "0 32px",
  opacity: 0.8,
  transition: "opacity 0.1s ease-in-out",
};

const handleMouseEnter = (index: number) => {
  const image: HTMLElement | null = document.getElementById(`contact${index}`);
  if (image instanceof HTMLImageElement) {
    image.style.opacity = "1";
  }
};

const handleMouseLeave = (index: number) => {
  const image: HTMLElement | null = document.getElementById(`contact${index}`);
  if (image instanceof HTMLImageElement) {
    image.style.opacity = "0.8";
  }
};
export default function ContactMe() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

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
        <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
          {logos.map((logo, index) => (
            <Grid item key={index}>
              <a href={contactLinks[index]}>
                <img
                  src={logo}
                  style={logoStyle}
                  id={`contact${index}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
