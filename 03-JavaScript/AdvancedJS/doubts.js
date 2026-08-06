//Classic interview example — var vs let in loops with setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0 1 2


// Why:

// var i — only one i exists (function/global-scoped), shared across all loop iterations. By the time setTimeout callbacks actually run (after the loop fully finishes), i has already become 3.
// let j — creates a fresh, separate j binding for each iteration (block-scoped to that single loop pass). Each callback captures its own j, frozen at that iteration's value.

// var i:  ONE shared box            let j:  NEW box each iteration
// ┌─────┐                            ┌─────┐ ┌─────┐ ┌─────┐
// │  i=3   │ ← all callbacks           │ j=0   │ │ j=1   │ │ j=2   │
// └─────┘   read this SAME box      └─────┘ └─────┘ └─────┘
//                                      each callback reads its OWN box

function createBankAccount(initialBalance) {
  let balance = initialBalance;   // NOT accessible from outside directly

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return balance;
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.getBalance());   // 1000
account.deposit(500);
console.log(account.getBalance());   // 1500

console.log(account.balance);   // undefined — can't access directly!

// Private Variables / Data Encapsulation

// JS doesn't have true "private" variables (pre-ES2022 class fields), so closures were the classic way to simulate privacy.
//balance can only be changed through the exposed methods (deposit, withdraw) — nobody outside can directly do account.balance = 999999 to cheat the system. This is closure-based encapsulation, commonly asked as "how do you create private variables in JS?"


function createFunctions() {
  var functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}

const fns = createFunctions();
fns[0]();   // 3
fns[1]();   // 3
fns[2]();   // 3 — all print 3, not 0, 1, 2!

//Why: all 3 functions close over the same i (since var is function-scoped, only one i exists total). By the time any of these functions actually run, the loop has already finished and i is 3.