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
      <section>
        <div className={styles.introductionWrap}>
          <h1 className={styles.introduction}>
            Hello!
            <br />
            I am <span>Arda F.</span>
            <br />
            Programmer
          </h1>
          <div className={styles.profileWrap}>
            <Image src={"/profile.png"} width={300} height={300} />
            <ul className={styles.social}>
              <li><a title="Twitter" href="#"><i class='bx bxl-github' /></a></li>
              <li><a title="E-Mail" href="#"><i class='bx bxs-envelope' /></a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section className={styles.container}>
        <h1 className={styles.child}>Slide 1</h1>
        <h1 className={styles.child}>Slide 2</h1>
        <h1 className={styles.child}>Slide 3</h1>
        <h1 className={styles.child}>Slide 4</h1>
        <h1 className={styles.child}>Slide 5</h1>
      </section> */}
    </PageContainer>
  )
}