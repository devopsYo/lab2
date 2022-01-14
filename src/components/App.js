import {Welcome, firstName} from './Welcome'

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


const getUpperName = name => {
  if (name) {
      return name.toUpperCase()
  }
  return 'Foreign' 
}

//const color = 'classRedExemple';
const color = 'classBlueExemple';

const name = 'Yossef';

function App() {
  return (
    <div className={color}>
      {firstName == "Yossef" ? <Welcome coco={getUpperName(name)} dodo='by'/> : 'By'}
      {posts.map((post, index) => 
         <Welcome key={index} coco={post.id} dodo={index} />
                )
      }
      {posts.map((post, index) =>          
         getUpperName(name)
                )
      }
    </div>
  );
}

export default App;
