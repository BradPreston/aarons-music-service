<svelte:head>
    <title>Home | Aaron's Music Service</title>
</svelte:head>

<script>
    import { activeNavLink } from './stores';

    activeNavLink.set('home');
</script>

<div class="wrapper">
    <main>
    <section>
        <div class="hero">
            <h1 id="main-header">Aaron's Music Service</h1>
            <h2 id="secondary-header">Hand Crafted Guitars Since 1983</h2>
        </div>
        <em><p>We build, repair, and consign stringed instruments</p></em>
        <a href="/history" on:click={() => activeNavLink.set('history')}>Our history<span class="arrow">&#8594;</span></a>
    </section>
    </main>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    section {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero {
        display: flex;
        color: var(--main-color);
    }

    h1 {
        font-size: 4.1rem;
        text-align: right;
    }

    h2 {
        font-size: 2.4rem;
        margin-left: 10px;
        border-left: 1px solid var(--main-color);
        padding-left: 10px;
    }

    h1, 
    h2 {
        width: -webkit-min-content;
        width: -moz-min-content;
        width: min-content;
        display: table-caption;
        display: -ms-grid;
        -ms-grid-columns: min-content;

        font-weight: 100;
    }

    p {
        color: var(--main-color);
        font-size: 1.4rem;
        font-weight: 200;
        margin: 30px 0 10px 0;
        text-align: center;
    }

    a {
        color: var(--white);
        text-decoration: none;
        padding-bottom: 5px;
        font-weight: 300;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        transition: .25s ease;
        position: relative;
        width: 102px;
    }

    a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid var(--main-color);
        width: 100%;
    }

    a:hover {
        color: var(--main-color);
    }

    .arrow {
        padding-left: 5px;
    }

    a:hover > .arrow {
        animation-name: slidingArrow;
        animation-duration: .75s;
        animation-iteration-count: infinite;
    }

    @keyframes slidingArrow {
        0% {
            padding-left: 5px;
        }
        50% {
            padding-left: 7px;
        }
        100% {
            padding-left: 5px;
        }
    }

    @media only screen and (min-width: 481px) {
        h1 {
            font-size: 5rem;
        }

        h2 {
            font-size: 2.9rem;
        }
    }

    @media only screen and (min-width: 769px) {
        h1 {
            font-size: 7rem;
            line-height: .9;
        }

        h2 {
            font-size: 3.8rem;
            margin-left: 20px;
            padding-left: 20px;
            line-height: 1;
        }

        .hero {
            margin-bottom: 20px;
        }

        a {
            font-size: 1.8rem;
            width: 113px;
        }

        p {
            font-size: 1.6rem;
        }
    }
</style>