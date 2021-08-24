import styles from "../styles/Home.module.scss"

import PageContainer from "../components/pageContainer"

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

const skills = [
  {
    title: "C#",
    percentage: "90",
    icon: "bx bx-code",
  },
  {
    title: "JavaScript",
    percentage: "80",
    icon: "bx bxl-javascript",
  },
  {
    title: "Design",
    percentage: "65",
    icon: "bx bxs-paint",
  },
  {
    title: "PHP",
    percentage: "60",
    icon: "bx bxl-php",
  },
  {
    title: "Art",
    percentage: "50",
    icon: "bx bxs-pen",
  },
  {
    title: "Story Writing",
    percentage: "30",
    icon: "bx bxs-book",
  }
]

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
            <img alt={"That's me"} src={"/profile.png"} width={350} height={350} />
            <ul className={styles.social}>
              <li><a aria-label="Github" target="_blank" title="Github" href="https://github.com/thejayduck" rel="noreferrer"><i className='bx bxl-github' /></a></li>
              <li><a aria-label="E-Mail" title="E-Mail" href="mailto:ardafevzi.armutcu@gmail.com"><i className='bx bxs-envelope' /></a></li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <h2 className={styles.sectionTitle}>About</h2>
        <section id="about" className={`${styles.section} ${styles.grid}`}>
          <div className={styles.imageWrap}>
            <img alt={"That's also me"} className={styles.image} src={"/profile_2.png"} width={320} height={420} />
          </div>
          <div>
            <h2>Yup that&apos;s me, Arda Fevzi Armutcu</h2>
            <p>
              I always liked to explore and learn new skills although most end up being as hobbies.
              <br />
              I recently started using Next.js and loving it so far.
              I am learning German to hopefully study at a German University.
              <br />
              I also enjoy reading a lot, well I've been into 'Light Novels' a lot more than western books.
              My biggest projects are 'Novel Tracker' and a secret project which I am still planning.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <h2 className={styles.sectionTitle}>Skills</h2>
        <section id="skills" className={`${styles.section} ${styles.grid}`}>
          {inView &&
            skills.map(q =>
              <SkillBar key={q.title} data={q} />
            )
          }
        </section>

        {/* PROJECTS */}
        <h2 className={styles.sectionTitle}>Works</h2>
        <section id="works" className={`${styles.section} ${styles.grid}`} ref={observe}>
          {inView &&
            data.map(q =>
              <Project key={q.title} data={q} />
            )
          }
        </section>
      </div>
    </PageContainer >
  )
}