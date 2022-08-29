

 import Expenses from './components/Expenses';

function App(){
    let expenses = [
        
        {
            id: "e1", 
            title: 'School Fee',
            amount: 250,
            date: new Date(2021, 5, 12)
        }, 
        {
            id: "e2", 
            title: 'Books',
            amount: 230,
            date: new Date(2021, 5, 12)
        }
        ,{
            id: "e3", 
            title: 'House Rent',
            amount: 250,
            date: new Date(2021, 5, 12)
        },
        {
            id: "e4", 
            title: 'Food',
            amount: 500,
            date: new Date(2021, 5, 12)
        }
    ];

    // let expenseDate = new Date(2022, 3, 28);
    // let expenseTitle = "School Fee";
    // let expenseAmount = 300;
    return(
        <div>

      <h2>Let's get started</h2>
      <Expenses item={expenses}/>

       
 </div>


);

}

export default App;