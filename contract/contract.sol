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