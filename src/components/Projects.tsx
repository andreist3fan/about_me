import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SchoolIcon from '@mui/icons-material/School';
import talio from "../assets/talio.png";
import edupp from "../assets/edupp.png";
import ANN from "../assets/ANN.png";
import { InputLabel, MenuItem, Select, SelectChangeEvent, FormControl } from "@mui/material";
interface Project {
  key: string;
  dateFrom?: string;
  dateTo?: string;
  title: string;
  location?: string;
  content: string[];
  image?: string;
  tools?: string[];
  icon?: React.ReactNode;
  github?: string;
}

const items :Project[]= [
  {
    key: "edupp",
    dateFrom: "2023-01-01",
    dateTo: "2023-06-01",
    icon: <SchoolIcon />,
    title: "Edu++",
    content:[
      "Edu++ is a .NET application that helps students and teachers manage their daily tasks and assignments.",
    ],
    image: `url(${edupp})`,
    github: "https://github.com/andreist3fan/Edu-plusplus",
    tools: ["C#", ".NET", "Firebase"],
  },
  {
    key: "ann",
    dateFrom: "2023-01-01",
    dateTo: "2023-06-01",
    icon: <TipsAndUpdatesIcon />,
    title: "Computational Intelligence Projects",
    content:[
      "Used a variety of Computational Intelligence techniques to solve the problems associated with a robot travelling through a store.",
    ],
    image: `url(${ANN})`,
    tools: ["Python", "Neural Networks", "Genetic Algorithms"],
    
  },
  {
    key: "talio",
    icon: <AddTaskIcon />,
    title: "OOP Project - Talio",
    content: [
      "A project I've worked on in a team of 5, where we created a task management app with Spring Boot and JavaFX.",
    ],
      image: `url(${talio})`,
    tools: ["Java", "Spring Boot", "JavaFX"],
  },
  {
    key: "thesis",
    icon: <AddTaskIcon />,
    title: "Bachelor's Thesis: Graph Leaning on Tabular Data",
    content: [
      "A project where I used graph learning techniques to analyze tabular data, with a focus on financial fraud detection.",
    ],
    image: "",
    tools: ["Python", "Graph Learning", "Machine Learning"],
    
  },
  {
    key: "ovm",
    icon: <AddTaskIcon />,
    title: "Option Valuation Methods Assignments",
    content: [
      "A series of assignments where I implemented various option valuation methods, including Black-Scholes and Binomial models.",
    ],
    image: "",
    tools: ["Python", "Financial Modelling"],
  },
  {
    key: "cai",
    icon: <AddTaskIcon />,
    title: "Collaborative AI Assignments",
    content: [
      "A series of assignments where I implemented various collaborative AI systems, including a negotiating agent and trust modelling in a human-agent team.",
    ],
    image: "",
    tools: ["Python", "Collaborative AI", "Multi-Agent Systems"],
  }

];

export default function Features() {
  const [filteredItems, setFilteredItems] = React.useState(items);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [filterValue, setFilterValue] = React.useState("all");
  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };
  const handleFilterChange = (event: SelectChangeEvent) => {
    const filterV = event.target.value as string;
    if (filterV === "all") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) =>
        item.tools?.includes(filterV)
      );
      setFilteredItems(filtered);
      setSelectedItemIndex(0);
    }
    setFilterValue(filterV);
  };


  return (
    <Container id="projects" sx={{ py: { xs: 8, sm: 16 } }}>
                <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Feel free to take a look at some of the projects I have worked on:
            </Typography>
          </Box>
     
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
 <Box sx={{ mb: 4 }}>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1 }}>
          <FormControl sx={{  minWidth: "50%" }}>

          <InputLabel id="filter-label">Programming Languages            </InputLabel>

            <Select
            value ={filterValue}
            label ="Programming Languages"
            onChange={handleFilterChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
              <MenuItem value="C#">C#</MenuItem>
              <MenuItem value="Python">Python</MenuItem>
              {/* <MenuItem value="Javascript">JavaScript</MenuItem>
              <MenuItem value="C++">C++</MenuItem> */}
            </Select>
            </FormControl>
        </Box>
      </Box>
          <Box>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {filteredItems.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          </Box>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: filteredItems[selectedItemIndex].image,                    
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: 280,

              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {filteredItems[selectedItemIndex].title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {filteredItems[selectedItemIndex].content}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>GitHub Link</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" },
                          maxHeight: "60vh",
                overflowY: "auto", }}
          >
            {filteredItems.map(({ icon, title, content }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  minHeight: "150px",
                  width: "95%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {content}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <a
                        href={
                          filteredItems[index].github || ""
                        }
                      >
                        <span>
                          GitHub Link
                        </span>
                      </a>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 357,
                height: 500,
                backgroundSize: "contain",
                borderRadius: 2,
                backgroundImage: filteredItems[selectedItemIndex].image,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
