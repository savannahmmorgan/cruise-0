import React from "react";
import logo2 from "../assets/logo2.svg";


const Footer = () => (
  <footer className="bg-light p-6 text-center">
     <img className="mb-3 app-logo" src={logo2} alt="Cruise0logo" />

    <p>
      Manage your lot with <a href="https://dev--zpd4pnd.us.auth0.com/login?state=g6Fo2SBiUVpQUWNqTGFvSEZqMl8xYnhET01VTFN3cTNhOF8xVqN0aWTZIDZuQXFqYVFxY2xSWW5lMndmVTIxdUhybGVRcDVXbjd2o2NpZNkgdkR3SE9iN2cyQ2JkQlEwOXUzaW5JT2xIQXh0VU8zckM&client=vDwHOb7g2CbdBQ09u3inIOlHAxtUO3rC&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=Q3FfdWp1WVY4ZzFRQy5jSFdiRE40cUlkZVhnM3BkYlUzbUFEdXVmUkFFVA%3D%3D&code_challenge=H-_fziOys4jsq1EPYI58n7tqmJe93Mzo8wQvpjn09bU&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4wLjAifQ%3D%3D">Cruise0.</a>
    </p>

  </footer>
);

export default Footer;
