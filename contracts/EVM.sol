pragma solidity ^0.4.26;

contract DEVM{
    uint[] public BJP;
    uint[]  public INC;
    address public Officer;
    mapping(address => bool) public hasVoted;
    function BJP() public returns(uint[]){
        require(!hasVoted[msg.sender],"Already voted")
        BJP.push(10);
        hasVoted[msg.sender] = true;
    }
    function INC() public  returns(uint[]){
        require(hasVoted[msg.sender],"Already Voted")
        INC.push(20);
        hasVoted[msg.sender] = true
    }
   function BJPvotes() public OnlyOfficercalls view returns (uint){ 
        return BJP.length;
    }
    function INCvotes() public OnlyOfficercalls view returns (uint) {
        return INC.length;
    }
    modifier OnlyOfficercalls(){
        require(msg.sender == Officer);
        _;
    }
   
}
