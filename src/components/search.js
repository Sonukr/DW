// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
  onSubmit: Function,
  onChange: Function,
  value: string
}

/* features  > Search */
export class Search extends React.Component<Props> {
  render () {
    return (
      <div className={styles.searchWrapper}>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" className="form-control"
                 placeholder="Search"  value={this.props.value}
                 onChange={this.props.onChange}
          />

        </form>
      </div>
    );
  }
}

