// @flow
import * as React from 'react';
import classnames  from 'classnames'
import styles from './styles.css';

type Props = {
  className: string,
  children: any
}

/* features  > Section */
export class Section extends React.Component<Props> {
  render () {
    return (
      <div className={classnames( styles.scrollWrapper, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

