
import './App.css';
import Counter from './components2/Counter';
import ShowHide from './components2/ShowHide';
import Users from './components2/Users';

export default function App (){
    return(
        <>
            <h2>I am from App.jsx</h2>
            {/* <Counter /> */}
            {/* <ShowHide /> */}
            <Users />
        </>
    )
}

/*Task 1: State and Event Handling

Build a simple counter app
    1. A button that increases the count by 1 when clicked.
    2. A button that decreases the count by 1 when clicked.
    3. A button that resets the count by zero.
    4. Display the count dynamically on the screen. 
*/

/*Task 2: useState and Conditional Rendering

Create a show/Hide text app: 
    1. use useState to manage the visibility of a text message.
    2. A button should toggle between "Show" and "Hide" text.
    3. When the text is visible, it should say "Hello, React Learner!"
    4. When hidden, nothing should be visible.
*/

/* Task 3: API Data Fetching with useEffect

Create a user list application 
    1. Fetch and display data from the JSONPlaceholder API.
    2. Display user name, company name, and city in a list.
    3. Show a loading state while fetching data.
    4. Show an error message if the API request fails.
*/

/* Answer the following questions: 
    
    1. What is useState, and how does it work?
    2. What is useEffect, and when should you use it?
    3. Why is thinking in React important?
*/