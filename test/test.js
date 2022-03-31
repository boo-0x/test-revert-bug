describe("************** Test ******************", () => {
    before(async () => {
        account1 = await reef.getSignerByName("account1");

        // Leave enpty to deploy new contracts
        testOneAddress = "";
        testTwoAddress = "";

        const TestTwo = await reef.getContractFactory("TestTwo", account1);
        if (testTwoAddress == "") {
            testTwo = await TestTwo.deploy();
            await testTwo.deployed();
            testTwoAddress = testTwo.address;
        } else {
            testTwo = await TestTwo.attach(testTwoAddress);
        }
        console.log(`\tTestTwo contract deployed in ${testTwoAddress}`);

        const TestOne = await reef.getContractFactory("TestOne", account1);
        if (testOneAddress == "") {
            testOne = await TestOne.deploy(testTwoAddress);
            await testOne.deployed();
            testOneAddress = testOne.address;
        } else {
            testOne = await TestOne.attach(testOneAddress);
        }
        console.log(`\tTestOne contract deployed in ${testOneAddress}`);
    });

    it("Call callTwoAndDeleteMapping()", async () => {
        // Fails with --> "revert":"reverted"
        await testOne.connect(account1).callTwoAndDeleteMapping();
    });

    it("Call callTwo() and then deleteMapping()", async () => {
        await testOne.connect(account1).callTwo();
        await testOne.connect(account1).deleteMapping();
    });
});
