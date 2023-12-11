import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';




const Fetch = () => {

    const [getdata, SetData] = useState(null);
    const search = useLocation().state.search;
  

    const language = useLocation().state.language;



    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${search}&language=${language}&apiKey=3d7b89309c2b4453ab4177df542e4cef`)
        .then((response) => response.json())
        .then((fdata) => SetData(fdata))
        .catch((err) => console.log(err))
    }, [search, language])
    return ( 
        <section>
            <h2>Your search Results for: {search}</h2>
            {getdata?.articles.map((art) => 
            <article key={uuidv4()}>
                <h2>{art.title}</h2>
                <img src={art.urlToImage} alt={art.title}/>
                <p>{art.description}</p>
                <Link to="/details" state={{art}}>Read More</Link>
            </article>
            )}

        </section>

     );
}

export default Fetch;