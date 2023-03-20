const { expect } = require("chai");
const { ethers } = require("hardhat");

//describe("CourseModule", function() {
//  let CourseModule;
//  let courseModule;
//  let owner;
//  let addr1;
//  let addr2;
//
//  beforeEach(async function() {
//    CourseModule = await ethers.getContractFactory("CourseModule");
//    [owner, addr1, addr2] = await ethers.getSigners();
//
//    courseModule = await CourseModule.deploy("https://example.com/");
//    await courseModule.deployed();
//  });
//
//  describe("listCourse", function() {
//    it("should list a new course", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      expect(await courseModule.module(0)).to.deep.equal(["Course Name", "CRS", "Course Duration", 100, owner.address]);
//    });
//  });
//
//  describe("purchaseModule", function() {
//    it("should allow a subscriber to purchase the module", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      await courseModule.purchaseModule({value: 100});
//      expect(await courseModule.isSubscriber(owner.address)).to.equal(true);
//    });
//  });
//
//  describe("createCertificate", function() {
//    it("should create a new certificate", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      await courseModule.createCertificate();
//      expect(await courseModule.certificationArray(0)).to.be.properAddress;
//    });
//  });
//
//  describe("issueCertificate", function() {
//    it("should issue a certificate to a subscriber", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      await courseModule.purchaseModule({value: 100});
//      await courseModule.createCertificate();
//      await courseModule.issueCertificate(owner.address);
//      expect(await courseModule.isCertificateClaimed(owner.address)).to.equal(false);
//    });
//  });
//
//  describe("claimCertificate", function() {
//    it("should allow a subscriber to claim their certificate", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      await courseModule.purchaseModule({value: 100});
//      await courseModule.createCertificate();
//      await courseModule.issueCertificate(owner.address);
//      await courseModule.claimCertificate();
//      expect(await courseModule.isCertificateClaimed(owner.address)).to.equal(true);
//    });
//  });
//
//  describe("withdraw", function() {
//    it("should allow the owner to withdraw contract balance", async function() {
//      await courseModule.listCourse("Course Name", "Course Duration", "CRS", 100);
//      await courseModule.purchaseModule({value: 100});
//      await courseModule.withdraw();
//      expect(await ethers.provider.getBalance(courseModule.address)).to.equal(0);
//    });
//  });
//});
//