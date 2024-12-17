CREATE TABLE `employeeapp`.`employee` ( `empId` VARCHAR(9) NOT NULL , `firstName` VARCHAR(20) NOT NULL , `lastName` VARCHAR(20) NOT NULL , `fullName` VARCHAR(160) NOT NULL , `DOB` DATE NOT NULL , 
`gender` VARCHAR(1) NOT NULL , `martialStatus` VARCHAR(20) NOT NULL , `nationality` VARCHAR(30) NOT NULL , `ethnicity` VARCHAR(30) NOT NULL , PRIMARY KEY (`empId`)) ENGINE = InnoDB;


CREATE TABLE `employeeapp`.`employee_details` ( `empId` VARCHAR(9) NOT NULL , `empDesignation` VARCHAR(60) NOT NULL , `company` VARCHAR(60) NOT NULL , `department` VARCHAR(60) NOT NULL , `empType` VARCHAR(60) NOT NULL , `workLocation` VARCHAR(60) NOT NULL , PRIMARY KEY (`empId`)) ENGINE = InnoDB;