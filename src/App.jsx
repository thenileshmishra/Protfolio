import "./App.css";
import React, { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import SectionSkeleton from "./components/skeleton/SectionSkeleton";

const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Qualification = lazy(() => import("./components/qualification/Qualification"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Suspense fallback={<SectionSkeleton cards={2} />}>
          <Home />
        </Suspense>
        <Suspense fallback={<SectionSkeleton cards={1} />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton cards={3} />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton cards={2} />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton cards={2} />}>
          <Qualification />
        </Suspense>
        <Suspense fallback={<SectionSkeleton cards={1} />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
