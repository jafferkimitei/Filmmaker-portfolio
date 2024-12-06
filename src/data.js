export const workProjects = [
    {
      id: 1,
      title: "Jahnathan Jaaiz Nerette - FEVER",
      youtubeLink: "https://www.youtube.com/watch?v=oMcw6g1tIlI",
      get image() {
        const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
      },
    },
    {
      id: 2,
      title: "BAD IS BAD (Feature Film)",
      youtubeLink: "https://www.youtube.com/watch?v=5kjNJslUMcQ",
      get image() {
        const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
      },
    },
    {
      id: 3,
      title: "Kolmi ft Unspoken Salaton - Blame You",
      youtubeLink: "https://www.youtube.com/watch?v=2TjOPCPL2J0",
      get image() {
        const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
      },
    },
    {
        id: 4,
        title: "Mazda mx-5 2020 B-Roll",
        youtubeLink: "https://www.youtube.com/watch?v=ic0AgBuEzlQ",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 5,
        title: "Jayhudii ft 12Piece - Westside",
        youtubeLink: "https://www.youtube.com/watch?v=zW7WcXJKWBo",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 6,
        title: "Amnesia - Short Film",
        youtubeLink: "https://www.youtube.com/watch?v=gPq0iG7vaqQ",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 7,
        title: "Alma Ras - Daydreamer",
        youtubeLink: "https://www.youtube.com/watch?v=6bD7h6sIpxs",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 8,
        title: "MNVRA - Without You",
        youtubeLink: "https://www.youtube.com/watch?v=dhw-Tv-SqtI",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 9,
        title: "Cello Afari - Game is Game",
        youtubeLink: "https://www.youtube.com/watch?v=fanA4Mb7Nb8",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 10,
        title: "Anytime Bro - Short Film",
        youtubeLink: "https://www.youtube.com/watch?v=9k3M8XbLqhk",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 11,
        title: "J' NAAR - STAKI KUJUA",
        youtubeLink: "https://www.youtube.com/watch?v=fPQvpJb3sxg",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 12,
        title: "SERIOUS JOKER - BEBABEBA",
        youtubeLink: "https://www.youtube.com/watch?v=EBfOr1Kq1MY",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 13,
        title: "LORD KNOWS",
        youtubeLink: "https://www.youtube.com/watch?v=w_fO0gxgA60",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
      {
        id: 14,
        title: "I AM FASHION",
        youtubeLink: "https://www.youtube.com/watch?v=2_wbyvPR0-k",
        get image() {
          const videoId = this.youtubeLink.split("v=")[1]?.split("&")[0]; 
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        },
      },
  ];
  
  export const scripts = [
    {
      id: 1,
      title: "City Lights, Suburban Nights",
      image: "/assets/citylights.jpg",
      mediumLink: "https://medium.com/@havierkim/city-lights-suburban-nights-dc27d89e2bd6",
    },
    {
      id: 2,
      title: "The Mask Beneath the Smile",
      image: "/assets/mask.jpg",
      mediumLink: "https://medium.com/@havierkim/the-mask-beneath-the-smile-47ed489ecc7f",
    },
    {
      id: 3,
      title: "A Walk Through Thika",
      image: "/assets/thika.jpg",
      mediumLink: "https://medium.com/@havierkim/a-walk-through-thika-04cc1ea980dd",
    },
    {
        id: 4,
        title: "The Pancake Fiasco: A Date to Remember",
        image: "/assets/pancake.jpg",
        mediumLink: "https://medium.com/@havierkim/the-pancake-fiasco-a-date-to-remember-2091eda2e79c",
      },
      {
        id: 5,
        title: "The Day Our Bus Got Stuck in Maasai Mara",
        image: "/assets/mara.jpg",
        mediumLink: "https://medium.com/@havierkim/the-day-our-bus-got-stuck-in-maasai-mara-90dcb793decd",
      },
      {
        id: 6,
        title: "The Job Interview From Hell",
        image: "/assets/interview.jpg",
        mediumLink: "https://medium.com/@havierkim/the-job-interview-from-hell-c449377fed5a",
      },
      {
        id: 7,
        title: "The Day I Faced My Fear",
        image: "/assets/fear.jpg",
        mediumLink: "https://medium.com/@havierkim/the-day-i-faced-my-fear-8bc81dfb1020",
      },
      {
        id: 8,
        title: "The Wedding Videography Nightmare",
        image: "/assets/wedd.jpg",
        mediumLink: "https://medium.com/@havierkim/the-wedding-videography-nightmare-a-day-to-remember-for-all-the-wrong-reasons-9d5402cac61d",
      },
      {
        id: 9,
        title: "Kwa Ground Vitu Ni Different: Blind Date in Nakuru",
        image: "/assets/date.jpg",
        mediumLink: "https://medium.com/@havierkim/kwa-ground-vitu-ni-different-blind-date-in-nakuru-162cd16e0d67",
      },
  ];
  
  export const motionProjects = [
    {
      id: 1,
      title: "Lone Warrior",
      image: "/assets/lone.jpeg",
      behanceLink: "https://www.behance.net/gallery/214014863/A-lone-warrior",
    },
    {
      id: 2,
      title: "Beyond Worlds",
      image: "/assets/astro.jpg",
      behanceLink: "https://www.behance.net/gallery/214019291/Beyond-worlds",
    },
    {
      id: 3,
      title: "Dream",
      image: "/assets/dream.jpg",
      behanceLink: "https://www.behance.net/gallery/214019759/DREAM",
    },
    {
        id: 4,
        title: "An Infinite hallway of golden mirrors",
        image: "/assets/infinte.jpg",
        behanceLink: "https://www.behance.net/gallery/214028327/An-infinite-hallway-of-golden-mirrors",
      },
      {
        id: 5,
        title: "Kaleidoscope of a human face",
        image: "/assets/kaleiface.jpg",
        behanceLink: "https://www.behance.net/gallery/214029909/kaleidoscope-of-a-human-face",
      },
      {
        id: 6,
        title: "Desolation Under a Vibrant Sky",
        image: "/assets/desolution.jpg",
        behanceLink: "https://www.behance.net/gallery/214030347/Desolation-Under-a-Vibrant-Sky",
      },
  ];
  

  export const infoContent = {
    banner: "/assets/bann.jpeg", 
    bio: [
        "Yung Havy is a multi-talented creative who began his journey as an event marketer, where his knack for storytelling and connecting with audiences first shone. His love for photography was sparked in his youth, using his mom's and elder brother's phones to capture moments at weddings and events. This passion for capturing the world grew alongside his artistic skills; he was often found sketching intricate images from magazines or comic books.",
        "In 2018, Yung Havy officially stepped into the world of photography, working with a diverse clientele across street photography, corporate projects, weddings, and events. During the pandemic, he discovered his talent for scriptwriting, fueled by his vivid daydreams and imagination. This marked his entry into filmmaking, where he began writing short films and developing compelling narratives.",
        "His artistic evolution didn't stop there—he ventured into directing and editing music videos, eventually founding *Sicc Frequencies*, a creative platform that bridges his skills in film and music. Today, Yung Havy continues to blend his love for storytelling, visual art, and sound design, creating work that resonates and inspires.",
        "From street corners to corporate halls, wedding aisles to film sets, Yung Havy has proven that passion, versatility, and determination can turn dreams into reality.",
        "Need a storyteller, photographer, or filmmaker for your next big idea? Let's connect and create something unforgettable!",
      ],
    contact: [
      { platform: "Email", icon: "/assets/envelope-icon.png", link: "mailto:havierkim@gmail.com" },
      { platform: "Instagram", icon: "/assets/instagram-icon.png", link: "https://instagram.com/yunghavy" },
      { platform: "Telegram", icon: "/assets/telegram-icon.png", link: "https://t.me/yunghavyisme" },
      { platform: "Youtube", icon: "/assets/youtube-icon.png", link: "https://www.youtube.com/@siccfrequencies" },
      { platform: "Twitter", icon: "/assets/x-icon.png", link: "https://x.com/jafferkimitei" },

    ]
  };

