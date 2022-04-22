import { Input } from 'antd'
import styles from './search.module.css'


function Search({data}) {

    function searchTitle(e) {
        data.setSortedPosts([...data.posts].filter(el => el.title.includes(e.target.value)))
    }

    return ( 
        <div className={styles.search}>
            <Input onChange={(e) => searchTitle(e)} placeholder="Поиск по заголовку" />
        </div>

    );
}

export default Search;