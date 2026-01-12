"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Sylvr",
      period: "Jul 2025 - Present",
      description:
        "Developing end-to-end web applications using React.js and Chakra UI on the frontend, Node.js/Express/Mongoose with MongoDB on the backend, building and testing RESTful APIs with Postman, and solving complex problems across the full development lifecycle.",
    },
    {
      title: "Software development Intern",
      company: "Sylvr",
      period: "Feb 2025 - Jun 2025",
      description:
        "Contributed to scalable full-stack applications using React.js (v18.2), Node.js, MongoDB, and Chakra UI by building APIs, efficient data flows, and dynamic UI from Figma designs, while collaborating in code reviews, REST integrations, bug fixes, and Agile-based development cycles."
    },
    {
      title: "Frontend Developer",
      company: "Traviti Apps",
      period: "Feb 2025 - Jun 2025",
      description:
        "Improved dashboard modules, authentication flows, frontend–backend integration, and mobile-first UI performance, resulting in fewer login issues, reduced API failures, and a faster, more stable user experience.",
    },
    {
      title: "Web Developer",
      company: "Maximize Market Research",
      period: "Dec 2023 - Jun 2024",
      description:
       "Developed and maintained scalable, responsive user interfaces, collaborated with cross-functional teams to deliver production-ready web applications, resolved frontend performance issues, and adopted modern web technologies to enhance stability and user experience."

    },
    // {
    //   title: "Angular Developer",
    //   company: "Infotel India",
    //   period: "Aug 2022 - Nov 2023",
    //   description:
    //    "Developed customer requirement, hotel management, and e-commerce applications by building responsive cross-browser UIs with HTML5, CSS3, and JavaScript, and integrating RESTful APIs to deliver dynamic, user-centric solutions."
    // },
  ]

  const achievements = [
    {
      title: "Full Stack Development Certification",
      organization: "Internshala",
      Credential: "9f9on60mhq60wbbh",
      description: "Completed a comprehensive Full Stack Development course covering frontend and backend technologies.",
    },
     {
      title: "Cracking the Code: DSA in JavaScript - I Certification",
      organization: "Internshala",
      Credential: "he59anek23u",
      description:
        "Completed an advanced Data Structures and Algorithms .",
    },
    {
      title: " Cracking the Code: DSA in JavaScript - II",
      organization: "Internshala",
      Credential: "9dvnaosoiq5",
      description:
        " Completed an advanced Data Structures and Algorithms .",
    },
    {
      title: "Git and GitHub",
      organization: "Internshala",
      Credential: "e796uzz8xed",
      description:
        "Completed a course on version control using Git and GitHub for collaborative software development.",
    },

    {
      title: " Build Your Own Capstone Project",
      organization: "Internshala",
      Credential: "jjk2lxp95x8",
      description:
      "Completed a capstone project integrating full-stack development skills to create a functional web application.",
    }  
      
   
    
  ]

  return (
    <section id="resume" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A summary of my professional experience and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{achievement.title}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          <Calendar className="mr-1 h-3 w-3" />
                          {achievement.Credential}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-3">{achievement.organization}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
