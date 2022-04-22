import Link from 'next/link'
import { Layout } from 'antd';
const {Header} = Layout
import styles from './Header.module.css'

function HeaderLayout() {
    return ( 
        <Header className={styles.header}>
            <h1>Next.JS Blog</h1>

            <div className={styles.navButtons}>
                <Link href='/'><a>Главная</a></Link>
                <Link href='/posts'><a>Посты</a></Link>
            </div>
        </Header>
    );
}

export default HeaderLayout;