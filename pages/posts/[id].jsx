import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from './thisPost.module.css'
import { Tag, Breadcrumb } from 'antd';
import {BarsOutlined, HomeOutlined} from "@ant-design/icons"
import HeaderLayout from '../../_layouts/Header/Header';
import Tags from '../../_layouts/Tags/Tags';

const {Header, Content} = Layout

function ThisPost({post}) {
    return ( 
      <Layout className={styles.post}>
        <HeaderLayout/>
        <Content className={styles.content}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeOutlined/>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/posts">
              <BarsOutlined/> Posts
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {post.title}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className={styles.title}>{post.title}</h2>
          <p>{post.announce}</p>
          <Tags category={post.category} tags={post.tags}/>
        </Content>
      </Layout>
     );
}

export default ThisPost;

export const getServerSideProps = async ({query}) => {
    const response = await fetch(`${process.env.API_HOST}/posts`);
    const json = await response.json();
    let data = json.posts;

    let post = data.filter(el => {
        return el.id == query.id
    })[0]
  
    return {
      props: {post}
    }
  } 