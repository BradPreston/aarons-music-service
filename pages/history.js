import Layout from "../components/layout";
import styles from "../styles/history.module.scss";

export default function History() {
  return (
    <Layout>
      <div className={styles.history}>
        <h2 className={styles.history_heading}>History</h2>
        <p>
          <img className={styles.history_img} src="/aaron-mobile.png" />
          Aaron's Music was founded by Aaron Cowles, a Kalamazoo Gibson employee
          who was laid off in 1983 when Gibson was ending its Kalamazoo
          operations. In the first few years Aaron built Gibson's mandolins as
          Gibson had no in house expertise at its Nashville plant. Aaron built
          about 33 Gibson mandolins at his shop in the first few years.
        </p>
        <p>
          <img className={styles.history_img} src="/rosewood-mobile.png" />
          At Gibson Aaron worked for about 10 years in the custom carved
          section, where all custom guitars (e.g. a Les Paul with special inlays
          or more commonly, celebrity branded guitars such as this pair of
          acoustics held by the Wilburn Brothers) and carved top guitars were
          made and set up. His job title was as an "adjustor" but in the factory
          it was colloquially called "fret filer". An interesting fact, the
          Wilburn Brothers guitars’ custom pickguards, with their names Teddy
          and Doyle prominently displayed, were carved by Aaron at home. These
          two guitars are now in the Country Music Hall of Fame.He also founded
          his own brand name, Jubal, to build mandolins and archtop guitars,
          building many beautiful jazz guitars and traditional mandolins.
        </p>
        <p>
          <img
            className={styles.history_img}
            src="/wilburn-brothers-mobile.png"
          />
          In the mid 1990s he acquired a 1934 Gibson Jumbo acoustic and kept it
          for himself to play. He had originally bought it thinking it was an
          early 50s guitar but further investigation proved it to be much
          earlier. Loving the tone of it, but wanting to protect it from bumps
          and bruises while playing weekend gigs with a local Bluegrass Gospel
          band, Aaron built a replica and pronounced it to sound just as good as
          the original. He subsequently built another of rosewood (the original
          was mahogany) and kept it as his main guitar for bluegrass from then
          on. He eventually sold the 1934 to Garnet Rogers who commissioned two
          more Jubals. Garnet’s friend Greg Brown also commissioned a couple of
          guitars and next thing you know, Aaron had transitioned from primarily
          building jazz guitars to bluegrass guitars.
        </p>
        <p>
          For several years in the 1990s he built jazz guitars with another
          brand name, Unity. In 1995 he produced several 100th anniversary
          models (100 years of guitar making in Kalamazoo) that were simply
          spectacular. The Thom Bresh Special is a prime example of his building
          style for archtops:{" "}
          <a href="https://www.youtube.com/watch?v=fNfMEGOvPCQ">
            https://www.youtube.com/watch?v=fNfMEGOvPCQ
          </a>
        </p>
      </div>
    </Layout>
  );
}
