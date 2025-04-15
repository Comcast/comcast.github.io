import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "src/components/Layout";
import Header from "src/components/Header";
import Multiselect from "multiselect-react-dropdown";
import { useRouter } from "next/router";
import multiFilterData from "src/constants/research_areas";
import Icon from "src/components/Icon";
import {
  overview,
  description,
  featuredImage,
  color,
  pages,
} from "src/data/research_areas.json";
import { data } from "src/data/research_areas_data.json";
import Clear from "src/components/Icon/Clear";
import SearchIcon from "src/components/Icon/Search";
import ClearBadge from "src/components/Icon/Clear-icon";
import PlayIcon from "src/components/Icon/Play-icon";
import PaperIcon from "src/components/Icon/Paper-icon";
import FileIcon from "src/components/Icon/File-icon";

const ResearchAreas = () => {
  const [searchResults, setSearchResults] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedPublications, setSelectedPublications] = useState([]);
  const [showClearAll, setShowClearAll] = useState(false);
  const { title } = useRouter().query;
  const tagShortNames = {
    cybersecurity: "cyber_sec",
    privacy_engineering: "priv_eng",
    emerging_technologies: "emerging_tech",
    evidence_based_public_policy: "evi_pub_policy",
  };

  function execute_search(value) {
    setSearchTerm(value);
    if (value != "") {
      let temp_array = [];
      for (let i = 0; i < data.length; i++) {
        let author_list = data[i].author.map((item) => item.toLowerCase());
        for (let j = 0; j < author_list.length; j++) {
          if (author_list[j].includes(value.toLowerCase())) {
            temp_array.push(data[i]);
          }
        }
      }
      if (temp_array.length == 0) {
        setSearchResults([]);
      } else {
        setSearchResults(temp_array);
      }
    } else {
      setSearchResults(data);
    }
  }

  function filter_by(selectedYears, selectedPublications) {
    setSearchTerm("");
    if (selectedYears.length != 0 || selectedPublications.length != 0) {
      let selected_years = selectedYears.map((item) => item.category);
      let selected_publications = selectedPublications.map(
        (item) => item.category
      );
      let temp_array = [];
      if (selected_years.length > 0 || selected_publications.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let is_year_present = false;
          let is_publication_present = false;
          selected_years.length == 0
            ? (is_year_present = true)
            : (is_year_present = false);
          selected_publications.length == 0
            ? (is_publication_present = true)
            : (is_publication_present = false);
          if (
            selected_years.length > 0 &&
            selected_years.includes(data[i].year)
          ) {
            is_year_present = true;
          }
          if (
            selected_publications.length > 0 &&
            selected_publications.includes(data[i].category)
          ) {
            is_publication_present = true;
          }
          if (is_year_present && is_publication_present) {
            temp_array.push(data[i]);
          }
        }

        setSearchResults(temp_array);
      }
    } else {
      setSearchResults(data);
    }
  }

  function remove_filter(value_to_be_removed, is_year) {
    if (is_year) {
      let temp_arr = [];
      temp_arr = selectedYears.filter(
        (item) => item.category != value_to_be_removed
      );
      onRemoveYear(temp_arr, { category: value_to_be_removed });
    } else {
      let temp_arr = [];
      temp_arr = selectedPublications.filter(
        (item) => item.category != value_to_be_removed
      );
      onRemovePublications(temp_arr, { category: value_to_be_removed });
    }
  }
  function onSelectYear(selectedList, selectedItem) {
    setSelectedYears(selectedList);
  }
  function onRemoveYear(selectedList, removedItem) {
    setSelectedYears(selectedList);
  }
  function clearAll() {
    setSelectedYears([]);
    setSelectedPublications([]);
    setSearchResults(data);
  }
  function update_clear_all_state(selectedYears, selectedPublications) {
    let is_clear_all_enabled = true;
    if (selectedYears.length === 0 && selectedPublications.length === 0) {
      is_clear_all_enabled = false;
    }
    setShowClearAll(is_clear_all_enabled);
  }
  function onSelectPublications(selectedList, selectedItem) {
    setSelectedPublications(selectedList);
  }
  function onRemovePublications(selectedList, removedItem) {
    setSelectedPublications(selectedList);
  }

  useEffect(() => {}, [title]);

  useEffect(() => {
    filter_by(selectedYears, selectedPublications);
    update_clear_all_state(selectedYears, selectedPublications);
  }, [selectedYears, selectedPublications]);
  useEffect(() => {
    execute_search;
  }, [searchTerm]);

  const shortTitle = tagShortNames[title];
  const filteredResults = searchResults.filter((element) =>
    element["tag"].includes(shortTitle)
  );
  const filterResultCount = filteredResults.length;

  return (
    <>
      {" "}
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

        {/* <meta name="twitter:card" content="summary" /> */}
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
        <div className="go_to_cybersecurity_research">
          <a href="/cybersecurity_research">
            <Icon type="leftarrow" color="white" />
            Cybersecurity Research
          </a>
        </div>
        <Header
          image={featuredImage}
          color={color}
          title={pages[title]?.page_title}
        ></Header>
        <section className="research_area_description">
          {pages[title]?.description}
        </section>
        <div className="research_layout">
          <div className="filter_by_container">
            <div className="filter_by">
              <p>Filter By:</p>
            </div>
            <div>
              <div
                className={`clear_all ${showClearAll ? "show" : "hide"}`}
                onClick={clearAll}
              >
                <div>Clear</div>
                <Clear />
                {/* <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 15 15"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg> */}
                {/* <Icon type="clear" color="black" /> */}
              </div>
            </div>
          </div>

          <div className="search_container">
            <div className="search_field">
              <input
                type="search"
                placeholder="Search by Author"
                value={searchTerm}
                onChange={(event) => execute_search(event.target.value)}
              />
              <SearchIcon />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg> */}
            </div>
            <div className="results_count">
              1-{filterResultCount} of {data.length} Results
            </div>
          </div>
          <div className="filter_panel">
            <div className="multiselect_container">
              <Multiselect
                className="multiselect_year"
                options={multiFilterData.Year}
                selectedValues={selectedYears}
                onSelect={onSelectYear}
                onRemove={onRemoveYear}
                hideSelectedList={true}
                displayValue="category"
                showCheckbox={true}
                placeholder="Year"
                emptyRecordMsg="No Years found"
                showArrow={true}
                //hidePlaceholder={false}
                avoidHighlightFirstOption={true}
              />
              <Multiselect
                className="multiselect_publications"
                options={multiFilterData.Types}
                selectedValues={selectedPublications}
                onSelect={onSelectPublications}
                onRemove={onRemovePublications}
                displayValue="category"
                showCheckbox={true}
                placeholder="Types"
                emptyRecordMsg="No Types found"
                // hidePlaceholder={false}
                hideSelectedList={true}
                avoidHighlightFirstOption={true}
                // selectionLimit={1}
                showArrow={true}
                //singleSelect={true}
              />
            </div>
          </div>
          <div className="result_cards">
            {(selectedYears.length > 0 || selectedPublications.length > 0) && (
              <div className="badges">
                {selectedYears &&
                  selectedYears.map((item, index) => (
                    <div key={index} className="badge">
                      {item.category}
                      <ClearBadge
                        onClick={() => remove_filter(item.category, 1)}
                      ></ClearBadge>
                      {/* <svg
                        onClick={() => remove_filter(item.category, 1)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg> */}
                    </div>
                  ))}
                {selectedPublications &&
                  selectedPublications.map((item, index) => (
                    <div key={index} className="badge">
                      {item.category}
                      <ClearBadge
                        onClick={() => remove_filter(item.category, 0)}
                      ></ClearBadge>
                      {/* <svg
                        onClick={() => remove_filter(item.category, 0)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg> */}
                    </div>
                  ))}
              </div>
            )}
            {filterResultCount ? (
              filteredResults.map((item, index) => (
                <div key={index} className="result_card_container">
                  <div className="result_category">{item.category}</div>
                  <div className="result_card">
                    <div className="card_header">
                      <span className="title">{item.title}</span>
                      <span className="published_date">
                        Published: {item.year}
                      </span>
                      <span className="author">{item.author.join(",")}</span>
                    </div>
                    <div className="result_card_badges">
                      {/* <div className="published_date">
                        Published: {item.year}
                      </div> */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="attachment_button">
                            <div class="icons">
                              {item.icon === "video" && (
                                <PlayIcon />
                                // <svg
                                //   xmlns="http://www.w3.org/2000/svg"
                                //   width="20"
                                //   height="20"
                                //   fill="#fff"
                                //   class="bi bi-play-circle"
                                //   viewBox="0 0 16 16"
                                // >
                                //   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                //   <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                                // </svg>
                              )}
                              {item.icon === "paper" && (
                                <PaperIcon />
                                // <svg
                                //   xmlns="http://www.w3.org/2000/svg"
                                //   width="20"
                                //   height="20"
                                //   fill="#fff"
                                //   class="bi bi-paperclip"
                                //   viewBox="0 0 16 16"
                                // >
                                //   <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                                // </svg>
                              )}
                              {item.icon == "file" && (
                                <FileIcon />
                                // <svg
                                //   xmlns="http://www.w3.org/2000/svg"
                                //   width="20"
                                //   height="20"
                                //   fill="#fff"
                                //   class="bi bi-file-text"
                                //   viewBox="0 0 16 16"
                                // >
                                //   <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                //   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                // </svg>
                              )}
                            </div>
                            {item.context}
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no_results">No Records found</div>
            )}
            {searchResults.length == 0 && (
              <div className="no_results">No Records found</div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ResearchAreas;
