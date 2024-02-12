import img1 from '../Assets/ollama.png';
import img2 from '../Assets/homesearch.jpeg';
import img3 from '../Assets/message.jpg';


const myprojectsdata = [
    {
        id:1,
        title:"Ollama UI App",
        description:"Local LLM which takes webpage as input, respond to your prompt.",
        technologies : ['Python','Ollama', 'Langchain', 'gradio', 'BeautifulSoup', 'Scrapy'],
        pic:img1,
        path:"https://github.com/chakri15797/ollama-ui-app"
    },
    
    {
        id:2,
        title:"Home Search App",
        description:"Home Search FrontEnd Ui developed using Angular.",
        technologies:['Angular', 'Typescript'],
        pic:img2,
        path:"https://github.com/chakri15797/angular-homesearch-app"
    },

    {
        id:3,
        title:"Simple Chat App",
        description:"Simple multi-user/group chatting app",
        technologies:['HTML','CSS', 'Javascript', 'socker.io'],
        pic:img3,
        path:"https://github.com/chakri15797/simple-chat-app"
    },

]


export default myprojectsdata;