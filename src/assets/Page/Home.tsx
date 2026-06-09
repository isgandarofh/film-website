import Header from '../components/Header/Header'
import FirstSection from '../components/FirstSection/FirstSection'
import CategoriesSection from '../components/CategoriesSection/CategoriesSection'
import ExperienceSection from '../components/ExperienceSection/ExperienceSection'
import QuestionsSection from '../components/QuestionsSection/QuestionsSection'
import PlanSection from '../components/PlanSection/PlanSection'
import BannerSection from '../components/BannerSection/BannerSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <CategoriesSection />
      <ExperienceSection />
      <QuestionsSection />
      <PlanSection />
      <BannerSection/>
      <Footer/>
    </div>
  )
}
