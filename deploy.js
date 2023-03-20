const hre = require("hardhat");
//const { ethers } = hre;
const { ethers } = require("ethers");


async function deploy() {
    // Deploy Certification
    const Certification = await ethers.getContractFactory("Certification");
    const certification = await Certification.deploy();
  
    // Deploy CourseModule
    const CourseModule= await ethers.getContractFactory("CourseModule");
    const courseModule= await CourseModule.deploy(Certification.address);
  
    // Deploy Managed
    const Managed = await ethers.getContractFactory("Managed");
    const managed = await Managed.deploy(courseModule.address);

    // Deploy Managed
    const Registration = await ethers.getContractFactory("Registration");
    const registration = await Managed.deploy(registration.address);

    // Deploy Managed
    const WEB3EDU = await ethers.getContractFactory("WEB3EDU");
    const wEB3EDU = await Managed.deploy(wEB3EDU.address);

    console.log("Certification deployed to:", certification.address);
    console.log("CourseModule deployed to:", courseModule.address);
    console.log("Managed deployed to:", managed.address);
  }
  deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
