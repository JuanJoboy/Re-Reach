import {Routes, Route, Navigate} from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar';

function App()
{
    return (
        <>
            <section>
                    <main className="container mt-4"> {/* Margin Top Spacing */}
                        <Navbar />
                            <Routes>
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                    </main>

                    <footer>

                    </footer>
            </section>
        </>
    )
}

export default App