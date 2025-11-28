# FreelancerLog – Simple Web3 Work Tracker

A lightweight and beginner-friendly Solidity smart contract that allows freelancers to log their daily work on-chain.  
This is perfect for learning how mappings, structs, state updates, and basic Web3 interactions work on the blockchain.

## 🔗 Deployed Smart Contract  
**Contract Address:** `0x39472130651Ff14FF471B7Cb0B362ee9c1Af318e`

<img width="3572" height="2084" alt="image" src="https://github.com/user-attachments/assets/51402c54-1ff0-4c84-bbe8-3146ab998795" />


**Explorer:** https://coston2-explorer.flare.network//tx/0x9e3cd594a73b4fce88b69ce4860f34d0beba3fc67bfb6954b1f828c2696f9089

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

## 📦 Smart Contract Code  
```solidity
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
