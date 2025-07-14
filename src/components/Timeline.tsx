import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ro2 from "../assets/ro2.jpg";
import honors from "../assets/honors.png";
import xxllnc from "../assets/xxllnc.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
interface Period {
  key: string;
  dateFrom: string;
  dateTo: string;
  title: string;
  location?: string;
  content: string[];
  image?: string;
  tools?: string[];
  markerColor?: string;
}

const timelineR: Period[] = [
  {
    key: "bsc",
    dateFrom: "01-09-2022",
    dateTo: "01-07-2025",
    title: "BSc CSE",
    location: "TU Delft, Delft, Netherlands",
    content: [
      "Graduated with a BSc in Computer Science and Engineering from TU Delft.",
      "Specialized in software engineering and data science.",
    ],
    //image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F180000%2Fvelka%2Fcat-1464103447LmK.jpg&f=1&nofb=1&ipt=aa707c30cc07fc5edcf6440956432e45a3b1186a114fc496ed4ebfb33caac7ff",
    markerColor: "#ff5722",
    tools: ["Java", "Python", "C++", "TypeScript", "React", "Node.js", "Docker", "etc.."],
  },
  {
    key: "honors",
    dateFrom: "01-09-2023",
    dateTo: "01-09-2025",
    title: "Honors Programme",
    location: "TU Delft, Delft, Netherlands",
    content: [
      "Was part of the TU Delft Next Generation Robotics Honors Programme.",
      "Focused on advanced robotics topics and worked in a team to create projects on dead reckoning, localization, and path planning.",
    ],
    tools: ["Python", "ROS", "Algorithms"],
    image: honors,
    markerColor: "#4caf50",
  },
  {
    key: "ta",
    dateFrom: "01-09-2023",
    dateTo: "Ongoing",
    title: "Teaching Assistant",
    location: "TU Delft, Delft, Netherlands",
    content: [
      "Working as a Reasoning and Logic + Introduction to Programming Teaching Assistant.",
      "Attributions include grading assignments/exams, answering student questions during labs, and being a line of between students and teachers.",
      "Note: I am fullfilling this role only from September to December of the aforementioned years."
    ],
    tools: ["Java", "Prolog"],
    markerColor: "#2196f3",
  },
  {
    key: "internship",
    dateFrom: "01-07-2025",
    dateTo: "Ongoing",
    title: "Software Engineering Internship",
    location: "GETIK Technologies, Bucharest, Romania",
    content: [
      "Working as a full-stack software engineer intern, with the goal of developing an in-house application.",
      "Attributions include developing new features, fixing bugs, and collaborating with the team to improve the application.",

    ],
    tools: ["React", "JavaScript", "Axios", "PL/SQL", "Git", "GitHub"],
    markerColor: "#9c27b0",
  },

  {
    key: "internshipPetrom",
    dateFrom: "01-07-2024",
    dateTo: "01-09-2024",
    title: "Open4U Internship",
    location: "OMV Petrom, Brazi, Romania",
    content: [
      "Worked as part of the Power Plant maintenance team, understanding the core processes and technologies used in the plant.",
      "Attributions included shadowing engineers and working on debugging and fixing existing in-house applications.",
    ],
    tools: ["PHP", "MySQL"],
    markerColor: "#6e27b0ff",
  },
  {
    key: "ro2d2",
    dateFrom: "01-09-2018",
    dateTo: "01-07-2022",
    title: "Robotics Team Member",
    location: "Ro2D2 Team, Ploiesti, Romania",
    content: [
      "Worked as part of the Ro2D2 robotics team (Construction, Technical Notebook and Social Media teams), participating in various competitions.",
      "Attributions included designing and building robots, writing technical documentation, and managing the team's social media presence.",
      ],
    tools: ["SOLIDWORKS", "Java"],
    image: ro2,
    markerColor: "#ff0066ff",
  },
  {
    key: "cex",
    dateFrom: "01-09-2019",
    dateTo: "01-07-2022",
    title: "Centre of Excellence Member",
    location: "Centrul de Excelenta, Ploiesti, Romania",
    content: [
      "Was a student member of the Centre of Excellence in Computer Science, focused on learning high-level competitive programming concepts for olympiads.",],
    tools: ["C++", "Competitive Programming"],
    markerColor: "#ccff00ff",
  },
  {
    key: "xxllnc",
    dateFrom: "01-05-2024",
    dateTo: "01-07-2024",
    title: "SWE Internship - Software Project",
    location: "xxllnc Sociaal, Haarlem, Netherlands",
    content: [
      "Worked as a software engineering intern in a student team, developing a web application for a company. The goal was to upgrade the stack of an existing application, while maintaining exisiting functionality. ",],
    tools: ["Java", "Spring Boot", "React", "TypeScript", "Docker", "Git", "MKDocs"],
    image: xxllnc,
    markerColor: "#00d08eff",
  },


];
const timelineC: Period[] = timelineR.sort((a, b) => {
  const dateA = new Date(a.dateFrom);
  const dateB = new Date(b.dateFrom);
  return dateA.getTime() - dateB.getTime();
});

