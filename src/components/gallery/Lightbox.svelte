<script>
    import { fly } from 'svelte/transition';
    import { images } from '../../imageData';
    import Slide from './Slide.svelte';
    import Thumbnail from './Thumbnail.svelte';

    export let imageShowIndex = 0;
    $: console.log(imageShowIndex);
    $: image = images[imageShowIndex]; 

    const prevSlide = () => {
        if (imageShowIndex === 0) {
            imageShowIndex = images.length -1;
        } else {
            imageShowIndex -= 1;
        }
    }

    const nextSlide = () => {
        if (imageShowIndex === images.length - 1) {
            imageShowIndex = 0;
        } else {
            imageShowIndex += 1;
        }
    }

    const goToSlide = (slideID) => imageShowIndex = Number(slideID);
</script>

    <section class="lightbox" in:fly={{ x: -300 }}>
        <span class="close cursor" on:click>&#10006;</span>
        <main>
        <div class="gallery-container">
            <Slide 
                image={image.fileName}
                alt={image.alt}
                slideNumber={image.id + 1}
                totalSlides={images.length}
                imageShowing={image.id === imageShowIndex}
            />
        </div>
    
        <button class="prev" on:click={prevSlide}>&#10094;</button>
        <button class="next" on:click={nextSlide}>&#10095;</button>
    
        <div class="thumbnails-row">
            {#each images as { id, fileName, alt }}
                <Thumbnail
                    thumbImg={fileName}
                    alt={alt} 
                    selected={id === Number(imageShowIndex)}
                    on:click={() => goToSlide(id)} />
            {/each}
        </div>
        </main>
    </section>

<style>

   .gallery-container {
       position: relative;
       padding-top: 30px;
   }

   .prev,
   .next {
       cursor: pointer;
       position: absolute;
       top: 25%;
       width: auto;
       padding: 16px;
       margin-top: -50px;
       color: var(--white);
       font-weight: 400;
       font-size: 2rem;
       border-radius: 0 3px 3px 0;
       user-select: none;
       -webkit-user-select: none;
       border: none;
       background: transparent;
       transition: .15s ease;
   }

   .next {
       right: 0;
       border-radius: 3px 0 0 3px;
   }

   .prev:hover,
   .next:hover {
       background: var(--main-color);
   }

   .thumbnails-row:after {
       content: '';
       display: table;
       clear: both;
   }

   .lightbox {
       position: absolute;
       z-index: 1;
       left: 50%;
       transform: translate(-50%);
       top: 140px;
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       padding-bottom: 100px;
       -ms-overflow-style: none;
       scrollbar-width: none;
       overflow-y: scroll;
   }

   .lightbox::-webkit-scrollbar {
       display: none;
   }

   .close {
       color: var(--white);
       position: absolute;
       top: 0;
       right: 10px;
       font-size: 2rem;
       font-weight: lighter;
       z-index: 10;
   }

   .close:hover,
   .close:focus {
       color: #999;
       text-decoration: none;
       cursor: pointer;
   }

   @media only screen and (min-width: 350px) {
       .lightbox {
           width: 350px;
       }
   }

   @media only screen and (min-width: 481px) {
       .lightbox {
           width: 420px;
       }

       .prev,
       .next {
           top: 20%;
       }
   }

   @media only screen and (min-width: 769px) {
       .lightbox {
           width: 700px;
       }

       .prev,
       .next {
           top: 30%;
       }
   }

   @media only screen and (min-width: 1281px) {
       .lightbox {
           width: 920px;
       }

       .prev,
       .next {
           top: 30%;
       }
   }
</style>