
import styles from './CommunityById.module.scss'
import HomeLayout from '../../../components/Layouts/HomeLayout'
import CreatePost from '../../../components/CreatePost/CreatePost'
import CommunityHeader from '../../../components/Community/CommunityHeader'
import PostsCard from '../../../components/Posts/PostsCard'

export default function index() {
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <CommunityHeader/>
        <CreatePost/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/>
      </div>
    </HomeLayout>
  )
}
