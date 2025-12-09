import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/Foundations/introduction">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureItem({title, description, emoji}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '4rem', marginBottom: '1rem'}}>
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureItem
            emoji="🤖"
            title="Three Learning Levels"
            description="Beginner to Professional - learn at your pace with adaptive content tailored to your skill level."
          />
          <FeatureItem
            emoji="🎯"
            title="Hands-On Projects"
            description="Build real robots! From simple sensors to autonomous humanoids with voice control."
          />
          <FeatureItem
            emoji="🚀"
            title="Industry-Ready Skills"
            description="Master ROS 2, NVIDIA Isaac, and humanoid robotics for cutting-edge AI careers."
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn Physical AI and Humanoid Robotics from Beginner to Professional">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}