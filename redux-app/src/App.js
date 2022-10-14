import { createStore, combineReducers } from "redux";

function App() {
  const createPolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };

  const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
        name: name,
      },
    };
  };

  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect,
      },
    };
  };

  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
      oldListOfClaims.push(action.payload);
      return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
  };

  const accounting = (bagOfMoney = 100, action) => {
    if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
  };

  const policies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...listOfPolicies, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return listOfPolicies.filter((name) => name !== action.payload.name);
    }
    return listOfPolicies;
  };

  const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies,
  });

  const store = createStore(ourDepartments);

  store.dispatch(createPolicy("Alex", 20));
  store.dispatch(createPolicy("Jim", 30));
  store.dispatch(createPolicy("Bob", 40));
  console.log(store.getState());

  store.dispatch(createClaim("Alex", 120));
  store.dispatch(createClaim("Jim", 50));
  console.log(store.getState());

  store.dispatch(deletePolicy("Bob"));
  console.log(store.getState());
  return (
    <>
      <div>
        <h1> Quantidade de dinehiro:</h1>
        <span>{store.getState().accounting}</span>
      </div>
      <div>
        <h1>claimHistory(nomes e dinheiro):</h1>
        {store.getState().claimsHistory.map((item) => (
          <>
            <p>{item.name}</p>
            <p>{item.amountOfMoneyToCollect}</p>
          </>
        ))}
      </div>
      <div>
        <h1>Policies(nomes):</h1>
        {store.getState().policies.map((item) => (
          <>
            <p>{item}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
