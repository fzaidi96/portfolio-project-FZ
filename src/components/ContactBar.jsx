import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link';

export default function ContactBar () {
  return (
    <div>
      <Link href='https://www.linkedin.com/in/fatima-zaidi-a46558146'><LinkedInLogoIcon height={100} width={80}/></Link>
      <Link href='https://github.com/fzaidi96'><GitHubLogoIcon height={100} width={80} /></Link>
      <Link href='https://www.instagram.com/fzaidi96/'><InstagramLogoIcon height={100} width={80}/></Link>
    </div>
  )
}