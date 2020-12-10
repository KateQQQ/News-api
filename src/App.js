import React from 'react';
import './App.css';
import Item from './Item';
import searchNews from './SearchNews';





function App() {
  const [query, setQuery] = React.useState("docker");
  const [list, setList] = React.useState(null);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };

  return (
    <div className="app">

      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
      }
    </div>
  );
}


export default App;