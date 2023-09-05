import Reveal from '../utils/reveal';
import style from './sections.module.scss';

export default function Sections() {
  return (
    <>
      <main className={style['app-container']}>
        <section className={style.firstSection}>
          <Reveal y={200} duration={1} delay={0.5}>
            <h2>Scroll ⬇️</h2>
          </Reveal>
          <Reveal y={100} duration={1}>
            <p>Check the Framer Motion library in action.</p>
          </Reveal>
        </section>

        <section className={style.secondSection}>
          <Reveal x={200} rotate={360}>
            <h2>Nice🤠</h2>
          </Reveal>
          <Reveal>
            <p>
              <strong>It works! </strong>Framer Motion is a straightforward yet
              powerful library for React, easier to use than the Intersection
              Observer API. Let's explore some more examples.
            </p>
            <Reveal x={-200} delay={2}>
              <span>
                Bet you didn't expect this last one from the left, huh.
              </span>
            </Reveal>
          </Reveal>
        </section>
      </main>
    </>
  );
}
