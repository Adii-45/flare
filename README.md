# FreelancerLog – Simple Web3 Work Tracker

A lightweight and beginner-friendly Solidity smart contract that allows freelancers to log their daily work on-chain.  
This is perfect for learning how mappings, structs, state updates, and basic Web3 interactions work on the blockchain.

---

## 📝 Project Description

**FreelancerLog** is a minimal smart contract that lets every wallet address store **one personal work log** on the blockchain.  
A user can add their task, update it anytime, and mark it as completed.  
Everything is stored permanently and transparently on-chain, making it useful for practice or small productivity dApps.

---

## 🚀 What It Does

- Allows each user (wallet) to store **one work entry**.  
- Lets users **update** their work description.  
- Lets users **mark their work as completed**.  
- Lets users **fetch their current log** anytime.  
- Useful for training, portfolios, tutorials, or small tools.

---

## ✨ Features

- **1-log-per-user model** — simple and clean  
- **Easy to integrate** with frontend frameworks  
- **No complex data structures** — perfect for beginners  
- **Gas-efficient**  
- **Clear, readable Solidity code**  

---

## 🔗 Deployed Smart Contract  
**Contract Address:** `XXX`

---

## 📦 Smart Contract Code  
```solidity
// paste your code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelancerLog {

    struct Log {
        string work;
        bool completed;
    }

    // each address has 1 log only
    mapping(address => Log) public myLog;

    // set / update your log
    function setWork(string memory _work) public {
        myLog[msg.sender].work = _work;
        myLog[msg.sender].completed = false;
    }

    // mark your log completed
    function markCompleted() public {
        myLog[msg.sender].completed = true;
    }

    // get your log
    function getMyLog() public view returns (string memory, bool) {
        Log memory l = myLog[msg.sender];
        return (l.work, l.completed);
    }
}
