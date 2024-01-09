
import Navbar from './components/navbar';
import MainSection from './components/app/main-section';
import SkillsSection from './components/app/skills-section';
import TrainingSection from './components/app/training-section';

function App() {

  return (
    <div className="App">
      <Navbar />
      <section className="w-full mx-auto py-5" id='main-section'>
        <MainSection />
      </section>
      <section className="w-full mx-auto py-5 bg-slate-100" id='skills-section'>
        <SkillsSection />
      </section>
      <section className="w-full mx-auto py-5" id='training-section'>
        <TrainingSection />
      </section>
    </div>
  );
}

export default App;