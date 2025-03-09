import { BiLogoGithub } from "react-icons/bi"

export const socialLinks = [
  // {
  //   name: "Facebook",
  //   icon: (
  //     <BiLogoFacebookCircle
  //       size={32}
  //       className='hover:bg-lightBlue rounded-full'
  //     />
  //   ),
  //   link: "https://www.facebook.com/profile.php?id=100007521976630",
  // },
  {
    name: "Github",
    icon: (
      <BiLogoGithub size={32} className='hover:bg-lightBlue rounded-full' />
    ),
    link: "https://github.com/NguyenDonUET",
  },
]
export type SoclialLinkType = (typeof socialLinks)[0]
