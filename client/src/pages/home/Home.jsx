import React from 'react'
import ItemCard from '../../components/itemCard/ItemCard';
import SmallitemCard from '../../components/smallItemCard/SmallitemCard';
import SliderList from '../../components/slidercomp/SliderList';
import ItemListComp from '../../components/ItemListComp/ItemListComp';
import ListItemsCard from './../../components/listItemCard/ListItemsCard';

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <SliderList />
      <ItemListComp title={"Continue Watching for You"} itmes={""} />
      <ListItemsCard title={"Watchlist"} itmes={""} />
      <ItemListComp title={"Latest Releases"} itmes={""} />
      <ListItemsCard title={"ICC Men's T20 World Cup"} itmes={""} />
      <ItemListComp title={"Top 10 in India Today - Hindi"} itmes={""} />
      <ListItemsCard title={"Popular Shows"} itmes={""} />
      <ItemListComp title={"Superhero Movies"} itmes={""} />
    </div>
  );
}
export default Home;