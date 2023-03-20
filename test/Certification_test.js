const { expect } = require("chai");
const hre = require("hardhat");
const { Certification } = require("@nomicfoundation/hardhat-network-helpers");
const { tme } = require("@nomicfoundation/hardhat-network-helpers");


//start describe block for certificate contract
describe("Certification", function () {
    let Certification, certification;
    let owner;
});  
//
  // Deploy the contract and store the instances in the variables
    beforeEach(async function () {
      [owner] = await ethers.getsigners();  
      Certification = await hre.ethers.getContractFactory("Certification");
      certification = await Certification.deploy("Degree Name", "DEGREE", "http://localhost:3000/");
     await certification.deployed();
    });
//  
    it("should have the correct name and symbol", async function () {
      expect(await certification.name()).to.equal("Degree Name");
      expect(await certification.symbol()).to.equal("DEGREE");
    });
//
//    // Deploy the contract and store the instances in the variables
//    //(async function(){
//    //    [owner] = await ethers.getsigners();
//    //    const Certification = await ethers("certificate");
//    //    certification = await Certification.deploy("DegreeName", "DegreeSymbol");
//    //})
//    // Add more tests here
//
//    // Test case for verifying initial state of the contract
//  it("Should set the correct initial values of state variables", async function () {
//    expect(await certification.name()).to.equal("DegreeName");
//    expect(await certification.symbol()).to.equal("DEG");
//    expect(await certification.Owner()).to.equal(owner.address);
//    expect(await certification.baseURI()).to.equal("http://localhost:3000/");
//  });
//
//  // Test case for issuing degree
//  it("Should allow owner to issue degree", async function() {
//    await certification.issueDegree(addr1.address);
//    expect(await certification.issueDegree(addr1.address)).to.be.true;
//  });
//
//  it("should allow claiming of degree", async function (){
//    await certification.issueDegree(addr1.address);
//    await certification.connect(addr1).claimDegree();
//    expect(await certification.balanceOf(addr1.address)).to.equal(1);
//    expect(await certification.personToDegree(addr1.address)).to.equal(
//      baseURI
//    );
//  });
//
//  it("should not allow non-degree holders to claim degree", async function () {
//    await expect(certification.connect(addr1).claimDegree()).to.be.revertedWith(
//      "Degree not issued"
//    );
//  });
//
//  it("should allow revocation of degree", async function () {
//    await certification.issueDegrees(addr1.address);
//    await certification.connect(addr1).claimDegree();
//    const tokenId = await certification.tokenOfOwnerByIndex(addr1.address, 0);
//    await certification.revoke(tokenId);
//    expect(await certification.balanceOf(addr1.address)).to.equal(0);
//  });
//
//  it("should not allow token transfers", async function () {
//    await certification.issueDegrees(addr1.address);
//    await certification.connect(addr1).claimDegree();
//    const tokenId = await certification.tokenOfOwnerByIndex(addr1.address, 0);
//    await expect(
//      certification.connect(addr1).transferFrom(addr1.address, addr2.address, tokenId)
//    ).to.be.revertedWith("You can't transfer this token");
//  });
//
//});