import Box from "@mui/material/Box";
import { ReactjsFill, Cat, BaselineCoffee, Materialui } from "./Icons";
export default function PoweredBy() {
    return (
        <Box
        sx={{

            width: "100%",
            textAlign: "center",
            padding: 1,
            backgroundColor: "background.default",
            color: "text.secondary",
        }}
        >
        Powered by <ReactjsFill/> <Materialui/>
        <Box component="span" sx={{ color: "#777", pl: 1 }}>
            <Cat />
        </Box> <BaselineCoffee/>
        </Box>
    );
    }