// @flow
import * as React from 'react';
import styles from './styles.css';
import {Section} from '../../components/section';
import {Api} from '../../services/api';
import {connect} from 'react-redux';
import {SetData} from '../../actions/setData';
import {SetBaseView} from '../../actions/setBaseView';
import {ItemCard, ItemCardDetails} from '../../components/card';
import {Search} from '../../components/search';
import {isEmpty} from 'lodash'
import {Fragment} from 'react';
import {SetCurrentCard} from '../../actions/setCurrentCard';
import {SetCurrentBundle} from '../../actions/setCurrentBundle';
import {MenuList} from '../../components/menuList';
import {Filter} from '../../components/filter';

type Props = {
  dispatch: Object,
  data: Object,
  baseView: string
}

/* features  > Home */
class HomeProxy extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.state = {
      baseView: 'all_products',
      startCount: 0,
      limit: 20,
      search: "",
      currentFilter: {}
    }

  }

  componentDidMount(): void {
    this.dialApi()
  }

  dialApi = (details?:boolean, append?: boolean) => {
    if(details) {
      this.getDetails();
    }else{
      this.getInitialData(append);
    }
  }

  getInitialData = async (append?: boolean) => {
    const url = `bundles/?&api_key=38430b87ac715c5858b7de91fb90b3f7&base_view=${this.props.baseView}&start=${this.state.startCount}&limit=${this.state.limit}&sort_on=${this.state.currentFilter.sort_on}&sort_by=${this.state.currentFilter.sort_by}&filters={ "search":"${this.state.search}"}`
    const api = new Api();
    const data = await api.get(url);
    let prepreData = {};
    if(append) {
      const appendData = data.data.data;
      const finalData = this.props.data[this.props.baseView] ? [...this.props.data[this.props.baseView]['data'], ...appendData] :[...appendData]
      prepreData = {
        ...this.props.data,
        [this.props.baseView]: {
          ...data.data,
          data: finalData
        }
      }
    } else{
        prepreData = {
          ...this.props.data,
          [this.props.baseView]: data.data
        }
    }
    this.props.dispatch(new SetData(prepreData).plainAction())
  }

  getDetails = async () => {
    const bundle_id = this.props.currentCard.bundle_id;
    const url = `bundle_overview/?&api_key=38430b87ac715c5858b7de91fb90b3f7&base_view=${this.props.baseView}&bundle_id=${bundle_id}`;
    const api = new Api();
    const data = await api.get(url);
    const prepreData = data.data.data;
    console.log(data.data.data)
    this.props.dispatch(new SetCurrentBundle(prepreData).plainAction())
  }

  handleMenuClick = async (e) => {
    await this.props.dispatch(new SetBaseView(e).plainAction());
    this.setState({
      currentFilter: {}
    });
    const keys = Object.keys(this.props.data);
    if(keys.includes(e)){
      return null
    }else {
      await this.dialApi()
    }
  }

  handleChange = async  (e) => {
    if(isEmpty(e.target.value)) {
      this.setState({
        search: ""
      });
      // this.onSearchSubmit();
    }else {
      this.setState({
        search: `${e.target.value}`,
        startCount: 0,
        limit: 20,
        currentFilter: {}
      })
    }

  }

  onSearchSubmit = (e?: any) => {
    e.preventDefault()
    this.props.dispatch(new SetCurrentBundle({}).plainAction());
    this.props.dispatch(new SetCurrentCard({}).plainAction());
    this.dialApi();
  }

  handleFilter = (data: Object) => {
    const baseView = this.props.baseView;
    const cardItemdata = this.props.data[baseView]? this.props.data[baseView].data: [];
    this.setState({
      startCount: 0,
      limit: cardItemdata.length,
      currentFilter: data
    }, () => this.processFilter())
  }

  processFilter = async () => {
    console.log(this.state.currentFilter)
    await this.dialApi();
  }

  handleCardClick = async (data: Object) => {
    await this.props.dispatch(new SetCurrentCard(data).plainAction());
    await this.dialApi(true);
  }

  handlePaginantion = async () => {
    this.setState({
      startCount: parseInt(this.state.startCount + 20)
    }, await this.dialApi(null, true));
  }

  render () {
    const baseView = this.props.baseView;
    const cardItemdata = this.props.data[baseView]? this.props.data[baseView].data: [];
    const currentCard = this.props.currentCard ;
    const count = this.props.data[baseView] ? this.props.data[baseView].count : 0;
    const remainingCount = count - cardItemdata.length
    return (
      <div className={'container-fluid'}>
        <div className="row">
          <div className="col-md-3">
            <Section className={styles.sectionWrappperOne}>
              <MenuList handleMenuClick={this.handleMenuClick}/>
            </Section>
          </div>
          <div className="col-md-4">
            <div className={styles.filterWrapper}>
                <Search onSubmit={this.onSearchSubmit}
                  value={this.state.search}
                  onChange={(e) => this.handleChange(e)}
                />
                <div className={styles.sortingWrapper}>
                  <i className="fas fa-sort"></i>
                  <div className={styles.sortMenu}>
                    <Filter handleFilter={this.handleFilter}/>
                  </div>
                </div>
            </div>
            <Section  className={styles.sectionWrappperTwo}>
              {isEmpty(cardItemdata) ?
                <div className={styles.noDataWrapper}>
                  <p className={styles.noData}>No results for your query.</p>
                </div>:
                <Fragment>
                  {
                    cardItemdata.map((data, i) => (
                      <ItemCard
                        item={data}
                        key={i}
                        onClick={() => this.handleCardClick(data)}
                        isActive={data.bundle_id === currentCard.bundle_id}
                      />
                    ))
                  }
                </Fragment>
              }
              {remainingCount > 0 ?
                <div className={'text-center'}>
                  <button type="button" className="btn btn-primary"
                          onClick={this.handlePaginantion}>
                    Load more {remainingCount} items
                  </button>
                </div> : ""
              }
            </Section>

          </div>

          <div className="col-md-5">
            <Section  className={styles.sectionWrappperThree}>
              <div className={styles.noDataWrapper}>
                {isEmpty(this.props.currentBundle) ?
                  <p className={styles.noData}>Please select a card from left
                    side.</p> :
                  <div>
                    <p className={'text-right mr-3'} onClick={() => this.props.dispatch(new SetCurrentBundle({}).plainAction())}>Clear</p>
                    <ItemCardDetails item={this.props.currentBundle} key={'d'}
                              onClick={() => this.handleCardClick(null)}
                    />
                  </div>
                }
              </div>
            </Section>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  baseView: state.baseView,
  currentCard: state.currentCard,
  currentBundle: state.currentBundle
})

export const Home = connect(mapStateToProps)(HomeProxy)