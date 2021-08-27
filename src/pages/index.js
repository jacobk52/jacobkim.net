import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Footer from "../components/Footer"
import Experience from "../components/Experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Jacob Kim"/>
    <Header/>
    <About/>
    <Experience/>
    <Footer/>
  </Layout>
)

export default IndexPage
