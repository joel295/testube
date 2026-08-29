export enum CategoryType {
  Streaming = 0,
  Live,
  Sports,
  Personal,
  Gaming,
  Utility,
}

export interface Colors {
  dark: string,
  light: string
}

export interface Logos {
  dark: string,
  light: string
}

export interface Source {
  name: string,
  category: CategoryType,
  url: string,
  colors: Colors,
  logos: Logos,
  visible: boolean
}

export interface Category {
  title: string;
  sources: Source[];
}


export const DEFAULT_SOURCES: Map<string, Source> = new Map([
  // STREAMING
  [
    'youtube',
    {
      name: 'YouTube',
      category: CategoryType.Streaming,
      url: 'https://youtube.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg',
        light: 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg'
      },
      visible: true
    }
  ],
  [
    'disneyplus',
    {
      name: 'Disney+',
      category: CategoryType.Streaming,
      url: 'https://disneyplus.com',
      colors: {
        dark: '#040814',
        light: '#040814'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Logo.wine.svg',
      },
      visible: true
    }
  ],
  [
    'prime',
    {
      name: 'Prime Video',
      category: CategoryType.Streaming,
      url: 'https://www.primevideo.com',
      colors: {
        dark: '#232f3e',
        light: '#232f3e'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png',
        light: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png'
      },
      visible: true
    }
  ],
  [
    'appletv',
    {
      name: 'Apple TV+',
      category: CategoryType.Streaming,
      url: 'https://tv.apple.com/au',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://www.apple.com/tv-pr/about-assets/images/logo/Apple_TV_Plus_logo_About.png.large.png',
        light: 'https://www.apple.com/tv-pr/about-assets/images/logo/Apple_TV_Plus_logo_About.png.large.png'
      },
      visible: true
    }
  ],
  [
    'abciview',
    {
      name: 'ABC iView',
      category: CategoryType.Streaming,
      url: 'https://iview.abc.net.au',
      colors: {
        dark: '#001824',
        light: '#001824'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/ABC_iview.png/1280px-ABC_iview.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/ABC_iview.png/1280px-ABC_iview.png'
      },
      visible: true
    }
  ],

  // PERSONAL
  [
    'plex',
    {
      name: 'Plex',
      category: CategoryType.Personal,
      url: 'http://media-server.jamnapari-goanna.ts.net:32400',
      colors: {
        dark: '#1f2326',
        light: '#1f2326'
      },
      logos: {
        dark: 'https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg',
        light: 'https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg',
      },
      visible: true
    }
  ],

  // UTILITY
  [
    'googlemaps',
    {
      name: 'Google Maps',
      category: CategoryType.Utility,
      url: 'https://maps.google.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Google_Maps_icon_%282026%29.svg',
        light: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Google_Maps_icon_%282026%29.svg',
      },
      visible: true
    }
  ],
  [
    'waze',
    {
      name: 'Waze',
      category: CategoryType.Utility,
      url: 'https://waze.com/livemap',
      colors: {
        dark: '#47cfee',
        light: '#47cfee'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Logo_for_waze.svg',
        light: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Logo_for_waze.svg',
      },
      visible: true
    }
  ],
  [
    'abetterrouteplanner',
    {
      name: 'ABetterRoutePlanner',
      category: CategoryType.Utility,
      url: 'https://abetterrouteplanner.com',
      colors: {
        dark: '#2196f3',
        light: '#2196f3'
      },
      logos: {
        dark: 'https://abetterrouteplanner.com/compare/img/abrp_banner.png',
        light: 'https://abetterrouteplanner.com/compare/img/abrp_banner.png',
      },
      visible: true
    }
  ],
  [
    'plugshare',
    {
      name: 'PlugShare',
      category: CategoryType.Utility,
      url: 'https://plugshare.com',
      colors: {
        dark: '#003ca6',
        light: '#003ca6'
      },
      logos: {
        dark: 'https://assets.plugshare.com/assets/plugshare-web.png',
        light: 'https://assets.plugshare.com/assets/plugshare-web.png',
      },
      visible: true
    }
  ],
]);
