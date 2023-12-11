import { useState } from "react";
import { Link } from "react-router-dom";





const Home = () => {

    const [search, SetSearch] = useState("");
    const [language, setLanguage] = useState("");



    return ( 
        <main>
            <h1>Breaking News</h1>
        <section>
            <input type="text" onChange={(event) => SetSearch(event.target.value) }/>
            <select onChange={(event) => setLanguage(event.target.value)}>
                <option>Select languages</option>
                <option value="ar">Arabic</option>
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="he">Hebraic</option>
                <option value="it">Italian</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegeian</option>
                <option value="pt">Portuges</option>
                <option value="ru">Russian</option>
                <option value="sv">Swedish</option>
                <option value="ud">Russianlike</option>
                <option value="zh">Chinise</option>
            </select>
            <Link to="/fetch" state={{search, language}}>Search</Link>
        </section>
        </main>
     );
}
 
export default Home;