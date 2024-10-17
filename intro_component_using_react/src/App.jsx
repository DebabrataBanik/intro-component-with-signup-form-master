

function App() {
  return (
    <main className="container">

      <section className="hero__section">
        <h1 className="hero__title">Learn to code by <br /> watching others</h1>
        <p className="hero__para">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </section>

      <div className="form__container">
        <aside>
          <p><span> Try it free 7 days </span> then $20/mo. thereafter</p>
        </aside>

        <form>
          <div className="input-group">
            <input type="text" className="name" aria-label="first name" name="First name" placeholder="First Name" />
            <span className="error-msg"></span>
            <img src="images/icon-error.svg" alt="Error icon" className="error-icon" />
          </div>

          <div className="input-group">
            <input type="text" className="name" aria-label="last name" name="Last name" placeholder="Last Name" />
            <span className="error-msg"></span>
            <img src="images/icon-error.svg" alt="Error icon" className="error-icon" />
          </div>

          <div className="input-group">
            <input type="text" className="email" aria-label="email address" placeholder="Email Address" />
            <span className="error-msg"></span>
            <img src="images/icon-error.svg" alt="Error icon" className="error-icon" />
          </div>

          <div className="input-group">
            <input type="password" className="password" aria-label="password" placeholder="Password" />
            <span className="error-msg"></span>
            <img src="images/icon-error.svg" alt="Error icon" className="error-icon" />
          </div>

          <button className="submit" aria-label="submit to claim free trial">Claim your free trial</button>
          <footer>
            <p>By clicking the button, you are agreeing to our <a href="#" aria-label="Terms and Services">Terms and
              Services</a></p>
          </footer>
        </form>

      </div>

    </main>
  )
}

export default App