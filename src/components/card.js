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
      </div>
    );
  }
}


export class ItemCardDetails extends React.Component<Props> {
  render () {
    const item = this.props.item;

    return (
      <div className={styles.cardWrapper}>

        <div className={clasnames(styles.cardImage, styles.flexTwo)}>
          <img src={item.thumbnail} alt=""/>
        </div>
        <div className={clasnames(styles.cardDetails, styles.flexFive)}>
          <p className={styles.textCap}>{item.stock}</p>
          {item.stock === 'in stock' ?
            <p className={styles.price}><i
              className="fas fa-rupee-sign"></i> {item.your_price === 'NA' ? '-' : item.your_price}
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
                  {/*<p className={styles.increment}>Increased upto*/}
                    {/*<span> <i className="fas fa-rupee-sign"></i>  {item.price_opportunity_increase_by === 'NA' ? '-': item.price_opportunity_increase_by } </span>*/}
                    {/*<span>({item.price_opportunity_increase_by_percentage === 'NA' ? '-':  item.price_opportunity_increase_by_percentage}%)</span>*/}
                  {/*</p>*/}
                  {/*<p className={styles.opty}>Oppertunity exist from last <span>{item.price_opportunity_days}</span> day(s)</p>*/}
                  <div className={styles.tableRow}>
                    <p>
                      <span>Your Price</span>
                      <span>{item.your_price === 'NA' ? '-' : item.your_price}</span>
                    </p>
                    <p>
                      <span>Lowest Price</span>
                      <span>{item.lowest_price_value === 'NA' ? '-' : item.lowest_price_value}</span>
                    </p>
                    <p>
                      <span>Highest Price</span>
                      <span>{item.highest_price_value === 'NA' ? '-' : item.highest_price_value}</span>
                    </p>
                  </div>
                  <div className={styles.tableRow}>
                    <p>
                      <span>Price position</span>
                      <span>{item.position === 'NA' ? '-' : item.position}</span>
                    </p>
                    <p>
                      <span>Competitors</span>
                      <span>{item.num_competitors === 'NA' ? '-' : item.num_competitors}</span>
                    </p>
                    <p>
                      <span>Price Gap</span>
                      <span>{item.price_gap === 'NA' ? '-' : item.price_gap}</span>
                    </p>
                  </div>
                  <div className={styles.tableRow}>
                    <p>
                      <span>Price Increase</span>
                      <span>{item.max_price_increased_value === 'NA' ? '-' : item.max_price_increased_value}</span>
                    </p>
                    <p>
                      <span>Price Decrease</span>
                      <span>{item.max_price_decreased_value === 'NA' ? '-' : item.max_price_decreased_value}</span>
                    </p>
                    <p>
                      <span>Out of stock (Competitors)</span>
                      <span>{item.out_of_stock_competitors === 'NA' ? '-' : item.out_of_stock_competitors}</span>
                    </p>
                  </div>
                </Fragment>
              }
            </Fragment>

          }

        </div>

      </div>
    );
  }
}

