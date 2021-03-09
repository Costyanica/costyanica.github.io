import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import InputItem from '../InputItem/InputItem';
import Counter from '../Counter/Counter';
import Table from '../Table/Table';


const props = {
  count: 10,
};

const App = () => {

  const columns = [
    { field: 'number', headerName: 'Регистрац.знак', width: 130 },
    { field: 'brand', headerName: 'Марка', width: 130 },
    { field: 'model', headerName: 'Модель', width: 130 },
    {
      field: 'age',
      headerName: 'Год',
      type: 'number',
      width: 90,
    },
    { field: 'color', headerName: 'Цвет', width: 130 },
    { field: 'group', headerName: 'Группа', width: 130 },
    { field: 'status', headerName: 'Статус подготовки', width: 130 },
    { field: 'availability', headerName: 'Статус доступности', width: 130 },
  ];
  
  const rows = [
    { id: 1, number: 'Н343НМ199', brand: 'Skoda', age: 2018, color: 'Черный', group: 'Шкода', status: 'В эксплуатации', availability: 'Доступен для аренды' },
    { id: 2, number: 'Н343НМ199', brand: 'Skoda', age: 2018, color: 'Черный', group: 'Шкода', status: 'На автомойке', availability: 'Доступен для аренды'  },
    { id: 3, number: 'Н343НМ199', brand: 'Skoda', age: 2018, color: 'Черный', group: 'Шкода', status: 'В эксплуатации', availability: 'Доступен для аренды'  },
    { id: 4, number: 'Н343НМ199', brand: 'Skoda', age: 2018, color: 'Черный', group: 'Шкода', status: 'В эксплуатации', availability: 'Доступен для аренды'  },
    { id: 5, number: 'Н343НМ199', brand: 'Skoda', age: 2018, color: 'Черный', group: 'Шкода', status: 'В эксплуатации', availability: 'Доступен для аренды'  },
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked');
  }

  
  return (
    <div>
      <Header />
      <Menu onClick={handleClick}/>
      <InputItem />
      <Counter count={props.count}/>
      <Table columns={columns} rows={rows} />
    </div>);
}

export default App;