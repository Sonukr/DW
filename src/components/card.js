// @flow
import * as React from 'react';
import styles from './styles.css';
import clasnames from 'classnames';
import {Fragment} from 'react';

type Props = {
  item: Object,
  onClick?: Function,
  isActive?: boolean
}

/* features  > ItemCard */
export class ItemCard extends React.Component<Props> {
  render () {
    const item = this.props.item;

    return (
      <div className={this.props.isActive? clasnames( styles.cardWrapper, styles.cardWrapperActive):styles.cardWrapper}
        onClick={this.props.onClick}>
        <div className={styles.cardDetails}>
          {item.stock === 'in stock' ?
            <p className={styles.price}><i
              className="fas fa-rupee-sign"></i> {item.available_price === 'NA' ? '-' : item.available_price}
            </p> :''
          }
          <h5 className={styles.title}>{item.bundle_name}</h5>
          <p className={styles.sku}>{item.sku}</p>

          {item.is_valid === 0 ?
            <p className={styles.opty}>Product not available.</p> :
            <Fragment>
              {item.out_of_stock_seed_days ?
                  <p className={styles.opty}>Out of stock from  <span>{item.out_of_stock_seed_days}</span> day(s)</p>:
                  <Fragment>
                    <p className={styles.increment}>Increased upto
                      <span> <i className="fas fa-rupee-sign"></i>  {item.price_opportunity_increase_by === 'NA' ? '-': item.price_opportunity_increase_by } </span>
                      <span>({item.price_opportunity_increase_by_percentage === 'NA' ? '-':  item.price_opportunity_increase_by_percentage}%)</span>
                    </p>
                    <p className={styles.opty}>Oppertunity exist from last <span>{item.price_opportunity_days}</span> day(s)</p>

                  </Fragment>
              }
            </Fragment>

          }



        </div>
        <div className={styles.cardImage}>
          <img src={item.thumbnail} alt=""/>
        </div>
        {/*<p>{JSON.stringify(this.props.item)}</p>*/}
      </div>
    );
  }
}

