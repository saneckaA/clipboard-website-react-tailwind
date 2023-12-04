import AccessSection from './AccessSection';
import './App.css';
import BottomSection from './BottomSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import MainSection from './MainSection';
import ReferencesSection from './ReferencesSection';
import SnippetsSection from './SnippetsSection';
import SuperchargeSection from './SuperchargeSection';

function App() {
  return (
    <div>
      <MainSection />
      <SnippetsSection />
      <FeaturesSection />
      <AccessSection />
      <SuperchargeSection />
      <ReferencesSection />
      <BottomSection />
      <Footer />
    </div>

  );
}

export default App;
