// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
}

/* features  > MenuList */
export class MenuList extends React.Component<Props> {
  render () {
    return (
      <div>
        <p>Views</p>
        <ul>
          <li>
            <span>All products</span>
          </li>
          <li>
            <span>Margin gain opportunities</span>
          </li>
        </ul>
      </div>
    );
  }
}

