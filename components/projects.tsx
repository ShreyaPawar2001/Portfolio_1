
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [ref, inView] = useInView({ threshold: 0.1 })

  const projects = [
    {
      id: 1,
      title: "Weather Explorer App",
      description:
        "Weather app built with React + Tailwind using Open-Meteo & RestCountries APIs.",
      image: "/images/Worldexploer.jpg",
      tags: ["React", "JavaScript", "API", "Tailwind"],
      liveLink: "https://nkc483-5173.csb.app/",
      githubLink: "https://github.com/ShreyaPawar2001/react-weather-app",
      category: "frontend,backend",
    },
    {
      id: 2,
      title: "YouTube Clone (MERN)",
      description:
        "YouTube clone with JWT auth, video upload and channel management.",
      image: "/images/youtube.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "example.com",
      githubLink: "https://github.com/ShreyaPawar2001/capstone_react_project",
      category: "fullstack",
    },
    {
      id: 3,
      title: "ShoppyGlobe E-commerce",
      description:
        "E-commerce app with Redux Toolkit, cart, and product listing.",
      image: "/images/shopyGlobe.JPG",
      tags: ["React", "Redux", "Axios"],
      liveLink: "example.com",
      githubLink:
        "https://github.com/ShreyaPawar2001/Internshalla_projects/tree/Shopyglobe",
      category: "Frontend",
    },
  ]

  // ✅ FILTER LOGIC (UNCHANGED)
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.category
            .toLowerCase()
            .split(",")
            .map((c) => c.trim())
            .includes(filter)
        )

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} animate={inView ? { opacity: 1 } : {}}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary">Projects</span>
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {["all", "frontend", "backend", "fullstack"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
              >
                {cat.toUpperCase()}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} whileHover={{ y: -8 }}>
                  <Card className="h-full flex flex-col">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />

                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {/* ✅ UPDATED FOOTER (DEMO ALWAYS SHOWN) */}
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>

                      {project.liveLink ? (
                        <Button size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" disabled>
                          Demo
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
