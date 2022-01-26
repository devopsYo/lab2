import {Welcome, firstName} from './Welcome'
import '../utils/handlers/font-handler'

let posts = [
  {
    id: '1',
    title: 'post1'
  },
  {
    id: '3',
    title: 'post3'
  },
  {
    id: '10',
    title: 'post10'
  }
]


const getName = (a,b) => {
  if (a && b) {
      return `${a} ${b}`
  }
  return 'Foreign' 
}

//const color = 'classRedExemple';
const color = 'classBlueExemple';

const familyName = 'ben Yaakov';

function App() {
  return (
    <div className={color}>
      {firstName == "Yossef" ? <Welcome name={getName(firstName, familyName)} question='how are you?'/> : 'By'}
      {posts.map((post, index) => 
         <Welcome key={index} name={post.id} question={index} />
                )
      }
      {posts.map((post, index) =>          
         getName(firstName, familyName)
                )
      }
    </div>
  );
}

export default App;
