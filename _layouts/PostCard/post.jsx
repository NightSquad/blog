import styles from './Post.module.css'
import Link from 'next/link'
import 'antd/dist/antd.css';
import {Card} from 'antd'
import blankImg from '../../images/blankPicture.png'
import CardDescription from './CardDescription/CardDescription';

const { Meta } = Card;

function Post({title, description, id, photo, category, data, tags}) {
    return ( 
            <Card
                cover ={<img src={photo ? photo : blankImg.src} height={180} />}
                className={styles.post}
                bodyStyle={{height: 300, overflow: 'hidden'}}
                bordered={false}
            >
                <Meta
                    title={<Link href='/posts/[id]' as={`/posts/${id}`}><a className={styles.title}>{title}</a></Link>}
                    description={<CardDescription data={{data}} description={description} category={category} tags={tags}/>}
                />
            </Card>
     );
}

export default Post;