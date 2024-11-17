<script lang='ts'>
    let innerWidth = $state(0);
    let innerHeight = $state(0);
    let scrollY = 0;
    let aboutMeOffset = $state(1);
    let bull1Offset = $state(12.5);
    let softwareOffset = $state(17);
    let bull2Offset = $state(37);
    let cyberOffset = $state(39);

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            innerWidth = window.innerWidth/2 - 325;
            innerHeight = window.innerHeight/2;
            console.log(window.innerHeight)
        }
    };

    function handleHeroScroll(event: Event) {
        event.preventDefault();
        scrollY = window.scrollY;
        if(scrollY != 0) {
            if(aboutMeOffset == 1 && scrollY/Math.abs(scrollY) == -1) return
            aboutMeOffset = aboutMeOffset + (5 * (scrollY/Math.abs(scrollY)));
            bull1Offset = bull1Offset + (5 * (scrollY/Math.abs(scrollY)));
            softwareOffset = softwareOffset + (5 * (scrollY/Math.abs(scrollY)));
            bull2Offset = bull2Offset + (5 * (scrollY/Math.abs(scrollY)));
            cyberOffset = cyberOffset + (5 * (scrollY/Math.abs(scrollY)));
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
            <path id='curve' d='M{innerWidth},{innerHeight} a1,1 0 0,0 650,0 a600,500 0 0,1 650,-449' fill='none' stroke='black'/>
            <text>
                <textPath xlink:href='#curve' startOffset='{aboutMeOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    About Me
                </textPath>
                <textPath xlink:href='#curve' startOffset='{bull1Offset}%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath xlink:href='#curve' startOffset='{softwareOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Software Developer
                </textPath>
                <textPath xlink:href='#curve' startOffset='{bull2Offset}%' dominant-baseline='hanging' class='text-5xl font-black stroke-green-100 fill-green-100'>
                    &bull;
                </textPath>
                <textPath xlink:href='#curve' startOffset='{cyberOffset}%' dominant-baseline='hanging' class='text-4xl font-semibold stroke-blue-100 fill-blue-100 tracking-wider'>
                    Cybersecurity
                </textPath>
            </text>
        </svg>
        <img src='/images/logo.svg' alt='Casey Nazelrod Logo'>
    </div>


  