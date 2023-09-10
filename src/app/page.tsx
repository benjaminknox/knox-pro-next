import { Intro } from '@/components/intro'
import { Header } from '@/components/header'
import { EmailMe } from '@/components/email-me'
import { ExperienceList } from '@/components/experience-list'

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <ExperienceList />
      <EmailMe />
    </main>
  );
}
