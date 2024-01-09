
import Navbar from './components/navbar';
import MainSection from './components/app/main-section';
import SkillsSection from './components/app/skills-section';
import TrainingSection from './components/app/training-section';
import ProjectsSection from './components/app/projects-section';
import ContactSection from './components/app/contact-section';

function App() {

  return (
    <div className="App">
      <Navbar />
      <section className="w-full mx-auto  py-5" id='main-section'>
        <MainSection />
      </section>
      <section className="w-full mx-auto py-5 bg-slate-100" id='skills-section'>
        <SkillsSection />
      </section>
      <section className="w-full mx-auto py-5" id='training-section'>
        <TrainingSection />
      </section>
      <section className="w-full mx-auto py-5 bg-slate-100" id='projects-section'>
        <ProjectsSection />
      </section>
      <section className="w-full mx-auto py-5" id='contact-section'>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;