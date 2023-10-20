
import './App.css'

function App() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/5-winnie-the-pooh-piglet-amalia-oktaviani-transparent.png?&targetx=100&targety=0&imagewidth=499&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=5a92e0&orientation=0" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  )
}

export default App
