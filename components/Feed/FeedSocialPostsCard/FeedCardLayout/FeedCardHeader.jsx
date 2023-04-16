import React from 'react'
import Image from 'next/image'
import ngo10 from '../../../../public/images/feed/ngo10.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from '../FeedCard.module.scss'

function FeedCardHeader() {
  return (
 <div className={styles.postHeader}>
    <div className={styles.namecard}>
      <div className={styles.profileImg}>
        <Image src={ngo10} height={32} alt={''}/>
      </div>
      <div className={styles.details}>
        <p className={styles.authorName}>Muskaan Foundation</p>
        <p className={styles.username}>{"@"}muskaanFd6713</p>
      </div>
    </div>
    <div className={styles.viewMoreBtn}>
      <MoreHorizIcon className={styles.moreBtn}/>
    </div>
  </div>
  )
}

export default FeedCardHeader