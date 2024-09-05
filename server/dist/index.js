const express = require("express");
const path = require("path");
const cors = require("cors");

// Initialize Express
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Serve static files from the 'public/images' directory
app.use("/images", express.static(path.join(__dirname, "../public/images/")));

// Route to get technical data
app.get("/", (req, res) => {
  const techData = [
    {
      id: 1,
      title: "Web Development",
      image: "/images/webdev.png",
      description:
        "The process of building and maintaining websites. It involve",
    },
    {
      id: 2,
      title: "Data Science",
      image: "/images/datascience.png",
      description:
        "A field that uses scientific methods, processes, algorithms,",
    },
    {
      id: 3,
      title: "Cloud Computing",
      image: "/images/cloud.png",
      description:
        "The delivery of computing services—including servers, storage, ",
    },
    {
      id: 4,
      title: "Machine Learning",
      image: "/images/ML.png",
      description:
        "A subset of artificial intelligence (AI) that provides systems the ability t ",
    },
    {
      id: 5,
      title: "Cybersecurity",
      image: "/images/cybersec.png",
      description:
        "The practice of protecting systems, networks, and programs from digital attacks. ",
    },
    {
      id: 6,
      title: "DevOps",
      image: "/images/devops.png",
      description:
        "A set of practices that combines software development (Dev) and IT operations (Ops). ",
    },
  ];

  res.json(techData);
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
