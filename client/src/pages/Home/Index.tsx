import { useSelector } from "react-redux";
import SideBar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import sections from "../../Utils/Sections";
import { RootState } from "../../Reducers/store";
/**
 * Renders the Home component.
 *
 * @returns The rendered Home component.
 */

import '../../Utils/Home.scss';

export default function Home() {
    const activeSectionId = useSelector(
        (state: RootState) => state.Menu.currentSection
    );
    const activeSection = sections.find((item) => item.id === activeSectionId);
    const Header = activeSection?.Header;
    const Content = activeSection?.Content;
    return (
        <div className="home">
            <SideBar />
            <div className="content">
                <div className="header">
                    <Navbar />
                    {Header && <Header />}
                </div>
                <div className="main">{Content && <Content />}</div>
            </div>
        </div>
    );
}
