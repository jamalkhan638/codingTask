import { Link, Route, Routes } from 'react-router-dom'
import TestOne from './tests/Test1'
import TestTwo from './tests/Test2'
import TestThree from './tests/Test3'
import TestFour from './tests/Test4'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Usermaven React Code Challenges</h1>
      <p>
        The goal of these coding challenges is to test your ability to write
        clean, maintainable code and to demonstrate your understanding of React
        fundamentals.
      </p>

      <h2>Instructions</h2>

      <ol>
        <li>
          Each challenge is located in the <code>src/tests</code> folder. Each
          challenge has an <code>index.tsx</code> file with instructions and
          starting code.
        </li>
        <li>
          Each challenge has a corresponding route in <code>src/App.tsx</code>.
          You can navigate to each challenge by clicking on the links above.
        </li>
        <li>
          Use GitHub (we’re working with it) or any other VCS service. Please
          make sure to commit your changes step-by-step, so your
          progress/development approach can be tracked. Even if they're gonna be
          some bugs or mistakes you will make, please commit them. Approach how
          you’re resolving issues/bugs is also an important part of the
          challenge and part of our daily work.
        </li>
        <li>
          When you are finished, please send us a link to your repository.
        </li>
      </ol>

      <div className="home">
        <h1>From My side</h1>
        <p>
          In Test 1 I make custom Table, i can use any table but i prefer Custom
          styling and apply Scroll Pagination on It
        </p>

        <ol>
          <li>
            Kindly ignore styling, as due to short time period i focused on
            functionality, Otherwise i can style.
          </li>
          <li>
            Due to work load in current office, and unexpected demos i have too
            little time to give this task, but i completed every functionality
          </li>
          <li>
            Like back button and Top Scroll button we can also used icons which
            is more good for user experiance
          </li>
        </ol>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Instructions</Link>
          </li>
          <li>
            <Link to="/1">One</Link>
          </li>
          <li>
            <Link to="/2">Two</Link>
          </li>
          <li>
            <Link to="/3">Three</Link>
          </li>
          <li>
            <Link to="/4">Four</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<TestOne />} />
          <Route path="/2" element={<TestTwo />} />
          <Route path="/3" element={<TestThree />} />
          <Route path="/4/*" element={<TestFour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
