//import "hardhat/console.sol";
//import { ethers } from "hardhat";
//import { expect } from "chai";
//import { Registration } from "../artifacts/contracts/Registration.sol";

const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

//describe("Registration Contract", function () {
//  let owner;
//  let admin1;
//  let admin2;
//  let student1;
//  let student2;
//  let instructor1;
//  let instructor2;
//  let registrationContract;
//
//  beforeEach(async function () {
//    [owner, admin1, admin2, student1, student2, instructor1, instructor2] = await ethers.getSigners();
//
//    registrationContract = await ethers.getContractFactory("Registration")
//      .then((factory) => factory.deploy());
//    await registrationContract.deployed();
//});
//
//  describe("Deployment", function () {
//    it("Should set the owner address", async function () {
//      expect(await registrationContract.Owner()).to.equal(owner.address);
//    });
//});
//
//  describe("enrollStudent", function () {
//    it("Should register a new student", async function () {
//      await registrationContract.enrollStudent("John", "Doe", "Male", "john.doe@example.com");
//
//      expect(await registrationContract.studentCount()).to.equal(1);
//      expect(await registrationContract.isStudent(student1.address)).to.equal(true);
//    });
//
//    it("Should not allow a student to enroll twice", async function () {
//      await registrationContract.enrollStudent("John", "Doe", "Male", "john.doe@example.com");
//
//      await expect(registrationContract.enrollStudent("Jane", "Doe", "Female", "jane.doe@example.com"))
//        .to.be.revertedWith("already registered as a student");
//    });
//});
//
//  describe("registerInstructor", function () {
//    it("Should register a new instructor", async function () {
//      await registrationContract.registerInstructor("Jane", "Doe", "Female", "jane.doe@example.com", 5);
//
//      expect(await registrationContract.instructorCount()).to.equal(1);
//      expect(await registrationContract.isInstructor(instructor1.address)).to.equal(true);
//    });
//
//    it("Should not allow an instructor to register twice", async function () {
//      await registrationContract.registerInstructor("Jane", "Doe", "Female", "jane.doe@example.com", 5);
//
//      await expect(registrationContract.registerInstructor("John", "Doe", "Male", "john.doe@example.com", 10))
//        .to.be.revertedWith("already an instructor");
//    });
//
//    it("Should not allow an unverified instructor to call onlyVerifiedInstructors function", async function () {
//      await registrationContract.registerInstructor("Jane", "Doe", "Female", "jane.doe@example.com", 5);
//
//      const registrationContractAsInstructor = registrationContract.connect(instructor1);
//      await expect(registrationContractAsInstructor.verifyInstructors([instructor1.address]))
//        .to.be.revertedWith("Not a verified instructor");
//    });
//});
//
//  describe("fireInstructor", function () {
//    it("Should remove an instructor", async function () {
//      await registrationContract.registerInstructor("John", "Doe", "Male", "john.doe@example.com", 10);
//      await registrationContract.fireInstructor(instructor1.address);
//
//      expect(await registrationContract.instructorCount()).to.equal(0);
//      expect(await registrationContract.isInstructor(instructor1.address)).to.equal(false);
//    });
//
//    it("Should not allow a non-admin to call the function", async function ()
//     {
//    const registrationContractAsStudent = registrationContract.connect(student1);
//    await expect(registrationContractAsStudent.fireInstructor(instructor1.address))
//    .to.be.revertedWith("Only admin can call this function");
//    });
//
//    it("Should not allow a non-existent instructor to be fired", async function () {
//        await expect(registrationContract.fireInstructor(instructor1.address))
//          .to.be.revertedWith("Instructor not found");
//    });
//});
//
//    describe("verifyInstructors", function () {
//        it("Should only allow an admin to call the function", async function () {
//        const registrationContractAsInstructor = registrationContract.connect(instructor1);
//        await expect(registrationContractAsInstructor.verifyInstructors([instructor1.address]))
//        .to.be.revertedWith("Only admin can call this function");
//    });
//
//    it("Should verify instructors", async function () {
//        await registrationContract.registerInstructor("John", "Doe", "Male", "john.doe@example.com", 10);
//        await registrationContract.registerInstructor("Jane", "Doe", "Female", "jane.doe@example.com", 5);
//      
//        await registrationContract.verifyInstructors([instructor1.address, instructor2.address]);
//        expect(await registrationContract.isInstructorVerified(instructor1.address)).to.equal(true);
//        expect(await registrationContract.isInstructorVerified(instructor2.address)).to.equal(true);
//    });
//      
//      it("Should not verify an unregistered instructor", async function () {
//        await expect(registrationContract.verifyInstructors([instructor1.address]))
//          .to.be.revertedWith("Instructor not found");
//    });
//   });
//});