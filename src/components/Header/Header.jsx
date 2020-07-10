import React, { useState, useEffect } from 'react'

import Articles from '../Articles'
import devLogo from './dev-logo.svg'

import styles from './Header.module.css'

const Header = () => {
  const [input, setInput] = useState('react')
  const [topic, setTopic] = useState(input)

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://dev.to/api/articles?tag=${topic}`)
      .then((res) => res.json())
      .then((json) => setArticles(json))
      .catch((error) => console.log(error))
  }, [topic, setTopic])

  function handleSubmit(e) {
    e.preventDefault()
    setTopic(input)
  }
  function handleChange(e) {
    setInput(e.target.value)
  }
  console.log(topic)

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src={devLogo} alt="dev logo" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="searchInput">
            <input
              className={styles.input}
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </label>
        </form>

        <button className={styles.postBtn}>Write a post</button>
      </div>

      {articles.map((element) => (
        <Articles key={element.id} articles={element} />
      ))}
    </div>
  )
}

export default Header
