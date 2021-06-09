<script>
    export let thumbImg;
    export let alt;
    export let selected;
</script>

<div class="thumbnail-container">
    <picture>
        <source srcset='../images/gallery/{thumbImg}.webp' type="image/webp" />
        <source srcset='../images/gallery/{thumbImg}.jpg' type="image/jpg" />
        <img 
            class='sample cursor'
            class:active={selected}
            src='../images/gallery/{thumbImg}.jpg'
            alt={alt}
            on:click>
    </picture>
</div>

<style>
   .thumbnail-container {
       float: left;
       width: 33%;
   }

   .sample {
       opacity: .6;
   }

   .active,
   .sample:hover {
       opacity: 1;
   }

   img {
       width: 100%;
       height: 100%;
       transition: all .1s ease;
   }

   .cursor {
       cursor: pointer;
   }

   @media only screen and (min-width: 769px) {
       .thumbnail-container {
           width: 20%;
       }
   }
</style>