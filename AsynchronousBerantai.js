const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() 
{
  try 
  {
    const buy = await buyTollRoadCard(25);
    const topUp = await topUpBalance(buy, 10);
    const use = await useTollRoad(topUp);
  }
  
  catch(error)
  {
    console.log(error.message);
  }
}

getTollAccess();
