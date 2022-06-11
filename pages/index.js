import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Home from "../components/sections/Home";
import Main from "../components/sections/Main";
import Footer from "../components/sections/Footer";

function AppHome() {
  return (
    <Layout>
      <Home />
      <Main />
      <Footer />
    </Layout>
  );
}

export default AppHome;
