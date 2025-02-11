// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Bambi",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Belllloooooooo! 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
                 // Secret hover message
        },
        second: {
            text: "Hmmm much do you like me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Perchance you would be MY Valentine on the February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "HEHEHEHEHHEEH NOW THIS IS WHAT I'm TALKING ABOUT BAAAAAAANG?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "THIS is substantially more acceptable ! 🚀💝",              // Shows when they go past 1000%
        normal: "alright you could atleast ACT like you like me! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YIPPPEEE LETS GET CRUNK! 🎉💝💖💝💓",
        message: "LARGE HUG AND FLYING BARRAGE KISSES INBOUUUUUUND!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.google.com/search?q=youtube+michael+jackson+paul+mccartney+the+girl+is+mine&sca_esv=4001fc3044941daf&rlz=1C1RXQR_enUS1021US1021&sxsrf=AHTn8zpM2xeIhaEyzfLO70HJCuMui8OpEg%3A1739246708882&ei=dMyqZ9vINe2awbkPz_vA4A4&oq=the+girl+is+mine+paul+youtube&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXRoZSBnaXJsIGlzIG1pbmUgcGF1bCB5b3V0dWJlKgIIADIGEAAYCBgeMgsQABiABBiGAxiKBTIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIESJsTUPIBWLUHcAF4AZABAJgBZKABtQOqAQM0LjG4AQPIAQD4AQGYAgWgAvYCwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigXCAgYQABgHGB7CAggQABgHGAgYHpgDAIgGAZAGCJIHAzQuMaAH5B0&sclient=gws-wiz-serp#fpstate=ive&vld=cid:33ce10b9,vid:txedWZLKT0Q,st:0", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
