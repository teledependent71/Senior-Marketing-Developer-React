import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Marketing Developer</title>
        <meta property="og:title" content="Senior Marketing Developer" />
      </Helmet>
    </div>
  )
}

export default Home
