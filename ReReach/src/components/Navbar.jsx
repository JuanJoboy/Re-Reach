import { Heart } from 'lucide-react';

export default function Navbar({ scrollToSection })
{
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container> {/* Enforces horizontal padding, centers content and has a max width of 1140px */}
                <Image className="me-5" src={CCLogo} rounded style={{cursor: 'pointer', width: `${CCLogoSize}px`, height: `${CCLogoSize}px`}} onClick={() => navigate('/dashboard')} />

                <Navbar.Brand className="me-5" onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>Conference Connect</Navbar.Brand>

                <button onClick={() => scrollToSection('mission')} className="btn btn-link nav-link px-1 px-md-2 text-white">Mission</button>

                {/* Toggle shows hamburger on small screens, Collapse hides and shows when clicked */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="my-2 gap-3 gap-lg-4 text-center me-auto"> {/* initial vertical spacing | mobile vertical spacing between elements | desktop horizontal spacing between elements | push all components not within this section to the end */}
                        <Nav.Link onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>Dashboard</Nav.Link>
                        <Nav.Link onClick={() => navigate('/my-schedule')} style={{cursor: 'pointer'}}>My Schedule</Nav.Link>
                        <Nav.Link onClick={() => navigate('/active-sessions')} style={{cursor: 'pointer'}}>Active Sessions</Nav.Link>
                    </Nav>

                    {/* Displays only on mobile | Doesn't display on anything larger*/}
                    <hr className="my-5 d-block d-md-none" />

                    {/* mobile screen column | desktop row | mobile vertical spacing between elements | desktop horizontal spacing between elements*/}
                    <Nav className="d-flex flex-column flex-lg-row align-items-center gap-4 gap-lg-5 text-center">
                        <Button onClick={logout} variant="danger">
                            Log Out
                        </Button>

                        <h5 className="text-light" onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>{user?.displayName ?? "User"}</h5>

                        <Image src={user?.picture ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className="rounded-circle" style={{cursor: 'pointer', width: `${pfp}px`, height: `${pfp}px`}} onClick={() => navigate('/dashboard')}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}