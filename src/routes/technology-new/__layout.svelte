<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '$/css/global.scss';

	import { onMount } from 'svelte';

  let navItems: NodeListOf<HTMLAnchorElement>;
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const darkSection = entry.target.querySelector('.dark');
          if (darkSection) {
            navItems.forEach(item => {
              item.style.color = 'white';
            });
          }
        } else {
          navItems.forEach(item => {
            item.style.color = '';
          });
        }
      });
    }, observerOptions);

    observer.observe(document.querySelector('.nav-container nav'));

    return () => {
      observer.disconnect();
    };
  });
</script>

<main>
	

  <section class="container">
		<aside>
			<Nav logoScale={1} />
		</aside>
    <slot />
  </section>
</main>

<style lang="scss">
  main {
		min-height: 100%;
		width: 100%;
	}

  aside {
		position: relative;
		top: 0;
		left: 0;
		z-index: 9999;

		display: flex;
		justify-content: center;

		padding: 6% 5% 6% 5%;
		filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.25));
	}

	section {
		min-height: 100%;
		width: 100%;
	}

  @media(min-width: 1024px) {
		aside {
			position: fixed;
			width: 20vw;
			height: 100%;
			padding: 3rem 0;
		}
	}
	// aside nav {
	// 	align-items: flex-start;
	// }

	// @media(max-width: 1023px) {
		aside nav {
			align-items: center !important;
		}
	// }
</style>
