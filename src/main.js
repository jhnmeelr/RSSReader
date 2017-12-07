import React from 'react';
import { StackNavigator } from 'react-navigation';

import FeedList from './screens/feed-list.js';
import FeedDetail from './screens/feed-detail.js';
import EntryDetail from './screens/entry-detail.js';
import AddFeed from './screens/add-feed.js';

import store from './store';

const Navigator = StackNavigator({
  FeedList: { screen: FeedList },
  FeedDetail: { screen: FeedDetail },
  EntryDetail: { screen: EntryDetail },
  AddFeed: { screen: AddFeed },
});

export default class App extends React.Component {
  render() {
    return <Navigator screenProps={{ store }} />;
  }
}
