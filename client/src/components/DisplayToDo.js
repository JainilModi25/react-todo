
export function DisplayToDo({todos}){
    return (
      <div>
        {todos && todos.length > 0 ? (
          todos.map(function (todo) {
            return (
              <div key={todo._id}>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>
                  {todo.completed === true ? "Completed" : "Mark as complete"}
                </button>
              </div>
            );
          })
        ) : (
          <p>No todos to display.</p>
        )}
      </div>
    );
}