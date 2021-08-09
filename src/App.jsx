import './App.scss';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Movie App</a>
        </h1>
        <form>
          <input type="text" className="search" placeholder="Search" />
        </form>
      </header>
      <main>
        <div className="movie">
          <img
            src="https://image.tmdb.org/t/p/w1280/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
            alt="Black Widow"
          />
          <div className="movie-info">
            <h3>Black Widow</h3>
            <span className="orange">7.9</span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>
              Natasha Romanoff, also known as Black Widow, confronts the darker
              parts of her ledger when a dangerous conspiracy with ties to her
              past arises. Pursued by a force that will stop at nothing to bring
              her down, Natasha must deal with her history as a spy and the
              broken relationships left in her wake long before she became an
              Avenger.
            </p>
          </div>
        </div>
        <div className="movie">
          <img
            src="https://image.tmdb.org/t/p/w1280/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
            alt="Jungle Cruise"
          />
          <div className="movie-info">
            <h3>Jungle Cruise</h3>
            <span className="green">8</span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>
              Dr. Lily Houghton enlists the aid of wisecracking skipper Frank
              Wolff to take her down the Amazon in his dilapidated boat.
              Together, they search for an ancient tree that holds the power to
              heal – a discovery that will change the future of medicine.
            </p>
          </div>
        </div>
        <div className="movie">
          <img
            src="https://image.tmdb.org/t/p/w1280/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
            alt="F9"
          />
          <div className="movie-info">
            <h3>F9</h3>
            <span className="orange">7.7</span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>
              Dominic Toretto and his crew battle the most skilled assassin and
              high-performance driver they've ever encountered: his forsaken
              brother.
            </p>
          </div>
        </div>
        <div className="movie">
          <img
            src="https://image.tmdb.org/t/p/w1280/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg"
            alt="Space Jam: A New Legacy"
          />
          <div className="movie-info">
            <h3>Space Jam: A New Legacy</h3>
            <span className="orange">7.6</span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>
              When LeBron and his young son Dom are trapped in a digital space
              by a rogue A.I., LeBron must get them home safe by leading Bugs,
              Lola Bunny and the whole gang of notoriously undisciplined Looney
              Tunes to victory over the A.I.'s digitized champions on the court.
              It's Tunes versus Goons in the highest-stakes challenge of his
              life.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
