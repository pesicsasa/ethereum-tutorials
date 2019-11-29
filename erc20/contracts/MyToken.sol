pragma solidity ^0.5.2;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
contract MyToken is ERC20, ERC20Detailed, ERC20Mintable {
  constructor(
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    uint256 _initialSupply
  ) 
    ERC20Detailed(_name, _symbol, _decimals)
    public
  {

  }
}