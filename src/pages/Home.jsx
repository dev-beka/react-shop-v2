import React from 'react';
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../components/Pagination";
import {Context} from "../App";
import {setParams} from "../redux/slices/filterSlice";

export const url = 'https://65b1bed49bfb12f6eafc1376.mockapi.io/items'
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const {categoryId, sortType, searchValue} = useSelector(obj => obj.filterSlice);
  const {currentPage} = React.useContext(Context);
  
  const fetchItems = async ()=> {
    try {
      setIsLoading(true)
      const order = sortType.sortBy.includes('-') ? 'desc' : 'asc';
      const replace = sortType.sortBy.replace('-', '');
      
      const itemsRes = await axios.get(
        `${url}?category=${categoryId}&sortBy=${replace}&order=${order}&page=${currentPage}&limit=4`);
      setItems(itemsRes.data)
    } catch (e) {
      console.log('ошибка get', e)
    } finally {
      setIsLoading(false)
    }
  }
  
  React.useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      console.log(params)
      dispatch(setParams({
        ...params
      }));
      isSearch.current = true
    }
  }, [])

  React.useEffect(() => {
    if(!isSearch.current){
      fetchItems();
    }
    isSearch.current = false

  }, [categoryId, sortType, currentPage])
  
  React.useEffect(()=>{
    if(isMounted.current){
      const queryString = qs.stringify({
        categoryId,
        sortType
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  },[categoryId, sortType])


  const products = items
    .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map(obj => <Card key={obj.id} {...obj}/>);
  const skeleton = [...new Array(4)].map((i, index) => <Skeleton key={index}/>);

  return (
    <>
      <img className="banner-top"
           src="https://www.prodirectsport.com/-/media/article-content/running/2022/january/nike-pegasus-trail-3-gtx-full-review/top-banner---desktop.jpg"
           alt="img"/>
      <div className="title-canvas">
        <div className="container">
          <div className="title-holder">
            <Categories/>
            <Sort/>
          </div>
        </div>
      </div>
      <section className="card-holder">
        {isLoading ? skeleton : products}
      </section>
      <Pagination/>
      <img className="footer-banner"
           src="https://www.stadiumgoods.com/BWStaticContent/54000/dd7c2c79-3973-4432-8249-5b6c50ee85d7_giftguide2023-jordan-gs-desktop.jpg"
           alt="img"/>
    </>
  );
};

export default Home;