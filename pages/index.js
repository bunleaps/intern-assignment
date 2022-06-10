import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Home from "../components/sections/Home";

function AppHome() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default AppHome;
