import React from 'react';

const listData = [
  {
    'id': 1,
    'author': 'Hot',
    'text': 'Reload',
  },
  {
    'id': 2,
    'author': 'Is',
    'text': 'Enabled',
  },
];


class HelloTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    this.setState({
      data: listData,
    });
  }
  render() {
    const helloItems = this.state.data.map(function(row) {
      return (
        <HelloRow key={row.id} data={row} />
        );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {helloItems}
        </tbody>
      </table>
      );
  }
}

/**
 * Listの単体データ
 */
class HelloRow extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    }),
  }
  render() {
    return (
      <tr>
        <td className="id">
          {this.props.data.id}
        </td>
        <td className="author">
          {this.props.data.author}
        </td>
        <td className="text">
          {this.props.data.text}
        </td>
      </tr>
      );
  }
}

/**
 * HelloTableを表示するクラス
 */
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello Table</h2>
        <HelloTable />
      </div>
      );
  }
}

export {Hello, HelloTable, HelloRow};
