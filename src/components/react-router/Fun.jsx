import PropTypes from 'prop-types'
import React, { Component } from 'react'

export const HomePage = () => {
  return <p>Helow Welcome To HomePage</p>
};

export const AboutPage = () => {
  return <p>Ini adalah AboutPage</p>
};

export const ContactPage = () => {
  return <p>Ini adalah ContactPage</p>
};

export const Link = ({target, navigate, children}) => {
  return (
    <a href={target} onClick={event => {event.preventDefault(); navigate(target)}}>{children}</a>
  )
}

export default class Fun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/'
    };

    Fun.PropTypes = {
      page: PropTypes.string
    }
    
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
                <Link target='/' navigate={this.navigate}>Home</Link>
              </li>
              <li>
                <Link target='/about' navigate={this.navigate}>About</Link>
              </li>
              <li>
                <Link target='/contact' navigate={this.navigate}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === '/' && <HomePage/>}
          {this.state.page === '/about' && <AboutPage/>}
          {this.state.page === '/contact' && <ContactPage/>}
        </main>
      </>
    )
  }
}
