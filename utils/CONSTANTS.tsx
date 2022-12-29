import SocialNetwork from "types/SocialNetwork"
import Technology from "types/Technology"
import { faGitAlt, faGithub, faInstagram, faLinkedin, faReact, faSass, faSwift } from "@fortawesome/free-brands-svg-icons"

export const SOCIAL_NETWORKS: SocialNetwork[] = [
    {
        icon: faGithub,
        url: "https://github.com/jesusmarzor"
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.es/in/jesusmarzor"
    },
    {
        icon: faInstagram,
        url: "https://instagram.com/jesusmarzor"
    }
]

export const TECHNOLOGIES: Technology[] = [
    {
        icon: faReact,
        name: "React"
    },
    {
        icon: faSwift,
        name: "Swift"
    },
    {
        icon: faSass,
        name: "Sass"
    },
    {
        icon: faGitAlt,
        name: "Git"
    }
]