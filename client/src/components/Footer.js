import React from 'react'

const styles = {
  footer: {
    color: "white",
    width: "100%",
    backgroundColor: "#023859",
    textAlign: "center",
    padding: "15px"
  },
  newsletter: {
    color: "#FFB900",
    textDecoration: "underline", 
  }
}

const Footer = () => {
  return (
    <>
    <footer style={styles.footer}>
      <p>Join Our <a href='' style={styles.newsletter}> Newsletter!</a></p>
      <p>Product info, discounts and more-straight to your inbox!</p>
      <br></br>
      <p>Feel free to <a href='' style={styles.newsletter}> Contact Us!</a></p>
      <p>© Copyright 2022 - Prep Starts Now</p>
    </footer>
    </>
  )
}

export default Footer