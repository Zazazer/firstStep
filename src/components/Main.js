import Header from './Header.js'
import Menu from './Menu.js'
import './Main.css'

const Main = () => {
    return (
        <>
        <Header />
        <div id="colonnes">
        <Menu />
        <Menu />
        <Menu />
        </div>
        </>
    );
};
export default Main