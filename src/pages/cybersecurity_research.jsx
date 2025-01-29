import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  title,
  overview,
  description,
  featuredImage,
  color,
  sections,
} from "src/data/cybersecurity_research.json";
import Layout from "src/components/Layout";
import Header from "src/components/Header";
import ResearchHeader from "src/components/ResearchHeader";
const CybersecurityResearch = () => {
  const router = useRouter();
  const [showxgitguard, setshowxgitguard] = useState(false);
  const [showxcompass, setshowxcompass] = useState(false);
  const [showguardrail, setshowguardrail] = useState(false);

  function load_cybersecurity_research(index) {
    const title = sections["research_areas"][index]
      .replace(/ /g, "_")
      .toLowerCase();
    router.push(`/research_areas?title=${encodeURIComponent(title)}`);
  }

  return (
    <>
      <Head>
        <title>Open Source Software {title} at Comcast</title>
        <meta name="description" content={overview || description} />
        <meta rel="canonical" content="https://comcast.github.io/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comcast.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview || description} />
        <meta
          property="og:image"
          content={`${process.env.ASSET_PREFIX}${featuredImage}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comcast" />
        <meta name="twitter:creator" content="@comcast" />
        <meta
          name="twitter:image"
          content={`${process.env.ASSET_PREFIX}${featuredImage}`}
        />
        <meta name="twitter:image:alt" content={title} />
      </Head>
      <Layout>
        <Header image={featuredImage} color={color} title=""></Header>
        <ResearchHeader />
    
        <div className="about_cybersecurity">
          <h2>Who are we?</h2>
          <section>{sections["about"]}</section>
        </div>
  
        <div>
          <h2>Research Areas</h2>
          <section className="research_areas">
            {sections["research_areas"].map((item, research_area_index) => (
              <div
                key="research_area_index"
                onClick={() => load_cybersecurity_research(research_area_index)}
              >
                {item}
              </div>
            ))}
          </section>
        </div>
        {/* OUR OPEN SOURCE TOOLS */}
        <div>
          <h2>Our Open Source Tools</h2>
          <section className="opensource_tools">
            <div
              onClick={() => {
                setshowxgitguard(!showxgitguard);
                setshowxcompass(false);
                setshowguardrail(false);
              }}
            >
              <img
                src={`${process.env.ASSET_PREFIX}/images/cybersecurity/xgitguard.webp`}
                alt="xgg"
                preload="true"
                layout="fill"
                objectfit="cover"
                objectposition="center"
              />
              <h4>{sections.opensource_tools[0].name}</h4>
            </div>
            <div
              onClick={() => {
                setshowxcompass(!showxcompass);
                setshowxgitguard(false);
                setshowguardrail(false);
              }}
            >
              <img
                src={`${process.env.ASSET_PREFIX}/images/cybersecurity/xcompass.webp`}
                alt="xgg"
                preload="true"
                layout="fill"
                objectfit="cover"
                objectposition="center"
              />
              <h4>{sections.opensource_tools[1].name}</h4>
            </div>
            <div
              onClick={() => {
                setshowguardrail(!showguardrail);
                setshowxgitguard(false);
                setshowxcompass(false);
              }}
            >
              <img
                src={`${process.env.ASSET_PREFIX}/images/cybersecurity/guardrail_logo.svg`}
                alt="xgg"
                preload="true"
                layout="fill"
                objectfit="cover"
                objectposition="center"
              />
              <h4>{sections.opensource_tools[2].name}</h4>
            </div>
          </section>
        </div>
        {showxgitguard && (
          <div>
            <h2>About {sections.opensource_tools[0].name}</h2>
            <p>{sections.opensource_tools[0].description}</p>
          </div>
        )}
        {showxcompass && (
          <div>
            <h2>About {sections.opensource_tools[1].name}</h2>
            <p>{sections.opensource_tools[1].description}</p>
          </div>
        )}
        {showguardrail && (
          <div>
            <h2>About {sections.opensource_tools[2].name}</h2>
            <p>{sections.opensource_tools[2].description}</p>
          </div>
        )}
      </Layout>
    </>
  );
};

export default CybersecurityResearch;
