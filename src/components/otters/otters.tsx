import { ottersDB } from './otters.db';
import Reveal from '../utils/reveal';
import style from './otters.module.scss';

export default function Otters() {
  return (
    <section className={style.otters}>
      {ottersDB.map((_, index) => (
        <article key={index}>
          <Reveal opacity={1} y={100} blur={100} duration={1}>
            <img src={ottersDB[index]} alt="Unsplash picture of an Otter" />
          </Reveal>
        </article>
      ))}
    </section>
  );
}
