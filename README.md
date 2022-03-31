## Description

Calling _callTwoAndDeleteMapping()_ fails with error `"revert":"reverted"`.

Howener, the following do not fail:

-   Calling _callTwo()_ and then _deleteMapping()_.
-   Calling _callTwo()_ and then _callTwoAndDeleteMapping()_.
-   Calling _deleteMapping()_ and then _callTwoAndDeleteMapping()_.
-   Commenting _one[1] = 1;_ in the constructor and calling _callTwoAndDeleteMapping()_.

## Steps to reproduce

-   Remove the _.example_ from the _.env.example_ file.
-   Add seeds of an account with balance in the test network.
-   Run:

```shell
yarn hardhat test
```
