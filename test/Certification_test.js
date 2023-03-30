const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Certification", function() {
  let certification;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function() {
    const Certification = await ethers.getContractFactory("Certification");
    certification = await Certification.deploy("Degree", "DEG", "https://example.com/");
    await certification.deployed();

    [owner, addr1, addr2] = await ethers.getSigners();
  });

  describe("Deployment", function() {
    it("Should set the correct owner", async function() {
      expect(await certification.Owner()).to.equal(owner.address);
    });

    it("Should set the correct base URI", async function() {
      expect(await certification.baseURI()).to.equal("https://example.com/");
    });
  });

  describe("Functions", function() {
    it("Should allow the owner to issue degrees", async function() {
      await certification.issueDegrees(addr1.address);
      expect(await certification.issuedDegrees(addr1.address)).to.equal(true);
    });
  });
});
