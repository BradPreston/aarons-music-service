<svelte:head>
    <title>History | Aaron's Music Service</title>
</svelte:head>

<script>
    import { activeNavLink } from './stores';

    activeNavLink.set('history');
</script>

<div class="wrapper">
    <section>
    <h1>Our History</h1>
        <main>
            <h2>Aaron Cowles</h2>
        <picture>
            <source srcset="/images/aaron.webp" type="image/webp" />
            <source srcset="/images/aaron.jpg" type="image/jpg" />
            <img src="/images/aaron.jpg" alt="Aaron holding a guitar">
        </picture>
        <p>Aaron's Music was founded by Aaron Cowles, a Kalamazoo Gibson employee who was laid off in 1983 when Gibson was ending its Kalamazoo operations. In the first few years Aaron built Gibson's mandolins as Gibson had no in house expertise at its Nashville plant. Aaron built about 33 Gibson mandolins at his shop in the first few years.</p>
    
        <picture>
            <source srcset="/images/wilburn-brothers.webp" type="image/webp" />
            <source srcset="/images/wilburn-brothers.jpg" type="image/jpg" />
            <img src="/images/wilburn-brothers.jpg" alt="The Wilburn Brothers">
        </picture>
        <p>At Gibson Aaron worked for about 10 years in the custom carved section, where all custom guitars (e.g. a Les Paul with special inlays or more commonly, celebrity branded guitars such as this pair of acoustics held by the Wilburn Brothers) and carved top guitars were made and set up. His job title was as an "adjustor" but in the factory it was colloquially called "fret filer". An interesting fact, the Wilburn Brothers guitars’ custom pickguards, with their names Teddy and Doyle prominently displayed, were carved by Aaron at home. These two guitars are now in the Country Music Hall of Fame.He also founded his own brand name, Jubal, to build mandolins and archtop guitars, building many beautiful jazz guitars and traditional mandolins.</p>
            
        <picture>
            <source srcset="/images/rosewood.webp" type="image/webp" />
            <source srcset="/images/rosewood.jpg" type="image/jpg" />
            <img src="/images/rosewood.jpg" alt="Jubal acoustic guitar">
        </picture>
        <p>In the mid 1990s he acquired a 1934 Gibson Jumbo acoustic and kept it for himself to play. He had originally bought it thinking it was an early 50s guitar but further investigation proved it to be much earlier. Loving the tone of it, but wanting to protect it from bumps and bruises while playing weekend gigs with a local Bluegrass Gospel band, Aaron built a replica and pronounced it to sound just as good as the original. He subsequently built another of rosewood (the original was mahogany) and kept it as his main guitar for bluegrass from then on. He eventually sold the 1934 to Garnet Rogers who commissioned two more Jubals. Garnet’s friend Greg Brown also commissioned a couple of guitars and next thing you know, Aaron had transitioned from primarily building jazz guitars to bluegrass guitars.</p>
    
        <p>For several years in the 1990s he built jazz guitars with another brand name, Unity. In 1995 he produced several 100th anniversary models (100 years of guitar making in Kalamazoo) that were simply spectacular. The Thom Bresh Special is a prime example of his building style for archtops: <a href="https://www.youtube.com/watch?v=fNfMEGOvPCQ" target="_blank">https://www.youtube.com/watch?v=fNfMEGOvPCQ</a></p>

        <h2>Ed Miller</h2>
        <picture>
            <source srcset="/images/ed_portrait.webp" type="image/webp" />
            <source srcset="/images/ed_portrait.jpg" type="image/jpg" />
            <img src="/images/ed_portrait.jpg" alt="A portrait of Ed">
        </picture>
        <p>Ed Miller was born in January 1968. He grew up in Coldwater, but his grandmother lived here in
            Vicksburg. One day when he was still in high school he came to Vicksburg to visit his grandma and
            discovered Aaron’s Music and met Aaron.</p>
    
        <picture>
            <source srcset="/images/ed_banjo.webp" type="image/webp" />
            <source srcset="/images/ed_banjo.jpg" type="image/jpg" />
            <img src="/images/ed_banjo.jpg" alt="Ed holding a banjo">
        </picture>
        <p>Over the course of time Ed became Aaron’s protégé, learning the art of luthiery. Having learned his crdaft,
            Ed became the manager at Bobby Hankins Music in Coldwater, and stayed there throughout its
            changeover to Bert’s Music, and on through the end of its run.</p>

            <p>Ed was a good luthier and built many guitars, mandolins and other instruments throughout his life. He
                was a fine guitarist as well and was the house guitarist at the Gospel Barn in Hillsdale for many years.</p>
            
        <picture>
            <source srcset="/images/ed_guitar.webp" type="image/webp" />
            <source srcset="/images/ed_guitar.jpg" type="image/jpg" />
            <img src="/images/ed_guitar.jpg" alt="Ed playing a guitar">
        </picture>
        <p>He was a first rate intellect, raconteur and occasionally a real clown, as in “Scruffy the Clown”, performing
            for quite a few years in that persona.</p>

        <p>Ed has three sons of whom he was very proud, Eddie, David and Jonathan.</p>
    
        <p>When Aaron was diagnosed with cancer in the spring of 2013, Ed made the long trek nearly every day
            from Coldwater to Vicksburg to help keep the shop running. After Aaron’s passing in December that year,
            Ed continued to come into the shop regularly and gave much needed help and training to Steve for four
            years.</p>

        <p>Labor day weekend of 2018 Ed became very ill and went into the hospital, suffered cardiac arrest the next
                and never recovered, dying in November of that year.</p>

        <p>We miss him terribly here, but take joy in knowing he was a firm believer in Christ.</p>
        </main>
    </section>
</div>

<style>
    .wrapper {
        color: var(--main-color);
        padding: 20px 40px;
    }

    h1 {
        border-bottom: 1px solid var(--main-color);
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 3rem;
        font-weight: 100;
    }

    h2 {
        font-size: 25px;
        font-weight: 300;
        margin: 30px 0 10px 0;
        text-align: center;
    }

    section {
        padding-bottom: 70px;
        margin: 0 auto;
    }

    section picture:nth-of-type(even) img {
        float: right;
        padding: 5px 0 5px 5px;
    }

    img {
        height: 150px;
        float: left;
        padding: 5px 5px 5px 0;
    }

    p {
        margin-bottom: 10px;
        font-size: 1.6rem;
        font-weight: 300;
    }

    a {
        color: var(--main-color);
    }

    @media only screen and (min-width: 481px) {
        section {
            width: 75vw;
        }
    }

    @media only screen and (min-width: 769px) {
        section {
            width: 60vw;
        }

        img {
            height: 200px;
        }
    }
</style>