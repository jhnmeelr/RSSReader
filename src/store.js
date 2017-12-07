import { observable } from 'mobx';
import { AsyncStorage } from 'react-native';

class Store {
  @observable feeds;
  @observable selectedFeed;
  @observable selectedEntry;

  constructor() {
    AsyncStorage.getItem('@feeds').then(sFeeds => {
      this.feeds = JSON.parse(sFeeds) || [];
    });
  }

  persistFeeds() {
    AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds));
  }

  addFeed(url, feed) {
    this.feeds.push({ url, ...feed });
    this.persistFeeds();
  }

  removeFeed(url) {
    this.feeds = this.feeds.filter(f => f.url !== url);
    this.persistFeeds();
  }

  selectFeed(feed) {
    this.selectedFeed = feed;
  }

  selectEntry(entry) {
    this.selectedEntry = entry;
  }
}

export default new Store();
