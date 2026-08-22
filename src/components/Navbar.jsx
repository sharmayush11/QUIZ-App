import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="app-navbar">
            <div className="container d-flex align-items-center justify-content-between gap-3">
                <NavLink to="/" className="brand text-decoration-none">
                    <span className="brand-mark">Q</span>
                    <span>Quizly</span>
                </NavLink>

                <nav className="d-flex align-items-center gap-2">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `nav-link-custom ${isActive ? "active" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/leaderboard"
                        className={({ isActive }) =>
                            `nav-link-custom ${isActive ? "active" : ""}`
                        }
                    >
                        Leaderboard
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
