<svelte:head>
    <title>Photos | Aaron's Music Service</title>
</svelte:head>

<script>
    import Lightbox from './components/gallery/Lightbox.svelte';
    import ImageDisplay from './components/gallery/ImageDisplay.svelte';
    import { activeNavLink } from './stores';

    activeNavLink.set('photos');

    let modalOpen = false;

    let imageShowIndex = 0;

    const handleImgClick = (e) => {
        imageShowIndex = Number(e.target.id);
        modalOpen = true;
    }
</script>

<div class="wrapper">
    <h1>Photos</h1>
    {#if modalOpen}
        <Lightbox on:click={() => modalOpen = false} {imageShowIndex} />
    {:else}
        <ImageDisplay on:click={e => handleImgClick(e)} />
    {/if}
    
</div>
<style>
    .wrapper {
        padding: 20px 40px;
    }

    h1 {
        color: var(--main-color);
        font-size: 3rem;
        border-bottom: 1px solid var(--main-color);
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-weight: 100;
    }

    @media only screen and (min-width: 769px) {
        .wrapper {
            width: 60vw;
            margin: 50px auto;
        }
    }
</style>