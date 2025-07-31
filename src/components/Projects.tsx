import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SchoolIcon from '@mui/icons-material/School';
import talio from "../assets/talio.png";
import edupp from "../assets/edupp.png";
import CAI from "../assets/cai.png";
import thesis from "../assets/thesis.png";

import ciagm from "../assets/ci.png";
import ovm from "../assets/ovm.png";
import { InputLabel, MenuItem, Select, SelectChangeEvent, FormControl } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Csharp, Firebase, Java, Python, Pytorch, Spring, Typescript } from "./Icons";
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
    tools: ["C#", "Firebase", ".NET"],
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
    image: `url(${ciagm})`,
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
    title: "Bachelor's Thesis: Graph Learning on Tabular Data",
    content: [
      "A project where I used graph learning techniques to analyze tabular data, with a focus on financial fraud detection.",
    ],
    image: `url(${thesis})`,
    tools: ["Python", "PyTorch", "Graph Learning", "Machine Learning"],
    github: "https://github.com/andreist3fan/CSE3000-GLTD",
    
  },
  {
    key: "ovm",
    icon: <AddTaskIcon />,
    title: "Option Valuation Methods Assignments",
    content: [
      "A series of assignments where I implemented various option valuation methods, including Black-Scholes and Binomial models.",
    ],
    image: `url(${ovm})`,
    tools: ["Python", "Financial Modelling"],
    github: "https://github.com/stars/andreist3fan/lists/option-valuation-methods",
  },
  {
    key: "cai",
    icon: <AddTaskIcon />,
    title: "Collaborative AI Assignments",
    content: [
      "A series of assignments where I implemented various collaborative AI systems, including a negotiating agent and trust modelling in a human-agent team.",
    ],
    image: `url(${CAI})`,
    tools: ["Python", "Collaborative AI", "Multi-Agent Systems"],
    github: "https://github.com/stars/andreist3fan/lists/collaborative-ai"
  }

];


const toolIconDict: { [key: string]: React.ReactNode } = {
  "C#": <Csharp height="100%" width="25px"/>,
  "Python": <Python height="100%" width="25px" />,
  "Java": <Java height="100%" width="25px" />,
  "TypeScript": <Typescript  height="100%" width="25px" />,
  "Firebase": <Firebase height="100%" width="25px"/>,
  "Spring Boot": <Spring height="100%" width="25px" />,
  "PyTorch": <Pytorch height="100%" width="25px" />,
} 
  

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
              <Link 
                      href={filteredItems[selectedItemIndex].github}
                      >
                    <Box sx={{ display: "flex", gap: 1, py : .5, ":hover": { textDecoration: "underline" }, cursor: "pointer" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {filteredItems[selectedItemIndex].title}
                    </Typography>

                    {filteredItems[selectedItemIndex].github && (<GitHub sx={{ ml: 1, verticalAlign: 'middle', pb: 0.5 }} />)}

                    </Box>
                    </Link>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {filteredItems[selectedItemIndex].content}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {filteredItems[selectedItemIndex].tools?.map((tool, index) => {
                  if (tool in toolIconDict) {
                    return (
                      <Box sx={{  display: "flex", minHeight: "100%", width: "30px"}} key={index}>
                        {toolIconDict[tool]}
                       </Box>
                    );}
                else return <Chip
                    key={index}
                    label={tool}
                    />;
                  
                })}
              </Box>

              
            </Box>
          </Box>
          <Box
  sx={{
    width: "100%",
    display: { xs: "none", sm: "flex" },
    height: '60vh',
  }}
>
  <Box  

    sx={{ 
      minHeight: "100%",
      width: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 2,

     }}

  >
            {filteredItems.map(({ title, content, tools }, index) => (
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
                  
                  <Box sx={{ textTransform: "none" }}>
                    
                    <Box sx={{ display: "flex", gap: 1 }}>
                    <Link 
                      href={filteredItems[index].github}
                      >
                                            {filteredItems[index].github  && <GitHub sx={{verticalAlign: 'middle', pb: 0.5 }} />}

                    </Link>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>


                    </Box>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {content}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {tools?.map((tool, index) => {
                  if (tool in toolIconDict) {
                    return (
                      <Box sx={{  display: "flex", minHeight: "100%", width: "30px"}} key={index}>
                        {toolIconDict[tool]}
                       </Box>
                    );}
                else return <Chip
                    key={index}
                    label={tool}
                    />;
                  
                })}
              </Box>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
          </Box>
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
                minHeight:'100%',
                minWidth: "100%",
                m: "auto",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: filteredItems[selectedItemIndex].image,
                borderRadius: "6px",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
