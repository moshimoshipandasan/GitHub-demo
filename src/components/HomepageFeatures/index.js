import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '初心者にやさしい',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        中学生でも理解できるように、専門用語を避けて丁寧に説明。
        ブラウザだけで始められるので、環境構築の心配もありません。
      </>
    ),
  },
  {
    title: '実践的な内容',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        実際に手を動かしながら学ぶワークショップ形式。
        Day 1で自分のWebサイトを世界に公開できます！
      </>
    ),
  },
  {
    title: '段階的な学習',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        基礎編6回、応用編3回の構成で無理なくステップアップ。
        Google Apps Script連携など実用的な内容も学べます。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}