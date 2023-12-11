import { Link, useLocation } from "react-router-dom";

const Details = () => {


    const details = useLocation().state.article


    return ( 
        <article>
            <Link to="/">Back</Link>
            <h2>{details.title}</h2>
            <img src={details.urlToImage} alt={details.title}/>
            <p>{details.content}</p>
            <Link to={details.url}></Link>
        </article>
     );
}
 
export default Details;