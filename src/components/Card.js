/** @format */

import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getNameCityFrom();
    this.getNameCityTo();
    this.getDate();
    this.currencyEx();
    this.getChanges();
    this.getLinkAviasales();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.getNameCityFrom();
      this.getNameCityTo();
      this.getDate();
      this.currencyEx();
      this.getChanges();
      this.getLinkAviasales();
    }
  }

  getChanges() {
    const num = this.props.data.number_of_changes;
    switch (num) {
      case 1:
        this.setState({ transfer: 'С одной пересадкой' });
        break;
      case 2:
        this.setState({ transfer: 'С двумя пересадками' });
        break;
      case 3:
        this.setState({ transfer: 'С тремя пересадками' });
        break;
      default:
        this.setState({ transfer: 'Без пересадок' });
    }
  }

  getDate() {
    const date = new Date(this.props.data.depart_date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    this.setState({ date });
  }

  getLinkAviasales() {
    let link = 'https://www.aviasales.ua/search/';
    link += this.props.data.origin;
    const date = new Date(this.props.data.depart_date);
    const day = date.getDate();
    link += day < 10 ? '0' + day : day;
    const month = date.getMonth();
    link += month < 10 ? '0' + month : month;
    link += this.props.data.destination;
    link += '1';
    this.setState({ link });
  }

  getNameCityFrom() {
    const objCity = this.props.city.find(
      (item) => item.code === this.props.data.origin,
    );
    this.setState({ cityNameFrom: objCity.name });
    console.log(this.state.cityNameFrom);
  }
  getNameCityTo() {
    const objCity = this.props.city.find(
      (item) => item.code === this.props.data.destination,
    );
    this.setState({ cityNameTo: objCity.name });
    console.log(this.state.cityNameTo);
  }
  currencyEx() {
    const exch = (this.props.data.value / 2.6).toFixed(2);
    this.setState({ exch });
  }
  render() {
    return (
      <div className="card_ticket">
        <h3 className="agent">{this.props.data.gate}</h3>
        <div className="ticket__wrapper">
          <div className="left-side">
            <a href={this.state.link} className="button button__buy">
              Купить за {this.state.exch}₴
            </a>
          </div>
          <div className="right-side">
            <div className="block-left">
              <div className="city__from">
                Вылет из города:
                <span className="city__name">{this.state.cityNameFrom}</span>
              </div>
              <div className="date">{this.state.date}</div>
            </div>

            <div className="block-right">
              <div className="changes">{this.state.transfer}</div>
              <div className="city__to">
                Город назначения:
                <span className="city__name">{this.state.cityNameTo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
