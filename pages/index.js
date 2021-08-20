import styles from "../styles/Home.module.scss"

import PageContainer from "../components/pageContainer"
import SkillBar from "../components/skillBar"

import Image from 'next/image'

export default function Homepage() {
  return (
    <PageContainer>
      <div className={styles.sectionWrap}>
        <section id="home" className={styles.introductionWrap}>
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
              <li><a title="Twitter" href="#"><i className='bx bxl-github' /></a></li>
              <li><a title="E-Mail" href="#"><i className='bx bxs-envelope' /></a></li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <h2 className={styles.sectionTitle}>About</h2>
        <section id="about" className={`${styles.section} ${styles.grid}`}>
          <div className={styles.imageWrap}>
            <Image className={styles.image} src={"/profile_2.png"} width={320} height={420} />
          </div>
          <div className={styles.about}>
            <div>
              <h2>I am Arda Fevzi Armutcu</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <h2 className={styles.sectionTitle}>Skills</h2>
        <section id="skills" className={`${styles.section} ${styles.grid}`}>
          <SkillBar percentage={85} title="JavaScript" icon={"bx bxl-javascript"} />
          <SkillBar percentage={60} title="PHP" icon={"bx bxl-php"} />
          <SkillBar percentage={65} title="UX/UI" icon={"bx bxs-paint"} />
          <SkillBar percentage={50} title="Art" icon={"bx bxs-pen"} />
        </section>

        {/* PROJECTS */}
        <h2 className={styles.sectionTitle}>Work</h2>
        <section id="work" className={`${styles.section} ${styles.grid}`}>
          <h2>Coming Soon...</h2>
        </section>
      </div>
    </PageContainer >
  )
}