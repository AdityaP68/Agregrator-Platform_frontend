import styles from './Home.module.scss'
import HomeLayout from '../components/Layouts/HomeLayout'
import CreatePost from '../components/CreatePost/CreatePost'
import PostsCard from '../components/Posts/PostsCard'

export default function Home() {
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <CreatePost/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/>
      </div>
    </HomeLayout>
  )
}
