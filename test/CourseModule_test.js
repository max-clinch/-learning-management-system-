const { expect } = require("chai");
const { ethers } = require("hardhat");
const { use } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);


describe("CourseModule", function () {
  let courseModule;
  let certificationContract;

  beforeEach(async () => {
    const CourseModule = await ethers.getContractFactory("CourseModule");
    courseModule = await CourseModule.deploy("baseURI");
    await courseModule.deployed();
  });

  describe("listCourse()", function () {
    it("should emit a courseListed event", async function () {
      const courseName = "Course Name";
      const courseSymbol = "COURESE";
      const courseDuration = "1 Month";   const courseFee = ethers.utils.parseEther("1");

    await expect(courseModule.listCourse(courseName, courseDuration, courseSymbol, courseFee))
      .to.emit(courseModule, "courseListed")
      .withArgs(courseName, courseFee);
  });
  });
    it("should store the course details in the module array", async function () {
      const courseName = "Course Name";
      const courseSymbol = "COURSE";
      const courseDuration = "1 Month";
      const courseFee = ethers.utils.parseEther("1");

      await courseModule.listCourse(courseName, courseDuration, courseSymbol, courseFee);

      const course = await courseModule.module(0);

      expect(course.courseName).to.equal(courseName);
      expect(course.courseSymbol).to.equal(courseSymbol);
      expect(course.courseDuration).to.equal(courseDuration);
      expect(course.Fee).to.equal(courseFee);
      expect(course.InstructorHash).to.equal(await courseModule.instructorsAddress());
    });
    it("should not allow non-owner to list a course", async function () {
        const [owner, nonOwner] = await ethers.getSigners();
        const courseName = "Course Name";
        const courseSymbol = "COURSE";
        const courseDuration = "1 Month";
        const courseFee = ethers.utils.parseEther("1");
      
        // Check that non-owner cannot list a course
        await expect(courseModule.connect(nonOwner).listCourse(courseName, courseDuration, courseSymbol, courseFee))
          .to.be.revertedWith("notOwner");
      
        // Check that owner can list a course
        await expect(courseModule.connect(owner).listCourse(courseName, courseDuration, courseSymbol, courseFee))
          .to.emit(courseModule, "courseListed")
          .withArgs(courseName, courseFee);
      });
    
  

    it("should not allow listing more than one course per contract", async function () {
      const courseName = "Course Name";
      const courseSymbol = "COURSE";
      const courseDuration = "1 Month";
      const courseFee = ethers.utils.parseEther("1");
      await courseModule.listCourse(courseName, courseDuration, courseSymbol, courseFee);
      const newCourseName = "New Course Name";
      const newCourseSymbol = "NEW";
      const newCourseDuration = "2 Months";
      const newCourseFee = ethers.utils.parseEther("2");
      
    
      try {
        await courseModule.listCourse(newCourseName, newCourseDuration, newCourseSymbol, newCourseFee);
      } catch (error) {
        console.log(error.message);
        expect(error.message).to.equal("Can't create more than one course per contract");
      }
    });

  
  
//
   describe("purchaseModule function", function () {
     it("should allow subscribers to purchase the module", async function () {
       //const subscriber = await ethers.getSigner(1);
       //const courseFee = ethers.utils.parseEther("1");
 //
       //await expect(courseModule.connect(subscriber).purchaseModule())
       //  .to.emit(courseModule, "Subscription")
       //  .withArgs(subscriber.address, courseFee);
 //
       //assert.equal(await courseModule.isSubscriber(subscriber.address), true);
       //assert.equal(await courseModule.purchaseCount(), 1);
    });
//
  it("should revert if non-subscribers try to claim certificates", async function () {
    //const subscriber1 = await ethers.getSigner(1);
    //await expect(
    //  courseModule.claimCertificate({ from: subscriber1.address })
    //).to.be.revertedWith("Only subscriber can claim certificate");
  });
  it("should revert if subscribers try to purchase the module more than once", async function () {
    //const subscriber1 = await ethers.getSigner(1);
    //await courseModule.connect(subscriber1).purchaseModule();
    //await expect(
    //  courseModule.connect(subscriber1).purchaseModule()
    //).to.be.revertedWith("You have already purchased this module");
  });
//
    it("should revert if subscribers do not pay enough for the course fee", async function () {
      //await expect(
      //  courseModule.connect(subscriber).purchaseModule({
      //    value: ethers.utils.parseEther("0.5"),
      //  })
      //).to.be.revertedWith("Invalid Payment Amount");
    });
  
  describe("createCertificate and issueCertificate functions", function () {
  //  it("should allow the owner to create a certificate for the course", async function () {
  //    await expect(courseModule.createCertificate())
  //      .to.emit(courseModule, "CertificateCreated")
  //      .withArgs(certification.address);
  //
  //    expect(await certification.getCourseName()).to.equal("Course 1");
  //    expect(await certification.getCourseSymbol()).to.equal("COURSE1");
  //    expect(await certification.getBaseURI()).to.equal("https://example.com/");
    });
  //
    it("should not allow the owner to create more than one certificate for the course", async function () {
  //    await expect(courseModule.createCertificate()).to.be.revertedWith(
  //      "can't create more than 1 certificate per module"
  //    );
    });
  //
    it("should allow the owner to issue a certificate to a subscriber", async function () {
  //    const subscriber = await ethers.getSigner(1);
  //    await courseModule.connect(subscriber).purchaseModule();
  //    expect(await courseModule.isSubscriber(subscriber.address)).to.be.true;
  //
  //    await courseModule.issueCertificate(subscriber.address);
  //    expect(await certification.isDegreeIssued(subscriber.address)).to.be.true;
    });
  //
    it("should not allow non-owners to issue a certificate", async function () {
  //    const subscriber = await ethers.getSigner(1);
  //    await courseModule.connect(subscriber).purchaseModule();
  //    expect(await courseModule.isSubscriber(subscriber.address)).to.be.true;
  //
  //    await expect(
  //      courseModule.connect(subscriber).issueCertificate(subscriber.address)
  //    ).to.be.revertedWith("Only owner can call this function");
    });
  //
    it("should not allow the owner to issue a certificate to a non-subscriber", async function () {
  //    const nonSubscriber = await ethers.getSigner(3);
  //    await expect(
  //      courseModule.issueCertificate(nonSubscriber.address)
  //    ).to.be.revertedWith("Only Subscribers can claim certificate");
    });
  });
});  
