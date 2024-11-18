<script lang='ts'>
    import { gsap } from 'gsap';
    import Navbar from '$lib/components/navbar.svelte';
    let innerWidth = $state(0);
    let innerHeight = $state(0);
    let aboutMe: SVGTextPathElement;
    let software: SVGTextPathElement;
    let cyber: SVGTextPathElement;
    let hero: HTMLElement;
    let bull1: SVGTextPathElement;
    let bull2: SVGTextPathElement;
    let logo: HTMLImageElement;
    let heroAnimComplete: boolean = false;

    let navbar: HTMLElement;
    let comingSoon: HTMLElement;

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            innerWidth = window.innerWidth/2 - 325;
            innerHeight = window.innerHeight/2;
        }
    };

    function handleHeroScroll(event: Event) {
        event.preventDefault();
        const { deltaY } = event as WheelEvent;
        console.log(aboutMe.startOffset.baseVal.valueInSpecifiedUnits)
        if(deltaY != 0) {
            console.log(aboutMe.startOffset.baseVal.valueInSpecifiedUnits)
            if(aboutMe.startOffset.baseVal.valueInSpecifiedUnits <= 1 && deltaY/Math.abs(deltaY) == -1) {
                gsap.to(aboutMe, {
                    duration: 0.1,
                    attr: {startOffset: '1%'}
                })
                gsap.to(bull1, {
                    duration: 0.1,
                    attr: {startOffset: '8%'}
                })
                gsap.to(software, {
                    duration: 0.1,
                    attr: {startOffset: '10%'}
                })
                gsap.to(bull2, {
                    duration: 0.1,
                    attr: {startOffset: '23%'}
                })
                gsap.to(cyber, {
                    duration: 0.1,
                    attr: {startOffset: '25%'}
                })
                return
            }
            if(cyber.startOffset.baseVal.valueInSpecifiedUnits >= 91 && deltaY/Math.abs(deltaY) == 1) {
                bull1.style.display = 'none';
                bull2.style.display = 'none';
                gsap.to(cyber, {
                    duration: 0.1,
                    attr: {startOffset: '91%'}
                })
                gsap.to(software, {
                    duration: 0.1,
                    attr: {startOffset: '78%'}
                })
                gsap.to(aboutMe, {
                    duration: 0.1,
                    attr: {startOffset: '71%'}
                })
                var tl = gsap.timeline();
                tl.to(logo, {
                    duration: 0.3,
                    attr: {width: 50, top: '0px', left: '0px'}
                })
                tl.to(hero, {
                    duration: 0.1,
                    opacity: 0,
                    ease: "power2.out",
                    onComplete: () => {
                        hero.style.display = 'none';
                        tl.to(navbar, {
                            duration: 0.1,
                            display: 'block',
                            opacity: 1,
                            ease: "power2.in"
                        })
                        tl.to(comingSoon, {
                            delay: 0.1,
                            duration: 0.2,
                            display: 'block',
                            opacity: 1,
                            ease: "power2.in"
                    })
                    }
                })
                logo.style.top = '0px'
                logo.style.left = '0px'
                heroAnimComplete = true;
                document.body.style.overflow = 'visible';
                window.removeEventListener('wheel', handleHeroScroll);
                window.removeEventListener('touchmove', handleHeroScroll);

                return
            }
            gsap.to(logo, {
                duration: 0.3,
                attr: {width: 600, top: `${innerHeight - 300}px`, left: `${innerWidth + 25}px`}
            })
            logo.width = 600;
            logo.height = 600;
            logo.style.top = `${innerHeight - 300}px`
            logo.style.left = `${innerWidth + 25}px`
            bull1.style.display = 'block';
            bull2.style.display = 'block';
            gsap.to(bull1, {
                duration: 0.1,
                attr: {startOffset: `${bull1.startOffset.baseVal.valueInSpecifiedUnits + (3 * (deltaY/Math.abs(deltaY)))}%`}
            })
            gsap.to(bull2, {
                duration: 0.1,
                attr: {startOffset: `${bull2.startOffset.baseVal.valueInSpecifiedUnits + (3 * (deltaY/Math.abs(deltaY)))}%`}
            })
            gsap.to(cyber, {
                duration: 0.1,
                attr: {startOffset: `${cyber.startOffset.baseVal.valueInSpecifiedUnits + (3 * (deltaY/Math.abs(deltaY)))}%`}
            })
            gsap.to(software, {
                duration: 0.1,
                attr: {startOffset: `${software.startOffset.baseVal.valueInSpecifiedUnits + (3 * (deltaY/Math.abs(deltaY)))}%`}
            })
            gsap.to(aboutMe, {
                duration: 0.1,
                attr: {startOffset: `${aboutMe.startOffset.baseVal.valueInSpecifiedUnits + (3 * (deltaY/Math.abs(deltaY)))}%`}
            })
        }    
    }

    // Update dimensions on component mount
    if (typeof window !== 'undefined') {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        window.addEventListener('wheel', handleHeroScroll, {passive: false});
        window.addEventListener('touchmove', handleHeroScroll, {passive: false});
        if(!heroAnimComplete) document.body.style.overflow = 'hidden';
    }
</script>
    <div bind:this={hero} class='h-screen'>
        <svg class='absolute w-screen h-screen'>
            <path id='curve' d='M{innerWidth},{innerHeight} 
        a1,1 0 0,0 650,0
        a325,325 1 0,0 -325,-325
        a325,325 0 0,0 -253,125.5
        a100,100 0 0,1 0,-{innerHeight - 210}
        H{innerWidth*2+650}' fill='none' stroke='none'/>
            <text>
                <textPath bind:this={aboutMe} xlink:href='#curve' startOffset='1%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    About Me
                </textPath>
                <textPath bind:this={bull1} xlink:href='#curve' startOffset='8%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath bind:this={software} xlink:href='#curve' startOffset='10%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Software Developer
                </textPath>
                <textPath bind:this={bull2} xlink:href='#curve' startOffset='23%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath bind:this={cyber} xlink:href='#curve' startOffset='25%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Cybersecurity
                </textPath>
            </text>
        </svg>
        <img bind:this={logo} width='600' height='600' style='position:absolute; right:{innerWidth+25}px; top:{innerHeight - 300}px' src='/images/logo.svg' alt='Casey Nazelrod Logo'>
    </div>
    
    <div bind:this={navbar} class='hidden opacity-0'><Navbar/>
        <h1 bind:this={comingSoon} class='text-9xl text-center text-blue-100 mt-5 font-black hidden opacity-0'>Coming Soon</h1>
    </div>

  