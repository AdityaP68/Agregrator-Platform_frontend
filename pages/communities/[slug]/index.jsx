
import styles from './CommunityById.module.scss'
import HomeLayout from '../../../components/Layouts/HomeLayout'
import CreatePost from '../../../components/CreatePost/CreatePost'
import CommunityHeader from '../../../components/Community/CommunityHeader'
import FeedCard from '../../../components/Feed/FeedCard/FeedCard'

export default function index() {
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <CommunityHeader/>
        <CreatePost/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
    </HomeLayout>
  )
}
