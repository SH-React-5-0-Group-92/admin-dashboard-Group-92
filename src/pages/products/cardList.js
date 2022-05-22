import React, { Component } from 'react';
import './cardList.css'
import Card from './card';

class CardList extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    fetch('https://fakerapi.it/api/v1/products?_quantity=10/data')
      .then(response => response.json())
      .then(products => {
        this.setState({
          isLoaded: true,
          data: products.data,
        })
      });
  }

  render() {
    var { isLoaded, data  } = this.state;
    
    if (!isLoaded) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="card-list">
          {data.map(( user, i) =>{
            return(
              <Card 
              key={data[i].id} 
              names={data[i].name} 
              description={data[i].description} 
              ean={data[i].ean} 
              upc={data[i].upc} 
              image={data[i].image} 
              netPrice={data[i].net_price} 
              tax={data[i].taxes} 
              price={data[i].price} 
              categories={data[i].categories} 
              // tag={data[i].tags.map((i) =>{
              //   return(
              //     [i]
              //   )
              // })}
              // images
              />
            )
            // console.log(dater[1].name)
          })}
        </div>
      );
    }
  }
 
}

export default CardList;