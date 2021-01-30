import React, { Component } from "react";
// import axios from "axios";
import Spinner from "./Spinner";
import Notification from "./Notification";
// import ImageGalleryItem from "./ImageGalleryItem";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Modal from "./Modal";
import imageApi from "../services/imageApi";

export default class App extends Component {
  state = {
    hits: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    isModalOpen: false,
  };

openModal = modalImage => {
  this.setState({ isModalOpen: true, modalImage });
  window.addEventListener('keydown', this.closeModal);
};

closeModal = evt => {
  if (evt.target === evt.currentTarget || evt.keyCode === 27)
    this.setState({ isModalOpen: false });
  window.removeEventListener('keydown', this.closeModal);
};

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imageApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, hits: [] });
  };

  
  render() {
    const { hits, loading, error, isModalOpen, modalImage } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {hits.length > 0 && <ImageGallery hits={hits} openModal={this.openModal}/>}
        {loading && <Spinner message="Loading..." />}
        {hits.length > 0 && !loading && (
          <Button fetchArticles={this.fetchArticles} />
        )}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal}/>
        )}
      </div>
    );
  }
}
