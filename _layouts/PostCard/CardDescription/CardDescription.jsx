import Tags from '../../Tags/Tags';
import styles from './CardDescription.module.css'

function CardDescription({category, description, data, tags}) {

    function filterCategory(e) {
        data.data.setSortedPosts([...data.data.posts].filter(el => el.category == e.target.textContent))
    }

    return ( 
        <div className={styles.description}>
            <p>{description}</p>
            <Tags tags={tags} category={category}/>
        </div>
     );
}

export default CardDescription;