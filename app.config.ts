export default defineAppConfig({
  alpine: {
    title: 'Justin',
    description: 'The minimalist blog theme',
    // image: {
    //   src: '/social-card-preview.png',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300
    // },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.png', // path of the logo
        pathDark: '/logo-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://github.com/jstemps02' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/justin-templeton-936234209'
      },
      github: {
        icon: 'uil:github',
        label: 'GitHub',
        href: 'https://github.com/jstemps02'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
