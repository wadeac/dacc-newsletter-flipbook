// Demo config with sample interactive elements for testing
const FLIPBOOK_CONFIG = {

  title: "DACC Newsletter - Issue 05",
  totalPages: 10,
  backgroundColor: "#2c3e50",
  pageWidth: 1700,
  pageHeight: 2200,
  flipTime: 800,

  links: [
    {
      page: 1,
      x: 52,
      y: 80,
      width: 20,
      height: 5,
      url: "https://dacc.nmsu.edu",
      label: "Read More at DACC"
    },
    {
      page: 2,
      x: 5,
      y: 8,
      width: 45,
      height: 4,
      url: "https://dacc.nmsu.edu",
      label: "Visit DACC Website"
    },
  ],

  videos: [
    {
      page: 3,
      x: 25,
      y: 40,
      width: 45,
      height: 25,
      videoUrl: "https://www.youtube.com/watch?v=Yu13rn02QOE",
      label: "Watch Campus Tour"
    },
  ],

  zoomAreas: [
    {
      page: 2,
      x: 5,
      y: 55,
      width: 40,
      height: 35,
      caption: "Dr. Jesse Haas - Associate Vice President for Student Engagement"
    },
  ],

  tooltips: [
    {
      page: 1,
      x: 85,
      y: 10,
      text: "Welcome to the DACC Newsletter Issue 05! Swipe or click to flip through the pages.",
      color: "#3498db"
    },
  ],

  tableOfContents: [
    { page: 1,  title: "Cover" },
    { page: 2,  title: "Learning Together, Growing Stronger" },
    { page: 4,  title: "Campus Resources" },
    { page: 6,  title: "Student Life" },
    { page: 8,  title: "Events & Activities" },
    { page: 10, title: "Back Cover" },
  ],
};
