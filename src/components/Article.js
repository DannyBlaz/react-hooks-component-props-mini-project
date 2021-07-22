function Article(props){
    return(
        <article>
            <h3>{props.title}</h3>
            <small>{props.date} - {props.minutes} minute read</small>
            <p>{props.preview}</p>
        </article>
    ) 
}
export default Article;