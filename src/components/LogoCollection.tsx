import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const whiteLogos = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2021%2F11%2Fjava-logo.png&f=1&nofb=1&ipt=dd11a6c308f2536af0902c851e1054144b3430aecba57651ff03f99b4c24b7ce&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmartechwithme.com%2Fwp-content%2Fuploads%2F2020%2F12%2F2000px-Python-logo-notext.svg-1024x1024.png&f=1&nofb=1&ipt=bdbd060d9e3692dd21fa1549b5da8c5ce3497ea2b38cefae24c95330f5777707&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrystalpng.com%2Fwp-content%2Fuploads%2F2023%2F02%2FC-Sharp-logo-600x600.png&f=1&nofb=1&ipt=84182dd6dd10fe575d36dd5bc7c2e1bb2d39670bacfac4628afb437004d8d1a9&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fscala_lang_logo_icon_170760.png&f=1&nofb=1&ipt=61974c6864ed3e31eff28e83c0641ae647f7887a106625c84190866a2d61bd47&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F6047a9e35e5dc54ac86ddd90%2F63065002ce321b529d375e07_2e261bcd.png&f=1&nofb=1&ipt=9416478ba6bd8452a74b89f0e27fb8b2cca067ed0752d8746116d1d8b01d1e2d&ipo=images",
];

const darkLogos = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2021%2F11%2Fjava-logo.png&f=1&nofb=1&ipt=dd11a6c308f2536af0902c851e1054144b3430aecba57651ff03f99b4c24b7ce&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmartechwithme.com%2Fwp-content%2Fuploads%2F2020%2F12%2F2000px-Python-logo-notext.svg-1024x1024.png&f=1&nofb=1&ipt=bdbd060d9e3692dd21fa1549b5da8c5ce3497ea2b38cefae24c95330f5777707&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrystalpng.com%2Fwp-content%2Fuploads%2F2023%2F02%2FC-Sharp-logo-600x600.png&f=1&nofb=1&ipt=84182dd6dd10fe575d36dd5bc7c2e1bb2d39670bacfac4628afb437004d8d1a9&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fscala_lang_logo_icon_170760.png&f=1&nofb=1&ipt=61974c6864ed3e31eff28e83c0641ae647f7887a106625c84190866a2d61bd47&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F6047a9e35e5dc54ac86ddd90%2F63065002ce321b529d375e07_2e261bcd.png&f=1&nofb=1&ipt=9416478ba6bd8452a74b89f0e27fb8b2cca067ed0752d8746116d1d8b01d1e2d&ipo=images",
];

const repoLinks = [
  "https://github.com/andreist3fan?tab=repositories&q=&type=&language=java&sort=",
  "https://github.com/andreist3fan?tab=repositories&q=&type=&language=jupyter+notebook&sort=",
  "https://github.com/andreist3fan/Edu-plusplus",
  "",
  "",
];

const logoStyle = {
  width: "12vmin",
  height: "12vmin",
  margin: "0 2vmin",
  opacity: 0.5,
  transition: "opacity 0.1s ease-in-out",
};

const handleMouseEnter = (index: number) => {
  const image: HTMLElement | null = document.getElementById(`logo${index}`);
  if (image instanceof HTMLImageElement) {
    image.style.opacity = "1";
  }
};

const handleMouseLeave = (index: number) => {
  const image: HTMLElement | null = document.getElementById(`logo${index}`);
  if (image instanceof HTMLImageElement) {
    image.style.opacity = "0.5";
  }
};
export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
        fontSize={15}
      >
        A few of the languages that I have worked in:
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <a href={repoLinks[index]}>
              <img
                src={logo}
                style={logoStyle}
                id={`logo${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
