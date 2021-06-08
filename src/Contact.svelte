<svelte:head>
    <title>Home | Aaron's Music Service</title>
</svelte:head>

<script>
    import { activeNavLink } from './stores';

    activeNavLink.set('contact');
</script>

<div class="wrapper">
    <h1>Contact</h1>
    <section>
        <div class="contact-links">
            <a href="tel:269-649-3292">Call: (269) 649-3929</a>
            <a href="mailto: steve@aaronsmusicservice.com">Email: steve@aaronsmusicservice.com</a>
            <div class="social-icons">
                <a href="https://www.facebook.com/aaronsmusicservice/" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
            
                <a href="https://www.instagram.com/jubalguitars/" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            
                <a href="https://www.youtube.com/channel/UCFNTkz3sM8CXF9dQsSzn1EQ/featured" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
            </div>
        </div>
        <div class="hours-container">
            <h3>Hours:</h3>
            <div class="hours">
                <div class="days">
                    <p>Sunday</p>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                </div>
    
                <div class="store-hours">
                    <p>Closed</p>
                    <p>Closed</p>
                    <p>10 am - 6 pm</p>
                    <p>10 am - 6 pm</p>
                    <p>10 am - 6 pm</p>
                    <p>10 am - 6 pm</p>
                    <p>10 am - 2 pm</p>
                </div>
            </div>
        </div>
    </section>
    

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.4471296986003!2d-85.532219!3d42.1193102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8817a19a9d240f51%3A0xba354891f6f5874e!2sAaron&#39;s%20Music%20Service!5e0!3m2!1sen!2sus!4v1623089859006!5m2!1sen!2sus" allowfullscreen="" loading="lazy" title="map"></iframe>
</div>

<style>

    .wrapper {
        padding: 20px 40px;
        color: var(--main-color);
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: var(--main-color);
        font-size: 3rem;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--main-color);
    }

    a {
        color: var(--main-color);
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
    }

    .hours-container {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
    }

    .hours {
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        width: 80%;
    }

    .social-link,
    svg {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 5px;
        margin-right: 20px;
    }

    .social-icons {
        display: flex;
        margin-bottom: 20px;
    }

    svg {
        fill: var(--main-color);
    }

    iframe {
        width: 80%;
        height: 400px;
        margin: 0 auto;
    }

    @media only screen and (min-width: 481px) {
        iframe {
            width: 400px;
        }

        .hours {
            width: 80%;
        }

        section {
            margin: 0 auto;
        }
    }

    @media only screen and (min-width: 769px) {
        section {
            display: flex;
            flex-flow: row-reverse;
            justify-content: space-around;
            margin-bottom: 10px;
            width: 600px;
        }

        iframe {
            width: 500px;
            height: 500px;
        }

        .hours {
            width: 100%;
            margin-right: 10px;
        }

        .contact-links {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 10px;
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 330px) {
        .hours-container {
            flex-direction: column;
        }

        p,
        a {
            font-size: 1.2rem;
        }
    }
</style>