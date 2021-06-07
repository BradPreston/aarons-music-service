<script>
import { images } from '../../imageData';
</script>

<div class="demo-img-row">
    {#each images as { id, fileName, alt }}
        <div class="demo-container">
            <picture>
                <source srcset="/images/gallery/{fileName}.webp" type="image/webp" />
                <source srcset="/images/gallery/{fileName}.jpg" type="image/jpg" />

                <img {id} src='/images/gallery/{fileName}.jpg' alt={alt} on:click />
            </picture>
        </div>
    {/each}
</div>

<style>
    .demo-img-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 70px;
    }

    .demo-container {
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: calc(100% - 20px);
        margin: 10px;
        transition: .2s;
        cursor: pointer;
    }

    img:hover {
        box-shadow: 0 0 13px rgba(0, 0, 0, .8);
    }

    @media only screen and (min-width: 769px) {
        .demo-container {
            width: 25%;
        }
    }
</style>