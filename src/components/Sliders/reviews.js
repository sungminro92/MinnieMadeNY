// {
//     date: "",
//     name: "",
//     review: "",
//     from: "Etsy"
// },

const reviews = [
    {
        date: "Jul 9, 2022",
        name: "Nancy L",
        review: "Simply beautiful work and attention to detail ... packaged well with detailed instructions included. TY",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jun 20, 2022",
        name: "Maryanne",
        review: "I ordered my 2nd little flowers & love them. The colors are very pretty & made well. I just remodeled my kitchen & I have the bouquet in a white 1/2 clear, 1/2 frosted vase. I have them on the table & every morning I see them. They give me a morning kiss :) & I smile back @ them. Just what I expected. Thank you for making these!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Aug 26, 2022",
        name: "Lori",
        review: "She helped me with a bittersweet project for a permanent bouquet for my 19 year old son's grave. She kept in constant contact making sure the flowers were exactly what I needed and expected. They arrived today and are better than I expected. I think my Daniel would be proud of his bouquet. In his favorite colors of Red and Black too!! Lori Salsbury",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jun 17, 2022",
        name: "sharon",
        review: "Exactly what I was looking for.These flowers are exquisite, delicate and intricate.The artsy look completes what I was trying to achieve for a minimalist modern feel.",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jun 19, 2022",
        name: "Diane",
        review: "Love 'em.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/35cd29/3953732182/iap_640x640.3953732182_a8iet18d.jpg?version=0"
    },
    {
        date: "Jul 30, 2022",
        name: "Jessica",
        review: "",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/8157e2/4094334965/iap_640x640.4094334965_jbes2wfk.jpg?version=0"
    },
    {
        date: "May 28, 2022",
        name: "Maecey",
        review: "I love these, they’re so unique and fun. Will definitely order more.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/0e9bd4/3905458574/iap_640x640.3905458574_pi7376hx.jpg?version=0"
    },
    {
        date: "May 15, 2022",
        name: "Penny",
        review: "Expertly packed with instructions for unpacking. The flowers have exceeded my expectations! Thank you very much!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/cb4027/3877160782/iap_640x640.3877160782_9wxnnfsw.jpg?version=0"
    },
    {
        date: "Apr 29, 2022",
        name: "Lee",
        review: "Love these so much! So beautifully created. Excellent packaging, product and service. Thank you so so much!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/8189f4/3844251952/iap_640x640.3844251952_ttaxdaax.jpg?version=0"
    },
    {
        date: "Mar 28, 2022",
        name: "dfriebert",
        review: "Working from a picture and measurements, this talented artist made me replacement flowers for a broken necklace. Minni went out of her way to do this custom order. She was in constant communication with me and sent photos to get my input. I'm thrilled beyond belief!!!! And once I approved the colors and design, she got them off to me so quickly. I appreciate the workmanship and great customer service this artist provides. Did I mention she didn't charge extra for a custom job.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/401c1f/3770095206/iap_640x640.3770095206_eh12lbrr.jpg?version=0"
    },
    {
        date: "Mar 28, 2022",
        name: "Sherry Sivo",
        review: "Bought for a vintage age blue bud vase..perfect!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/dd6c2b/3817404499/iap_640x640.3817404499_4gquu2do.jpg?version=0"
    },
    {
        date: "Mar 21, 2022",
        name: "Sheryll",
        review: "Love-Love-Love. Beautiful work. Fast shipping. Excellent, secure wrapping for safe mailing. And….. the BEST customer service I’ve ever experienced on Etsy. I will be back for more flowers! Amazing shop. Awesome and professional vendor!!! Thanks.",
        from: "Etsy",
        image: ""
    },
    {
        date: "Mar 2, 2022",
        name: "dmkdbf1",
        review: "This bunch of flowers are so cute and whimsical and, on top of that, they will last a really long time and my cat doesn't like eating them. My teenage son selected these wire flowers to put in a glass bottle he salvaged from our local creek and is re-using as a vase. They add so much pop and fun to wherever we place them. I'll be sad to see them go if they accompany him to college next year. I highly recommend this seller and expect to make more purchases going forward.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/9ecd16/3708607262/iap_640x640.3708607262_rsoyez2o.jpg?version=0"
    },
    {
        date: "Mar 1, 2022",
        name: "Sally",
        review: " I just love the flowers that I ordered. A wonderfully unique bouquet of flowers! They are perfect! I did a custom order because I had a large vase that I wanted to use and wanted extra long stems. She was helpful, prompt and very professional every step of the way. I actually did two custom orders because I didn’t order enough for my large vase the first time. I’m very happy with my unique arrangement!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/dc0b0c/3705549812/iap_640x640.3705549812_4niupel8.jpg?version=0"
    },
    {
        date: "Mar 1, 2022",
        name: "Sally",
        review: " A wonderfully unique bouquet of flowers!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Feb 15, 2022",
        name: "Katie",
        review: "These arrived very well packaged and so quickly! This arrangement was exactly what I was looking for.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/b2bf6b/3672359368/iap_640x640.3672359368_qv86c17e.jpg?version=0"
    },
    {
        date: "Feb 10, 2022",
        name: "Kelsey",
        review: "The arrangement is so pretty and beautifully made!! Thank you so much 🙂",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/0d063c/3709187881/iap_640x640.3709187881_cra8pfpl.jpg?version=0"
    },
    {
        date: "Feb 5, 2022",
        name: "jennyleigh050565 ",
        review: "Unique and charming artwork. Thank you!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jan 25, 2022",
        name: "aharriman1",
        review: "These are perfect for where I wanted to put them and go great with the wires roses that I previously purchased. Love these!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/f6baa4/3670089377/iap_640x640.3670089377_jppse3xy.jpg?version=0"
    },
    {
        date: "Jan 11, 2022",
        name: "Jennifer Seelig",
        review: "Flowers are beautiful & artist was super to work with! Thank you 💐",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/8ffe1e/3636892835/iap_640x640.3636892835_exmnizca.jpg?version=0"
    },
    {
        date: "Jan 4, 2022",
        name: "Linda",
        review: "Love these! Of course, I want more... I purchased a single tulip, wheat flower, and bristle grass stem for an antique glass bottle that I keep on my desk at work. These look just like the images, and are made well. I liked that the wire was bendable too. It was really tough to figure out which ones to get because there are so many great choices. I'm sure I'll be back to purchase more. A bouquet would make a perfect gift for anyone at any time of year! And the owner tucked in a little gift because I made a purchase at a special time of year, which was unexpected, just as lovely as the flowers, and much appreciated.",
        from: "Etsy",
        image: ""
    },
    {
        date: "Nov 27, 2021",
        name: "Poornima Dasgupta",
        review: "Beautiful",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/b2818b/3499723364/iap_640x640.3499723364_m7kw2cwh.jpg?version=0"
    },
    {
        date: "Nov 24, 2021",
        name: "Beatrice",
        review: "Awesome quality flowers! They look FANTSATIC in person. I love that you can adjust them to your vase and or arrangement! Simply stunning. Quite unique as well!!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Nov 20, 2021",
        name: "Beatrice",
        review: "These are the coolest wire flowers ever! They are so unique and really stand out in my bud cases!! I loved them so much, I ordered more of them bc my friends keep stealing them! LOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Nov 18, 2021",
        name: "aharriman1",
        review: "These are so cool! I have already received compliments on these.I cannot recommend this seller enough for unique flowers that last forever!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/5d6841/3524819227/iap_640x640.3524819227_ludd8ift.jpg?version=0"
    },
    {
        date: "Sep 9, 2021",
        name: "pcsheather",
        review: "I am absolutely in LOVE with my wire flowers! Shipping was super quick and the flowers were thoughtfully and carefully packaged so that they arrived securely but could easily be unwrapped in a way that avoided unnecessary bending of the wires. I will definitely be ordering more!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Aug 28, 2021",
        name: "Mark C Jordan",
        review: "Perfect it was exactly what I needed to give the corner a little class!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/a29666/3293718186/iap_640x640.3293718186_rxyd7tcg.jpg?version=0"
    },
    {
        date: "Aug 2, 2021",
        name: "Pamela",
        review: "Adorable! Utterly charming with the others in the black vase outline of e I purchased. Very quick turnaround and carefully packaged. Thoughtful communication including tips, etc. Thank you so much!",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jul 22, 2021",
        name: "twong222",
        review: "I love how durable, yet delicate these flowers are. Perfect for placing at my kitty's grave.",
        from: "Etsy",
        image: ""
    },
    {
        date: "Jun 25, 2021",
        name: "Diana Shibby",
        review: " It came in todaaay! I was so excited for this to be delivered and it went above and beyond expectations! The wired bouquet it very delicate and petite- It's so cute! After choosing your bouquet, they are delivered all individually wrapped so that you can rearrange and trim (if needed) as you like it. It is such a cute decor peice!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/a67db7/3215949283/iap_640x640.3215949283_fu2mlby5.jpg?version=0"
    },
    {
        date: "Jun 23, 2021",
        name: "DeAnn Atkinson",
        review: "This is my second order and I’m just as in love with MinnieMadeNY’s work as I was the first time! My order was packaged beautifully with a hand written thank you card and information about their product. I purchased these for my work office. I love looking at them and I won’t kill them! :)",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/4fcbbc/3211659063/iap_640x640.3211659063_hpavrf1s.jpg?version=0"
    },
    {
        date: "May 29, 2021",
        name: "Norma Stueber",
        review: "I LOVE your wire flowers! I wish I could buy dozens and dozens!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/cb112e/3161265595/iap_640x640.3161265595_q3kfpmxj.jpg?version=0"
    },
    {
        date: "May 30, 2021",
        name: "Muriel Prt",
        review: "Superb and original! I love it. Highly recommend😍",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/ee90ff/3163049799/iap_640x640.3163049799_q2bz2g4k.jpg?version=0"
    },
    {
        date: "May 18, 2021",
        name: "Lori B",
        review: "I love my metal flowers! Ordered a bunch, talked to the artist, she was really great and lovely. The flowers were exactly what I wanted, they look cool and modern and complement my decor. They shipped really fast too. 100% recommend. Thanks!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/6aab82/3089104044/iap_640x640.3089104044_krgsjdit.jpg?version=0"
    },
    {
        date: "May 8, 2021",
        name: "aharriman1",
        review: "I absolutely love the Daisy bouquet! The seller was super accommodating (and responsive) about me wanting to have longer stems due to the vase I was planning on using. I would definitely order from this shop again; these flowers produce such a “cool” look.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/5a52c9/3116814531/iap_640x640.3116814531_6j52v08c.jpg?version=0"
    },
    {
        date: "Apr 29, 2021",
        name: "Sally",
        review: "I ordered a few to decorate around my apartment in vases and to give to my friends as mini bouquets and we all love them so much! The customer service was amazing and very responsive; she also gave me tips on how to work with her creations so I’m very thankful for that. Overall everything was amazing and I’m definitely going to be ordering more from the store to gift to friends and family!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/3d61d4/3049156260/iap_640x640.3049156260_mmnjx7wc.jpg?version=0"
    },
    {
        date: "Apr 18, 2021",
        name: "Catherine Meacham",
        review: "So unique, beautifully crafted.Buy them!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/630844/3024234032/iap_640x640.3024234032_h77spaid.jpg?version=0"
    },
    {
        date: "Apr 17, 2021",
        name: "Jordan Blate",
        review: "Absolutely incredible seller and product will be buying more soon as gifts!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/b8f505/3070126345/iap_640x640.3070126345_douwmgem.jpg?version=0"
    },
    {
        date: "Apr 12, 2021",
        name: "DeAnn Atkinson",
        review: "I’m so excited about my bristlegrass! I wanted a couple extra to go with the daisy arrangement I purchased.I was a little surprised at how bendable they were but they worked out just fine thanks to Their suggestion to use arrangement foam.I will keep these in mind for gifts in the future! So unique and beautiful!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/69ac52/3058509051/iap_640x640.3058509051_fwthp5qn.jpg?version=0"
    },
    {
        date: "Apr 5, 2021",
        name: "Michelle Barbossa",
        review: "I love black and white art and line drawings - so when I saw these wire flowers I could not wait to have a bouquet of them.I ordered six different designs.The seller was fantastic! She made sure my order was going to work perfectly for me.They arrived quickly and the packaging was so pretty that next time I need to send a gift - these will be it! Delicate and detailed… I absolutely love them!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/a154ac/2993791622/iap_640x640.2993791622_t34rfpy3.jpg?version=0"
    },
    {
        date: "Mar 30, 2021",
        name: "HANDT STUDIO ",
        review: "I purchased a couple of these flower bouquet to fill in flower vases in our restaurant.They turned out great giving a unique vibe on each table.Shipping was fast, the seller has a great communication.Lots of customers questioned where I got them from.I would definitely come back if we’re allowed to open more tables indoor.",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/9c79bd/2980377704/iap_640x640.2980377704_jo4vzrnb.jpg?version=0"
    },
    {
        date: "Mar 22, 2021",
        name: "shuaib.s ",
        review: "The flowers turned out fantastic and the seller was wonderful.She happily worked with me on a request I had and everything turned out amazing.Highly recommended!",
        from: "Etsy",
        image: "https://i.etsystatic.com/iap/fa7c71/3008224137/iap_640x640.3008224137_5p7tu2wl.jpg?version=0"
    },
]

export default reviews;