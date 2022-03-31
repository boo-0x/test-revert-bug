// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TestOne {
    TestTwo public immutable testTwo;
    mapping(uint256 => uint256) public one;

    constructor(TestTwo _testTwo) {
        testTwo = _testTwo;
        one[1] = 1;
    }

    function callTwoAndDeleteMapping() public {
        testTwo.updateTwo();
        delete one[1];
    }

    function callTwo() public {
        testTwo.updateTwo();
    }

    function deleteMapping() public {
        delete one[1];
    }
}

contract TestTwo {
    mapping(uint256 => uint256) public two;

    function updateTwo() public {
        two[1] = 1;
    }
}
