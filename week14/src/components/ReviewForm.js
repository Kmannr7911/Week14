import React from "react";
import { ReactDOM } from 'react-dom/client';
const ReviewForm = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
  function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
  export default ReviewForm;