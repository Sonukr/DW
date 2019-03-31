// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
  handleMenuClick: Function
}

/* features  > MenuList */
export class MenuList extends React.Component<Props> {

  handleMenuClick = (value) =>{
    this.props.handleMenuClick(value);
  }

  render () {
    return (
      <div  className={styles.menuWrapper}>
        <p>Views</p>
        <ul>
          <li onClick={() => this.handleMenuClick('all_products')}>
            <span>All products</span>
            <span>1126</span>
          </li>
          <li onClick={() => this.handleMenuClick('increase_opportunity')}>
            <span>Margin gain opportunities</span>
            <span>27</span>
          </li>
        </ul>
      </div>
    );
  }
}

