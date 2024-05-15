import frontimg from "./asset/frontend.PNG"
import backimg from "./asset/backend.png"
import toolimg from "./asset/tools.png"
import sftskillimg from "./asset/softskill.png"


export const SKILLS = [
    {
    title: "FrontEnd",
    icon: frontimg,
    skills:[
        { skill: "HTML5", percentage: "80%" },
        { skill: "CSS3 (tailwind)", percentage: "90%" },
        { skill: "JavaScript", percentage: "80%" },
        { skill: "React.js", percentage: "85%" },
    ],
},
{
    title: "Backend",
    icon: backimg,
    skills:[
        { skill: "Python", percentage: "70%" },
        { skill: "Node.js", percentage: "90%" },
        { skill: "Next.js", percentage: "70%" },

    ],
},
{
    title: "Tools",
    icon: toolimg,
    skills:[
        { skill: "Git & GitHub", percentage: "85%" },
        { skill: "VS code", percentage: "90%" },
        { skill: "Web-Design", percentage: "70%" },

    ],
},
{
    title: "Soft Skills",
    icon: sftskillimg,
    skills:[
        { skill: "Problem Solving", percentage: "90%" },
        { skill: "Team Work", percentage: "80%" },
        { skill: "Attention to Detail", percentage: "70%" },

    ],
},
]