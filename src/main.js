import React from 'react';
import { StackNavigator } from 'react-navigation';

import FeedsList from './screens/feeds-list.js';
import FeedDetail from './screens/feed-detail.js';
import EntryDetail from './screens/entry-detail.js';
import AddFeed from './screens/add-feed.js';

import store from './store';

const Navigator = StackNavigator({
  FeedsList: { screen: FeedsList },
  FeedDetail: { screen: FeedDetail },
  EntryDetail: { screen: EntryDetail },
  AddFeed: { screen: AddFeed },
});

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Navigator screenProps={{ store }} />;
  }
}
