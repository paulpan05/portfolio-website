export interface AboutMeProps {
  profileRef: React.RefObject<HTMLDivElement>
  aboutMeRef: React.RefObject<HTMLDivElement>
};

export interface ExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>
}

export interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>
}

export interface EducationProps {
  educationRef: React.RefObject<HTMLDivElement>
}

export interface ContactMeProps {
  contactMeRef: React.RefObject<HTMLDivElement>
}

export interface CardSectionProps {
  items:
  {
    image: string
    imageWidth: string
    itemName: string
    description: string
    fullDescription: JSX.Element
  }[]
  cardHeight: string
  title: string
  subtitle: string
  backgroundColor: string
  textColor: string
  currentRef: React.RefObject<HTMLDivElement>
}

export interface ItemCardProps {
  image: string
  imageWidth: string
  itemName: string
  description: string
  fullDescription: JSX.Element
  cardHeight: string
  cardNumber: number
  sectionTitle: string
}

export interface TopBarProps {
  aboutMe: React.RefObject<HTMLDivElement>
  experience: React.RefObject<HTMLDivElement>
  projects: React.RefObject<HTMLDivElement>
  education: React.RefObject<HTMLDivElement>
  profile: React.RefObject<HTMLDivElement>
  contactMe: React.RefObject<HTMLDivElement>
}