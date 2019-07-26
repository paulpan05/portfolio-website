export type AboutMeProps = {
  profileRef: React.RefObject<HTMLDivElement>
};

export type CardSectionProps = {
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
}

export type ItemCardProps = {
  image: string
  imageWidth: string
  itemName: string
  description: string
  fullDescription: JSX.Element
  cardHeight: string
}

export type TopBarProps = {
  aboutMe: React.RefObject<HTMLDivElement>
  experience: React.RefObject<HTMLDivElement>
  projects: React.RefObject<HTMLDivElement>
  education: React.RefObject<HTMLDivElement>
  profile: React.RefObject<HTMLDivElement>
  contactMe: React.RefObject<HTMLDivElement>
}