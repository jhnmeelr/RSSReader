import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { observer } from 'mobx-react/native';

@observer
export default class FeedsList extends React.Component {
  render() {
    const { feeds } = this.props.screenProps.store;

    return (
      <Container>
        <Content>
          <List>
            {feeds && feeds.map((f, i) => (
              <ListItem key={i}>
                <Text>{f.title}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