const shouldFocusBar = (focusedTimelines: Period[], year: number) => {
  if (focusedTimelines.length != 1) return false;
  const period = focusedTimelines[0];
  const dateFrom = new Date(period.dateFrom);
  const dateTo = period.dateTo === "Ongoing" ? new Date() : new Date(period.dateTo);
  return dateFrom.getFullYear() <= year && dateTo.getFullYear() >= year;
}

const Timeline: React.FC = () => {
  const [focusedYear, setFocusedYear] = useState<number | null>(null);

//   const activePeriod = periods[activeIndex];
  const [focusedTimelines, setFocusedTimelines] = useState<Period[]>(timelineC);

  return (
    <Container id="timeline" sx={{ py: { xs: 6, sm: 10 } }}>
      <Box sx ={{ pb: 1}}>
        <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
            Timeline
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
            A brief overview of my academic and professional journey, highlighting key milestones and experiences. Click on a year or a project to learn more.
        </Typography>
        </Box>
        <Box>
        <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center" , mb: 2 }}>
        {Array.from({length: 8}, (_, i) => 2018 + i).map((year) => (
            <React.Fragment key={year}>
                <Box
                    sx={{
                        border : shouldFocusBar(focusedTimelines,year)? "2px solid" + focusedTimelines[0].markerColor :
                        focusedYear===year?  "3px solid #999" : "1px solid #ccc",
                        borderRadius: "25%",
                        bgcolor: "background.paper",
                        color: "text.primary",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        minWidth: "50px",
                        minHeight: "50px",
                                      ":hover": {
                bgcolor: "rgba(127, 127, 127, 0.05)",
                cursor: "pointer",
              },

                    }}
                    onClick={
                      () => {
                        if (focusedYear === year) {
                          setFocusedYear(null);
                          setFocusedTimelines(timelineC);
                        }
                        else {
                          setFocusedYear(year);
                          const newFocusedTimelines = timelineC.filter(period => {
                            const dateFrom = new Date(period.dateFrom);
                            const dateTo = period.dateTo === "Ongoing" ? new Date() : new Date(period.dateTo);
                            return dateFrom.getFullYear() <= year && dateTo.getFullYear() >= year;
                          });
                          setFocusedTimelines(newFocusedTimelines);
                        }

                      } 
                    }

                >
                    <Typography variant="body1" component="span" color="text.primary"
                    sx={{ 
                                textAlign: "center", // Center the text
        width: "100%", 
        lineHeight: 1,
                        
                    }}>
                        {year}
                    </Typography>
                  
                </Box>
                <Box
                    sx={{ height: shouldFocusBar(focusedTimelines,year)?'2px': '1px',
                       width: "100%",
                       backgroundColor: shouldFocusBar(focusedTimelines,year)? focusedTimelines[0].markerColor :"#ccc",
                        alignSelf: "center" }}
                />
            </React.Fragment>
        ))}
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center",
  justifyContent: focusedTimelines.length <= 3 ? "center" : "flex-start", 
     overflowX: "auto", gap : 2,
    }}>
      {focusedTimelines.map((period) => (
        <Box
          key={period.key}
          >
          <Box
            sx={{
              border: "2px solid" + (period.markerColor || "#ccc"),
              borderRadius: "8px",
              bgcolor: "background.paper",
              color: "text.primary",
              p: 2,
              width: "325px",
              ":hover": {
                bgcolor: "rgba(127, 127, 127, 0.05)",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              setFocusedYear(null);
              focusedTimelines.length == 1? setFocusedTimelines(timelineC) :  setFocusedTimelines([period]);
              
            }}
            
          >
            <Typography variant="h6" component="div" gutterBottom>
              {period.title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
              <DateRangeIcon sx={{ color: "text.secondary", verticalAlign: "middle", mr: 1 }} />
            <Typography variant="subtitle1" color="text.secondary">
              {period.dateFrom} - {period.dateTo}
            </Typography>
            </Box>
              {period.location && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon sx={{ color: "text.secondary", verticalAlign: "middle" }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    {period.location}
                  </Typography>
                </Box>
              )}
            
            <Box sx={{ mt: 1 }}>
              {period.content.map((line, index) => (
                <Typography key={index} variant="body2" color="text.primary">
                  {line}
                </Typography>
              ))}
            </Box>
            {period.image && (
              <Box sx={{ mt: 2 }}>
                <img src={period.image} alt={period.title} style={{ width: "100%", borderRadius: "8px" }} />
              </Box>
            )}
            {period.tools && (
              <Box sx={{ mt: 1 }}>
                {period.tools.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    size="small"
                    sx={{ mr: 0.5, mb: 0.5 }}/>
                  ))}
              </Box>
            )}
            </Box>
            </Box>
          ))}

    </Box>
    </Box>
    </Container>
  );
};

export default Timeline;
