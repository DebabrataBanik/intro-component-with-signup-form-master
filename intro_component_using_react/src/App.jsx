import { useForm } from "react-hook-form";
import Input from "./components/Input";

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <main className="container">

      <section className="hero__section">
        <h1 className="hero__title">Learn to code by watching others</h1>
        <p className="hero__para">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </section>

      <div className="form__container">
        <aside>
          <p><span> Try it free 7 days </span> then $20/mo. thereafter</p>
        </aside>

        <form onSubmit={handleSubmit(submit)}>

          <div className="input-group">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              classname="name"
              aria-label="first name"
              {...register("firstName", { required: 'First name is required' })}
              error={errors.firstName}
            />
          </div>

          <div className="input-group">
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              classname="name"
              aria-label="last name"
              {...register("lastName", { required: 'Last name is required' })}
              error={errors.lastName}
            />
          </div>

          <div className="input-group">
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              classname="email"
              aria-label="email address"
              {...register("email", {
                required: 'Email address is required',

                validate: value => {
                  const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                  return isValid || 'Looks like this is not an email';
                }

                // pattern: {
                //   value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                //   message: "Looks like this is not an email",

              })}
              error={errors.email}
            />
          </div>

          <div className="input-group">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              classname="password"
              aria-label="password"
              {...register("password", {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errors.password}
            />
          </div>

          <button className="submit" aria-label="submit to claim free trial">
            Claim your free trial
          </button>

          <footer>
            <p>By clicking the button, you are agreeing to our <a href="#" aria-label="Terms and Services">Terms and
              Services</a></p>
          </footer>

        </form>
      </div>

    </main>
  );
}

export default App;
