import { LuBookHeart } from "react-icons/lu";
import Michelle from '../assets/michelle.jpg'

function HomePage(){
    return (
        <>
            <h2>Welcome to my Web Development Portfolio! <LuBookHeart /></h2>
            <article>
                <div class="center"><img src={Michelle} id="me" alt="A picture of the owner of the site, Michelle Ma." /></div>                    <br></br>
                <p>Greetings! My name is Michelle Ma and this site is an exploration of the web development concepts I have acquired. 
                    Prior to pursuing my bachelor's degree in Computer Science at Oregon State University, I majored in Biochemistry at McMaster University.
                    With the rapid advancements in technology, particularly in automation, I hope to design innovative algorithms in the field of 
                    molecular biology, such as improving genome sequencing, designing gene therapies, and developing personalized medicine.</p>
                <br></br>
                <p>This website utilizes the following technologies:</p>
                <dl>
                    <dt>HTML</dt>
                    <dd>The language used for coding the layout of the pages.</dd>
                    <br></br>
                    <dt>CSS</dt>
                    <dd>The stylesheet language used for changing the way the HTML pages look.</dd>
                    <br></br>
                    <dt>JavaScript</dt>
                    <dd>The programming language used to implement the frontend and backend for an interactive user experience.</dd>
                    <br></br>
                    <dt>Node.js</dt>
                    <dd>The runtime environment used to run JavaScript on the server, outside the browser.</dd>
                    <br></br>
                    <dt>React</dt>
                    <dd>A JavaScript library that uses component files as building blocks to create the user interface (UI) in single-page applications. Responsible for the designing the front-end.</dd>
                    <br></br>
                    <dt>Express.js</dt>
                    <dd>A web framework built on Node.js that handles HTTP requests and defines routes to create the backend of the app.</dd>
                    <br></br>
                    <dt>MongoDB</dt>
                    <dd>A document-oriented database management system used to store and retrive (CRUD operations) data when connected to the frontend and backend. </dd>
                    <br></br>
                    <dt>Mongoose</dt>
                    <dd>A library that maps objects to documents, from JavaScript to documents stored in MongoDB.</dd>
                    <br></br>
                    <dt>REST APIs</dt>
                    <dd>An API (application programming interface) that follows RESTful (Representational State Transfer) design. APIs are provided by a service for integration into other code without having to understand that service's intricacies.</dd>
                </dl>
            </article>
        </>
    )
}
export default HomePage;