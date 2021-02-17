
function checkCashRegister(price, cash, cid) {
  const currMap = [ // order matters here we want to start from the top.
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  let change = cash - price;
  let totalCash = cid.reduce((acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1]; // flatten cid for easier access
    return acc;
  }, { total: 0 });

  if(change > totalCash.total){
    return {
      status: "INSUFFICIENT_FUNDS", 
      change: []
    }
  }
  if(change === totalCash.total){
    return {
      status: "CLOSED", 
      change: cid
    }
  }

  let changeArr = currMap.reduce((acc, curr) => {
    var value = 0;
    while(totalCash[curr.name] > 0 && change >= curr.val) { // traverse through the same currency until finished
      change -= curr.val;
      totalCash[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if(value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (changeArr.length < 1 || change > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  return {
    status: "OPEN",
    change: changeArr
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

