import NavigationBar from "./navigation";
import PetPanel from "./pet-component";
import Posts from "./posts";

const MainPage = () => {
    return (
        <div className='main-page'>
            <header className="Header-navigation">
                <NavigationBar></NavigationBar>
            </header>
            <div className="panels-container">
                <PetPanel name='Melisa' username='@milin_chr' type="cat" level={2} XP={15}></PetPanel>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default MainPage;