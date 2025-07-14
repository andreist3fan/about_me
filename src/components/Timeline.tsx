import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

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
    dateTo: "01-09-2025",
    title: "BSc CSE",
    location: "TU Delft, Delft, Netherlands",
    content: [
      "Graduated with a BSc in Computer Science and Engineering from TU Delft.",
      "Specialized in software engineering and data science.",
    ],
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F180000%2Fvelka%2Fcat-1464103447LmK.jpg&f=1&nofb=1&ipt=aa707c30cc07fc5edcf6440956432e45a3b1186a114fc496ed4ebfb33caac7ff",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium doloremque...",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium doloremque..."
    ],
    tools: ["React", "Node.js", "Python"],
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
    dateFrom: "01-09-2019",
    dateTo: "01-07-2022",
    title: "Robotics Team Member",
    location: "Ro2D2 Team, Ploiesti, Romania",
    content: [
      "Worked as part of the Ro2D2 robotics team (Construction, Technical Notebook and Social Media teams), participating in various competitions.",
      "Attributions included designing and building robots, writing technical documentation, and managing the team's social media presence.",
      ],
    tools: ["SOLIDWORKS", "Java"],
    markerColor: "#ff0066ff",
  }

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

const TimelineComponent: React.FC = () => {
  //const [activeKey, setActiveKey] = useState<number | null>(null);

//   const activePeriod = periods[activeIndex];
  const [focusedTimelines, setFocusedTimelines] = useState<Period[]>(timelineC);

  return (
    <Container id="timeline" sx={{ py: { xs: 8, sm: 16 } }}>
        <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
            Timeline
        </Typography>
        <Box>
        <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center" , mb: 2 }}>
        {Array.from({length: 8}, (_, i) => 2018 + i).map((year) => (
            <React.Fragment key={year}>
                <Box
                    sx={{
                        border : shouldFocusBar(focusedTimelines,year)? "2px solid" + focusedTimelines[0].markerColor : "1px solid #ccc",
                        borderRadius: "25%",
                        bgcolor: "background.paper",
                        color: "text.primary",
                        alignItems: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        display: "flex",
                        width: "50px",
                        height: "50px",
                        
                        // flex: 1,
                        // textAlign: "center",
                        // cursor: "pointer",
                        // borderBottom: "1px solid #ccc",
                        // py: 1,
                        // "&:hover": {
                        //     backgroundColor: "rgba(0, 0, 0, 0.05)",
                        // },
                    }}
                    //onClick={() => setActiveKey(year)}
                >
                    <Typography variant="h6" component="span" color="text.primary">
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
              width: "300px",
              ":hover": {
                bgcolor: "rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              console.log("Clicked on period:", period.title);
              focusedTimelines.length == 1? setFocusedTimelines(timelineC) :  setFocusedTimelines([period]);
              
            }}
            
          >
            <Typography variant="h6" component="div" gutterBottom>
              {period.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {period.dateFrom} - {period.dateTo}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {period.location ? `Location: ${period.location}` : ""}
            </Typography>
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
                <Typography variant="body2" color="text.secondary">
                  Tools: {period.tools.join(", ")}
                </Typography>
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

export default TimelineComponent;
