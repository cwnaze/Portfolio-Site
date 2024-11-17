<script lang='ts'>
    let innerWidth = $state(0);
    let innerHeight = $state(0);
    let scrollY = 0;
    let aboutMeOffset = $state(1);
    let bull1Offset = $state(8);
    let softwareOffset = $state(10);
    let bull2Offset = $state(23);
    let cyberOffset = $state(25);

    let bull1: SVGTextPathElement;
    let bull2: SVGTextPathElement;

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            innerWidth = window.innerWidth/2 - 325;
            innerHeight = window.innerHeight/2;
        }
    };

    function handleHeroScroll(event: Event) {
        event.preventDefault();
        scrollY = window.scrollY;
        if(scrollY != 0) {
            if(aboutMeOffset == 1 && scrollY/Math.abs(scrollY) == -1) return
            if(cyberOffset == 91 && scrollY/Math.abs(scrollY) == 1) {
                aboutMeOffset
                bull1.style.display = 'none';
                bull2.style.display = 'none';
                softwareOffset = 78;
                aboutMeOffset = 71;
                return
            }
            bull1.style.display = 'block';
            bull2.style.display = 'block';
            bull1Offset = bull1Offset + (3 * (scrollY/Math.abs(scrollY)));
            bull2Offset = bull2Offset + (3 * (scrollY/Math.abs(scrollY)));
            cyberOffset = cyberOffset + (3 * (scrollY/Math.abs(scrollY)));
            softwareOffset = cyberOffset - 15;
            aboutMeOffset = softwareOffset - 9;
            console.log(cyberOffset);
        }
        
    }

    // Update dimensions on component mount
    if (typeof window !== 'undefined') {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        window.addEventListener('scroll', handleHeroScroll, {passive: false});
    }
</script>
    <div class='flex items-center justify-center h-screen'>
        <svg class='absolute w-screen h-screen'>
            <path id='curve' d='M{innerWidth},{innerHeight} 
        a1,1 0 0,0 650,0
        a325,325 1 0,0 -325,-325
        a325,325 0 0,0 -253,120.5
        a100,100 0 0,1 0,-200 
        H{innerWidth*2+650}' fill='none' stroke='none'/>
            <text>
                <textPath xlink:href='#curve' startOffset='{aboutMeOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    About Me
                </textPath>
                <textPath bind:this={bull1} xlink:href='#curve' startOffset='{bull1Offset}%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath xlink:href='#curve' startOffset='{softwareOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Software Developer
                </textPath>
                <textPath bind:this={bull2} xlink:href='#curve' startOffset='{bull2Offset}%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath xlink:href='#curve' startOffset='{cyberOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Cybersecurity
                </textPath>
            </text>
        </svg>
        <img src='/images/logo.svg' alt='Casey Nazelrod Logo'>
    </div>


  