<script>
import Footer from "../Footer.svelte";

</script>

<style lang="scss">
    .services {
        color: var(--app-color-navy-contrast);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4vw;
        margin-bottom: 20vw;
    }

    .services-main-heading {
        font-weight: bold;
        font-size: 40px;
        line-height: 80px;
    }

    .services-main-subheading {
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        padding: 0vw 20vw;
    }

    // NEW COMPONENT

    .services-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5vw;
    }

    .services-heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 80px;
        text-transform: uppercase;
        text-align: center;
    }

    .services-subheading {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0vw 10vw;
        text-transform: uppercase;
        gap: 5vw;

        .services-card {
            display: flex;
            flex-direction: column;
            gap: 2vw;

            .services-title {
                font-family: "Bebas Neue";
                font-weight: normal;
                font-size: 20px;
                line-height: 25px;
                text-transform: uppercase;
            }

            .services-info {
                font-weight: normal;
                font-size: 12px;
                line-height: 140%;
            }
        }
    }

    .services-btn {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        box-sizing: border-box;
        border-radius: 50px;
        color: white;
        padding: 3.55vw 15vw;
        text-transform: uppercase;
        margin-bottom: 20vw;
        margin-top: 8vw;
        cursor: pointer;
    }
    
</style>
    
<div>
    <div class="services">
        <div>
            <img src="/work-img/services-home-image-xs.png" alt="rigo agency">
        </div>
        <div class="services-main-heading">Services</div>
        <div class="services-main-subheading">
            Services developed from years of problem solving for brands just like yours.
            <br><br>
            Elevate credibility with diligently crafted thought leadership content;
            create a website from scratch with persuasive copy, eye-catching design and
            seamless UX, or increase your lead flow with email marketing. 
        </div>
    </div>

    <div class="services-container" style="color: var(--app-color-yellow)">
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.82666 0.861328H313.763" stroke="var(--app-color-yellow)"/>
            </svg>                
        </div>
        <div class="services-heading">+ Technical</div>
        <div class="services-subheading">
            <div class="services-card">
                <div class="services-title">Brochure Websites</div>
                <div class="services-info">Design, UX, seo, copy and development.<br>Everything you need with rigo.</div>
            </div>
            <div class="services-card">
                <div class="services-title">Crypto/NFT</div>
                <div class="services-info">Coming soon</div>
            </div>
        </div>
        <div>
            <button class="services-btn" style="background-color: var(--app-color-yellow); border: 1px solid var(--app-color-yellow;">Discover more</button>
        </div>
    </div>

    <div class="services-container" style="color: var(--app-color-green)">
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.82666 0.861328H313.763" stroke="var(--app-color-green)"/>
            </svg>                
        </div>
        <div class="services-heading">+ Data</div>
        <div class="services-subheading">
            <div class="services-card">
                <div class="services-title">SEO</div>
                <div class="services-info">start by finding your target search<br>terms, them watch your traffic and leads<br>grow as you climb through the ranks. </div>
            </div>
            <div class="services-card">
                <div class="services-title">Data Dashboard</div>
                <div class="services-info">start by finding your target search terms,<br>them watch your traffic and leads grow<br>as you climb through the ranks. </div>
            </div>
            <div class="services-card">
                <div class="services-title">Marketing Intelligence</div>
                <div class="services-info">Audits and analyse your content and<br>that of your competitors’ to identify<br>gaps and opportunities. </div>
            </div>
        </div>
        <div>
            <button class="services-btn" style="background-color: var(--app-color-green); border: 1px solid var(--app-color-green);">Discover more</button>
        </div>
    </div>

    <div class="services-container" style="color: var(--app-color-red)">
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.82666 0.861328H313.763" stroke="var(--app-color-red)"/>
            </svg>                
        </div>
        <div class="services-heading">+ Creative</div>
        <div class="services-subheading">
            <div class="services-card">
                <div class="services-title">original articles</div>
                <div class="services-info">from idea to publication, thought<br>leadership pieces to showcase your expertise<br>and build trust with your customers</div>
            </div>
            <div class="services-card">
                <div class="services-title">tone of voice</div>
                <div class="services-info">succinct messaging documents, or full<br>brand consultations to overhaul your<br>tone of voice. Do what’s needed. </div>
            </div>
            <div class="services-card">
                <div class="services-title">social</div>
                <div class="services-info">coming soon </div>
            </div>
            <div class="services-card">
                <div class="services-title">branding</div>
                <div class="services-info">makle your new business real with the<br>essential brand assets for launch</div>
            </div>
            <div class="services-card">
                <div class="services-title">google News</div>
                <div class="services-info">the content and experience needed<br>to get your publication or website<br>accepted to google news</div>
            </div>
        </div>
        <div>
            <button class="services-btn" style="background-color: var(--app-color-red); border: 1px solid var(--app-color-red);">Discover more</button>
        </div>
    </div>

    <div class="services-container" style="color: var(--app-color-blue)">
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.82666 0.861328H313.763" stroke="var(--app-color-blue)"/>
            </svg>                
        </div>
        <div class="services-heading">+ Creative</div>
        <div class="services-subheading">
            <div class="services-card">
                <div class="services-title">linkedin  campaigns</div>
                <div class="services-info">in-depth audience targeting and<br>standout creative will get your business In<br>front of the right audience</div>
            </div>
            <div class="services-card">
                <div class="services-title">paid search</div>
                <div class="services-info">highly targeted cost-effective campaigns that<br>drive quality interactions and attract leads</div>
            </div>
            <div class="services-card">
                <div class="services-title">digital pr</div>
                <div class="services-info">build relationships and share something<br>that gets people talking</div>
            </div>
            <div class="services-card">
                <div class="services-title">email marketing</div>
                <div class="services-info">powerful automated email welcome<br>series, nurture your contacts and leads<br>into customers.</div>
            </div>
        </div>
        <div>
            <button class="services-btn" style="background-color: var(--app-color-blue); border: 1px solid var(--app-color-blue);">Discover more</button>
        </div>
    </div>

    <div style="margin: 10vw 5vw;">
        <Footer href="/work/Gallagher">Gallagher</Footer>
    </div>

</div>