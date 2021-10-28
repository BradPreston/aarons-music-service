<script>
    const date = new Date();
    export let year = date.getFullYear();
</script>

<footer>
    <p>&copy; <span id="year">{year}</span> | Aaron's Music Service</p>
    <p>Site by <a href='https://www.bradpreston.dev' target='_blank'>Brad Preston</a></p>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        z-index: 1000000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #000000;
        font-weight: 300;
        font-size: 1.2rem;
    }

    p {
        color: var(--white);
    }

    a {
        color: var(--white);
    }
</style>