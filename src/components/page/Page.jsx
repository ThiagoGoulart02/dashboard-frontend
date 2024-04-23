import React from "react";
import { Container } from "../container/Container";
import Content from "../content/Content";
import Header from "../header/Header";
import { Layout } from "../layout/Layout";
import Sidebar from "../sidebar/Sidebar";

export const Page = () => {
  return (
    <Container>
      <Header />
      <Container>
        <Layout type="flex">
          <Sidebar />
          <Content />
        </Layout>
      </Container>
    </Container>
  );
};
