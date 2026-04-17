// src/App.jsx
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Descricao_pessoal from './components/sections/Descricao_pessoal'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillSection' 
import TrajectorySection from './components/sections/TrajectorySection'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-[#0a0a0f]'>
    
      <Navbar />
      <main className="flex-grow">
        <Descricao_pessoal />
        <ProjectsSection />
        <SkillsSection />
        <TrajectorySection />
        
      </main>
      <Footer /> 
    </div>
  ) 
}

export default App