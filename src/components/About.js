
function About(props){
    return(
        <aside>
            <img src={props.img} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    );
}

export default About