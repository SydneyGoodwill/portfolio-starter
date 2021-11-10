const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `I'm baby chambray street art <strong>thundercats</strong> occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. <br> Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 2,
    title: "Using the Vue CDN",
    body: `I'm baby chambray street art thundercats occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore.Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 3,
    title: "How I mastered Vue",
    body: `I'm baby chambray street art thundercats occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore.Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  }
]

const links = [
  {
    id: 1,
    name: "Home",
    url: "index.html",
    page: "Home Page"
  },
  {
    id: 2,
    name: "Portfolio",
    url: "portfolio.html",
    page: "Portfolio Page"
  },
  {
    id: 3,
    name: "Contact Me",
    url: "contact.html",
    page: "Contact Page"
  }
]

const app = Vue.createApp({
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      darkModeSet: false,
      darkMode: {
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
    async getPosts() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      this.posts = data;
    },
  },
});

app.component("app-header", {
  data() {
    return {
      name: "Sydney",
      links,
    }
  },
  // <h1 v-for="link in links" :key="link.id">{{ name }}'s {{ link.page }}</h1>
  // <h1 v-for="link in links">{{ name }}'s {{ link.page }}</h1>
  // <h1 v-bind:key="page" v-if="links && links.length">{{ name }}'s {{ links[0].page }}</h1>

// The one below just made the contact page the default and it always landed there:
// <h1 v-bind:key="page" v-if="links.url === 'index.html' ">{{ name }}'s {{ links[0].page }}</h1>
// <h1 v-bind:key="page" v-else-if="links.url === 'portfolio.html' ">{{ name }}'s {{ links[1].page }}</h1>
// <h1 v-bind:key="page" v-else="links.url === 'contact.html' ">{{ name }}'s {{ links[2].page }}</h1>

  template: `<header>
  <h1 v-bind:key="id" v-if="links && links[0].id === 1">{{ name }}'s {{ links[0].page }}</h1>
  <h1 v-bind:key="id" v-else-if="links && links[1].id === 2">{{ name }}'s {{ links[1].page }}</h1>
  <h1 v-bind:key="id" v-else-if="links && links[2].id === 3">{{ name }}'s {{ links[2].page }}</h1>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url">{{link.name}}</a>
      </li>
    </ul>
  </nav>
</header>`
});
  
app.mount("body");

