import PropTypes from 'prop-types'
import { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom';

export const HomePage = () => {
  return <p>Helow Welcome To HomePage</p>
};

export const AboutPage = () => {
  return <p>Ini adalah AboutPage</p>
};

export const ContactPage = () => {
  return <p>Ini adalah ContactPage</p>
};

export default class Fun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target
      };
    });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/' navigate={this.navigate}>Home</Link>
              </li>
              <li>
                <Link to='/about' navigate={this.navigate}>About</Link>
              </li>
              <li>
                <Link to='/contact' navigate={this.navigate}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
          </Routes>
        </main>
      </>
    );
  };
};
