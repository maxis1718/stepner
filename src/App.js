import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-content">
        <input
          type="number"
          onChange={() => {
            console.log("!!!");
          }}
        />
      </div>
      <footer className="App-footer">
        <div className="footer-tab">Maxis</div>
        <div className="footer-tab">Andrea</div>
        <div className="footer-tab">Narwhal</div>
      </footer>
    </div>
  );
}

export default App;
