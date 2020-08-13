/** @format */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css';
import SearchService from '../services/SearchService';
import Card from './Card';
import { fetchData, hideLoader } from '../redux/actions';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.SearchService = new SearchService();
    this.MAX_COUNT = 10;
    this.API_KEY = '6af464c149023c58b81e81ab93488992';

    this.state = {
      origin: '',
      destination: '',
      setDepartureDate: '',
      city: [],
    };
  }

  componentDidMount() {
    this.updateCity();
    this.hideCity();
  }

  updateCity() {
    this.SearchService.getCity().then(this.onCityLoaded);
  }

  onCityLoaded = (city) => {
    this.setState({
      city,
    });
  };

  hideCity() {
    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
      const dropdownCitiesFrom = document.querySelector(
        '.dropdown__cities-from',
      );
      const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
      if (!event.target.closest('.form-search')) {
        dropdownCitiesFrom.textContent = '';
        dropdownCitiesTo.textContent = '';
      }
    });
  }

  showCityFrom = (list) => {
    list.textContent = '';
    setTimeout(() => {
      const { origin } = this.state;
      if (origin !== '') {
        const filterCity = this.state.city.filter((item) => {
          const fixItem = item.name.toLowerCase();
          return fixItem.startsWith(origin.toLowerCase());
        });

        filterCity.forEach((item) => {
          const li = document.createElement('li');
          li.classList.add('dropdown__city');
          li.textContent = item.name;
          list.append(li);
        });
      }
      if (origin === '') {
        list.textContent = '';
      }
    }, 10);
  };

  showCityTo = (list) => {
    list.textContent = '';
    setTimeout(() => {
      const { destination } = this.state;
      if (destination !== '') {
        const filterCity = this.state.city.filter((item) => {
          const fixItem = item.name.toLowerCase();
          return fixItem.startsWith(destination.toLowerCase());
        });

        filterCity.forEach((item) => {
          const li = document.createElement('li');
          li.classList.add('dropdown__city');
          li.textContent = item.name;
          list.append(li);
        });
      }
      if (destination === '') {
        list.textContent = '';
      }
    }, 0);
  };

  selectCityFrom = (event) => {
    const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
      this.setState({ origin: target.textContent });
      dropdownCitiesFrom.textContent = '';
    }
  };

  selectCityTo = (event) => {
    const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
      this.setState({ destination: target.textContent });
      dropdownCitiesTo.textContent = '';
    }
  };

  onOriginChange = (event) => {
    this.setState({
      origin: event.target.value,
    });
  };

  onDestinationChange = (event) => {
    this.setState({
      destination: event.target.value,
    });
  };

  departureDateChange = (event) => {
    this.setState({
      setDepartureDate: event.target.value,
    });
  };

  cheapestTicket = (card) => {
    this.setState({ cheapTicket: card });
    const cheapestTicket = document.getElementById('cheapest-ticket');
    const h2 = document.querySelector('.wrapper__ticket>h2');
    if (this.state.cheapTicket && cheapestTicket) {
      h2.textContent = `Самый дешевый билет на выбранную дату`;
      cheapestTicket.style.display = 'block';
    }
    if (this.state.cheapTicket === undefined) {
      cheapestTicket.style.display = 'block';
      h2.textContent = `Извините, нет билетов на выбранную дату`;
    }
  };

  otherTickets = (card) => {
    card.sort((a, b) => a.value - b.value);
    card.splice(9, card.length - 10);
    const otherTickets = document.getElementById('other-cheap-tickets');
    const h2 = document.querySelector('.block__ticket>h2');
    if (card.length > 0) {
      this.setState({ otherTicket: card });
      if (this.state.otherTicket && otherTickets) {
        h2.textContent = `Самые дешевые билеты на другие даты`;
        otherTickets.style.display = 'block';
      }
    } else {
      otherTickets.style.display = 'block';
      h2.textContent = `Извините, по этому направлению нет билетов`;
    }
  };

  renderCard = (data, date) => {
    const cheapTicketYear = data.best_prices;
    const cheapTicketDay = cheapTicketYear.filter(
      (item) => item.depart_date === date,
    );
    const card = cheapTicketDay[0];
    this.cheapestTicket(card);
    this.otherTickets(cheapTicketYear);
  };

  renderCardCheap = (item) => {
    return <Card data={item} city={this.state.city} />;
  };

  renderOtherCheap = (arr) => {
    if (arr) {
      return arr.map((item, i) => {
        return <Card data={item} city={this.state.city} key={i} />;
      });
    }
  };

  onSearchFlights = (event) => {
    event.preventDefault();
    this.setState({ otherTicket: '' });
    const formData = {
      from: this.state.city.find((item) => this.state.origin === item.name),
      to: this.state.city.find((item) => this.state.destination === item.name),
      when: this.state.setDepartureDate,
    };

    if (formData.from && formData.to) {
      const requestData = `?depart_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true&token=${this.API_KEY}`;
      new Promise((resolve) => resolve(this.props.fetchData(requestData)))
        .then(() => this.renderCard(this.props.fetchedPosts, formData.when))
        .then(() => setTimeout(() => this.props.hideLoader(), 300));
    } else {
      alert('Введите корректное название города');
    }
  };

  render() {
    const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
    const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
    const { cheapTicket, otherTicket, origin, destination } = this.state;
    const item = this.renderCardCheap(cheapTicket);
    const items = this.renderOtherCheap(otherTicket);
    const inputFrom = document.querySelector('.input-from');
    return (
      <>
        <section className="wrapper">
          <form onSubmit={this.onSearchFlights} className="form-search">
            <div className="wrapper__search">
              <div className="input" style={{ display: 'block' }}>
                <label>
                  Откуда
                  <input
                    type="text"
                    value={origin}
                    onInput={this.onOriginChange}
                    onChange={() => this.showCityFrom(dropdownCitiesFrom)}
                    className="input__cities-from"
                    required
                  />
                </label>
                <ul
                  onClick={this.selectCityFrom}
                  className="dropdown dropdown__cities-from"></ul>
              </div>

              <div className="input">
                <label>
                  Куда
                  <input
                    type="text"
                    value={destination}
                    onInput={this.onDestinationChange}
                    onChange={() => this.showCityTo(dropdownCitiesTo)}
                    className="input__cities-to"
                    required
                  />
                </label>
                <ul
                  onClick={this.selectCityTo}
                  className="dropdown dropdown__cities-to"></ul>
              </div>

              <div className="input input__cities-from">
                <label>
                  Отправление
                  <input
                    type="date"
                    placeholder="Departure date"
                    onChange={this.departureDateChange}
                    className="input__date-depart"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="wrapper__button">
              <button type="submit" className="button button__search">
                <span className="button__search-text">Найти билеты</span>
              </button>
            </div>
          </form>
        </section>
        <section className="card-wrapper">
          <section
            className="wrapper__ticket"
            id="cheapest-ticket"
            style={{ display: 'none' }}>
            <h2></h2>
            <article className="ticket">{cheapTicket ? item : null}</article>
          </section>
          <section
            className="block__ticket"
            id="other-cheap-tickets"
            style={{ display: 'none' }}>
            <h2></h2>
            <article className="ticket">{otherTicket ? items : null}</article>
          </section>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchData: fetchData,
  hideLoader: hideLoader,
};

const mapStateToProps = (state) => {
  return {
    fetchedPosts: state.post.fetchedPosts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
