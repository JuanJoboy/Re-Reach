import {Routes, Route, Navigate} from "react-router-dom";

import NavbarComponent from './components/Navbar';

import Header from './pages/Header';
import Context from './pages/Context';
import PilotMap from './pages/PilotMap';
import Audience from './pages/Audience';
import Designs from './pages/Designs';
import HowItWorks from './pages/HowItWorks';
import ImpactTracker from './pages/ImpactTracker';
import Shipping from './pages/Shipping';
import Donate from './pages/Donate';
import Affiliates from './pages/Affiliates';
import Footer from './pages/Footer';

export default function App()
{
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element)
		{
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

    return (
	    <div className="min-vh-100 d-flex flex-column bg-pal-cream">
            <NavbarComponent scrollToSection={scrollToSection} />

            <Header scrollToSection={scrollToSection} />

            <main className="grow">
                <Context />
                <PilotMap />
                <Audience scrollToSection={scrollToSection} />
                <Designs />
                <HowItWorks />
                <ImpactTracker />
                <Shipping />
                <Donate />
                <Affiliates scrollToSection={scrollToSection}  />

                <Routes>
                    <Route path="*" element={<Navigate to="/Re-Reach/" replace />} />
                </Routes>
            </main>

            <Footer scrollToSection={scrollToSection}  />
        </div>
    );
}