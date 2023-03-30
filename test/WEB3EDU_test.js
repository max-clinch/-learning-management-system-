// Import the necessary packages and libraries
const { ethers } = require("hardhat");
const { expect } = require("chai");

// Describe the contract and its functions
describe("Web3EduContract()", () => {
  let web3Edu, web3EduContract, firstName, lastName, emailAddress, gender, getInstructorCount, experience, registrationFee, overrides;

  // Deploy the contract before each test
  beforeEach(async () => {
    [Owner, Addr1, Addr2, Addr3, Admin1, Admin2] = await ethers.getSigners();

    const Web3Edu = await ethers.getContractFactory("Web3Edu");
    web3EduContract = await Web3Edu.deploy();

    // This adds an admin
    await web3EduContract.addAdmin([Admin1.address, Admin2.address]);

    web3Edu = web3EduContract.connect(Owner);
  });

  // Declare overrides here
  overrides = { value: ethers.utils.parseEther("0.01") };

  // Test the contract's initialization
  describe("Deployments", async () => {
    it("should deploy with the right address", async () => {
      const OwnerAddress = await web3EduContract.Owner();
      expect(OwnerAddress).to.equal(Owner.address);
    });
  });

  // Test the contract's functions
  describe("Functions", () => {
    beforeEach(async () => {
      firstName = "max";
      lastName = "well";
      gender = "male";
      emailAddress = "maxwellasekhomegmail.com";
      experience = "3";

      registrationFee = ethers.utils.parseEther("0.01");
    });

    // Test script to registerInstructor() function
    it("Should Register an Instructor", async () => {
    //  await web3Edu.connect(Addr1).registerInstructor(
    //    firstName,
    //    lastName,
    //    emailAddress,
    //    gender,
    //    experience,
    //    overrides
    //  );
//
    //  const instructorCount = await web3Edu.getInstructorCount();
    //  expect(instructorCount).to.equal(0);
    });

    it("Should add an admin", async () => {
      await web3EduContract.addAdmin([Admin1.address, Admin2.address]);
    });
    it("should register a student", async () => {
        //await web3EduContract.connect(Addr1)
        //.enrllstudent(
        //    firstName,
        //    lastName,
        //    emailAddress,
        //    gender
        //);
        //const studeent = await web3EduContract.studeentCount();
        //expect(web3Edu).to.equal(1)
    })

    it("Should verify an instructor", async () => {
        //const overrides = { gasLimit: 100000 };
      //await web3Edu.connect(Addr1).registerInstructor(
      //  firstName,
      //  lastName,
      //  emailAddress,
      //  gender,
      //  experience,
      //  overrides
      //);
//
      //const overrides = { gasLimit: 100000 };
      //await web3Edu.connect(Admin1).verifyInstructor([Addr1.address], overrides);
//
      //const verifiedInstructorCount = await web3Edu.getVerifiedInstructorCount();
      //expect(verifiedInstructorCount).to.equal(1);
//
      //const isVerified = await web3Edu.isInstructorVerified(Addr1.address);
      //expect(isVerified).to.equal(true);
    });
  });
});
