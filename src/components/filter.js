// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
}

/* Filter */
export class Filter extends React.Component<Props> {

  handleFilter = (value) =>{
    this.props.handleFilter(value);
  }

  render () {
    return (
      <ul>
        <li onClick={() => this.handleFilter({sort_on: "available_price",sort_by: "desc"})}>Price - high to low</li>
        <li onClick={() => this.handleFilter({sort_on: "available_price",sort_by: "asc" })}>Price - low to high</li>
        <li onClick={() => this.handleFilter({sort_on: "discount",sort_by: "desc" })}>Discount % - hight to low</li>
        <li onClick={() => this.handleFilter({sort_on: "discount",sort_by: "asc" })}>Discount % - low to high</li>
        <li onClick={() => this.handleFilter({sort_on: "price_opportunity_increase_by_percentage",sort_by: "desc" })}>Increase % - hight to low</li>
        <li onClick={() => this.handleFilter({sort_on: "price_opportunity_increase_by_percentage",sort_by: "asc" })}>Increase % - low to high</li>
        <li onClick={() => this.handleFilter({sort_on: "not_lowest_decrease_by_percentage",sort_by: "desc" })}>Decrease % - hight to low</li>
        <li onClick={() => this.handleFilter({sort_on: "not_lowest_decrease_by_percentage",sort_by: "asc" })}>Decrease % - low to high</li>
      </ul>
    );
  }
}

