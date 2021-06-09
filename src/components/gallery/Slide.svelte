<script>
    export let image;
    export let alt;
    export let totalSlides;
    export let slideNumber;
    export let imageShowing;
</script>

<div class="mySlides" class:show={imageShowing}>
    <div class="numbertext">{slideNumber} / {totalSlides}</div>
    <picture>
        <source srcset='../images/gallery/{image}.webp' type="image/webp" />
        <source srcset='../images/gallery/{image}.jpg' type="image/jpg" />
        <img src='/images/gallery/{image}.jpg' alt={alt}>
    </picture>
</div>

<style>

    .numbertext {
        color: var(--white);
        font-size: 1.2rem;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }
    img {
        width: 100%;
    }
</style>