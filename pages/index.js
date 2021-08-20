import styles from "../styles/Home.module.scss"

import PageContainer from "../components/pageContainer"
import Image from 'next/image'

export default function Homepage() {
  return (
    <PageContainer>
      {/* <section className={styles.container}>
        <h1 className={styles.child}>Slide 1</h1>
        <h1 className={styles.child}>Slide 2</h1>
        <h1 className={styles.child}>Slide 3</h1>
        <h1 className={styles.child}>Slide 4</h1>
        <h1 className={styles.child}>Slide 5</h1>
      </section> */}
      <div className={styles.introductionWrap}>
        <h1 className={styles.introduction}>
          Hello,
          <br />
          I am <span>Arda!</span>
          <br />
          And I am a <span>Programmer</span>
        </h1>
        <Image className={styles.image} src="/blob.svg" alt="Image" width={512} height={512} />
      </div>
    </PageContainer>
  )
}