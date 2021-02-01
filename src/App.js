import './App.css';
import Test from './Test';
import Test2 from './Test2';
import Header from './Header/Header';
import Goods from './Goods';

const headerData = {
  site_name: "site name",
  nav: [
    {"link": "nav1","text":"my link"},
    {"link": "nav1","text":"my link2"},
    {"link": "nav1","text":"my link3"},
  ]
};

const goods = [
  {"title" : "apple", "cost" : 330, "image":"http://www.coollady.ru/puc/5/frukt/CL-04.jpg"},
  {"title" : "orange", "cost" : 530, "image":"https://ds04.infourok.ru/uploads/ex/0b2b/000fe9aa-42208a9b/hello_html_4cf454ef.png"},
  {"title" : "peach", "cost" : 630, "image":"https://www.nastol.com.ua/download.php?img=201305/1680x1050/nastol.com.ua-48882.jpg"},
]

function App() {
  return (
    <>
      <Header data={headerData}/>
      <Test />
      <Test2 />
      {goods.map( item => <Goods title={item.title} cost={item.cost} image={item.image}/>)}
      
    </>
  );
}

export default App;
