import {Routes, Route, Navigate} from "react-router-dom";

import NavbarComponent from './components/Navbar';

import Header from './pages/Header';
import Context from './pages/Context';
import PilotMap from './pages/PilotMap';
import CaseMatrix from './pages/CaseMatrix';
import HowItWorks from './pages/HowItWorks';
import Donate from './pages/Donate';
import RequestForm from './pages/RequestForm';
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
                <CaseMatrix />
                <HowItWorks />
                <Donate />
                <RequestForm />

                <Routes>
                    <Route path="*" element={<Navigate to="/Re-Reach/" replace />} />
                </Routes>
            </main>

            <Footer scrollToSection={scrollToSection}  />
        </div>
    );
}