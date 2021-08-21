import styles from "../styles/Home.module.scss"

import PageContainer from "../components/pageContainer"

import Image from 'next/image'
import useInView from "react-cool-inview"
import dynamic from 'next/dynamic'

const SkillBar = dynamic(() => import("../components/skillBar"))
const Project = dynamic(() => import("../components/project"))

export async function getStaticProps() {
  const res = await fetch('https://gist.githubusercontent.com/thejayduck/274ef60be752e3bcd3dc677dc3423933/raw')
  const data = await res.json();

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default function Homepage({ data }) {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

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
            <Image alt={"That's me"} src={"/profile.png"} width={300} height={300} />
            <ul className={styles.social}>
              <li><a aria-label="Github" title="Github" href="https://github.com/thejayduck" rel="noreferrer"><i className='bx bxl-github' /></a></li>
              <li><a aria-label="E-Mail" title="E-Mail" href="mailto:ardafevzi.armutcu@gmail.com"><i className='bx bxs-envelope' /></a></li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <h2 className={styles.sectionTitle}>About</h2>
        <section id="about" className={`${styles.section} ${styles.grid}`}>
          <div className={styles.imageWrap}>
            <Image alt={"That's also me"} className={styles.image} src={"/profile_2.png"} width={320} height={420} />
          </div>
          <div>
            <h2>Yup that's me, Arda Fevzi Armutcu</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda,
              quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis!
              Recusandae alias accusamus atque.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <h2 className={styles.sectionTitle}>Skills</h2>
        <section id="skills" className={`${styles.section} ${styles.grid}`}>
          {inView &&
            <>
              <SkillBar percentage={90} title="C#" icon={"bx bx-code"} />
              <SkillBar percentage={80} title="JavaScript" icon={"bx bxl-javascript"} />
              <SkillBar percentage={60} title="PHP" icon={"bx bxl-php"} />
              <SkillBar percentage={65} title="Design" icon={"bx bxs-paint"} />
              <SkillBar percentage={50} title="Art" icon={"bx bxs-pen"} />
            </>
          }
        </section>

        {/* PROJECTS */}
        <h2 className={styles.sectionTitle}>Works</h2>
        <section id="works" className={`${styles.section} ${styles.grid}`} ref={observe}>
          {
            data.map(q =>
              <Project key={q.title} data={q} />
            )
          }
        </section>
      </div>
    </PageContainer >
  )
}