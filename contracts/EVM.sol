// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract VotingSystem {
    uint[] public BJPVotes;
    uint[] public INCVotes;
    address public officer;
    mapping(address => bool) public hasVoted;

    constructor() {
        officer = msg.sender;
    }

    function voteBJP() public {
        require(!hasVoted[msg.sender], "Already voted");
        BJPVotes.push(10);
        hasVoted[msg.sender] = true;
    }

    function voteINC() public {
        require(!hasVoted[msg.sender], "Already voted");
        INCVotes.push(20);
        hasVoted[msg.sender] = true;
    }

    function getBJPVotesCount() public view returns (uint) {
        return BJPVotes.length;
    }

    function getINCVotesCount() public view returns (uint) {
        return INCVotes.length;
    }

    modifier onlyOfficer() {
        require(msg.sender == officer, "Only the officer can call this function");
        _;
    }
}
