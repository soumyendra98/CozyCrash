# CMPE-272-Term-Project


    COUCH SURFERS
    A Project Report
    Presented 
    CMPE-272
    Fall, 2022


**By**

Soumyendra Srivastava
Tanuja Reddy Maligireddy
Namratha Kurapati
Sravani Raparla
Ninad Marathe
Copyright © 2022
Soumyendra Srivastava,Tanuja Reddy Maligireddy,Namratha Kurapati,Sravani Raparla,Ninad Marathe
ALL RIGHTS RESERVED

**ABSTRACT**
 

**Acknowledgements**


We'd like to express our gratitude and appreciation to everyone who helped us complete this project. Mr. Andrew Bond, our professor, deserves special mention for his aid, stimulating suggestions, and encouragement throughout the fabrication process and report writing. We are grateful to every one of our classmates, especially our friends, who volunteered their time to help and support us in the development of our project.



**Table of Contents**


**Chapter 1 Introduction**

1.1  Project goals and objectives

1.2  Problem and motivation

1.3  Project application and impact    

1.4  Project results and deliverables    

1.5  Market research                 

1.6  Project report structure     

**Chapter 2 Project Background and Related Work**

2.1  Background and used technologies

2.2 State-of-the-art technologies

2.3  Literature survey

**Chapter 3 System Requirements and Analysis**

3.1Domain and business requirements

3.2Customer-oriented requirements

3.3 System function requirements

3.4System behavior requirements

3.5	System performance and non-functional requirements

3.6	System context and interface requirements

3.7	Technology and resource requirements
 
**Chapter 4 System Design**

4.1.   System architecture design

4.2.   System data and database design (for software project only)

4.3.   System interface and connectivity design

4.4.   System user interface design (for software project only)

4.5.   System component API and logic design (for software project only)

4.6    System design problems, solutions, and patterns

**Chapter 5 System Implementation**

5.1.   System implementation summary

5.2.   System implementation issues and resolutions

5.3.   Used technologies and tools
 
**Chapter 6 System Testing and Experiment**

6.1    Testing and experiment scope

6.2    Testing and experiment approaches

6.3.   Testing report (or case study results)
 
**Chapter 7 Conclusion and Future Work**

7.1 Project summary

7.2 Future work
 
**References**

[1] …

…

Appendix

Appendix 1 [Title]  	(for example, your selected hardware/software standard)

Appendix 2 [Title]  	(for example, your detailed algorithms for your solutions)
 

**List of Figures**

Figure 1. Figure Title.............................................................................................. Page No.

Figure 2. Figure Title.............................................................................................. Page No.
…

Figure M. Figure Title---------------------------------------------------------------------- Page No.

**List of Tables**

Table 1. Table Title................................................................................................ Page No.

Table 2. Table Title................................................................................................ Page No.
…
 
Table N. Table Title................................................................................................ Page No.

**Chapter 1.  Introduction**
 
**1.1 Project goals and objectives**

Nowadays, due to advancements in information technology and transportation, people's ability to connect to distant areas has been significantly strengthened, both in terms of accessing knowledge and their actual ability to be mobile. A rising trend is international travel. The world's most remote regions are now more easily accessible than ever. Millions of individuals use the Internet to trade hospitality, which provides an alternative to traditional tourism as a means of travel.
Couchsurfing connects visitors from across the world with hosts in their communities to exchange hospitality.   Couchsurfing is acknowledged as a sophisticated mode of transportation, bringing new types of visitor experiences and scenarios. It allows users to create unique experiences by hosting and surfing with other users rather than staying in hotels or visiting tourist attractions. It provides members more than simply free housing, including meaningful relationships, cultural interaction, and self-development, with the mission to "change the world one couch at a time."


**1.2 Problem statement and solution:**

There has been a growing trend in the range of tourism activities available. People are more interested in traveling than ever before as a result of having access to so much information. With the additional opportunities that technology affords, more alternative forms of conventional tourism have also developed. One of the quickly expanding trends is the phenomena of online hospitality networks, where people's online acquaintances seek to arrange in-person encounters. The Internet opened the door for a number of different hospitality exchange services in the 1990s, even though some networks only had a few hundred users globally. The largest hospitality exchange service to date in terms of membership size, geographic scope, and activities available is Couch Surfing.

Our project creates a fresh opportunity to interact with people from around the world and learn about their daily lives.   The CouchSurfing app platform connects travelers using the ask and offer approach. Being a mobile traveler, our client is seeking for a straightforward layout that makes it simple for visitors to find the rooms and services they want.

**1.3 Project application and impact:**

Couchsurfing is a platform that connects travelers with potential hosts who offer accommodation. Finding a place to stay is only one aspect of the trip; the main emphasis is on making friends. Both hosts and visitors are encouraged to do a variety of things, such as cook together, have a drink, and much more.
The guest can offer value to the interaction by sharing a dish, learning a new joke, or inviting the host to their home, even when the host is well-versed in their city and knows where to go and what to see. In conclusion, visitors will have no trouble locating the ideal hosts in their travel destinations in order to locate a free place to stay and enjoy themselves.


**1.4 Project results and expected deliverables**

Our couch surfing initiative is a one-stop destination where users may offer their services as hosts to strangers or travelers, even for no fee or for a small fee.
Offers for rooms can be found on the map or as regular cards on the page with an image slider and more information.
The user has the option of filtering the rooms by price or city. This project has a ton of features, and we can add even more.
This project can also be used for ventures involving renting out real estate or apartments.
Deliverables:

1) GitHub URL: https://github.com/soumyendra98/CMPE-272-Term-Project
2)Report

1.5	Project report Structure

The structure of this project report is followed as per the Table of Contents.

●         	Introduction

●         	Project Background and Related Work

●         	System Requirements and Analysis

●         	System Design

●         	System Implementation

●         	System Testing and Experiment

●         	Conclusion and Future Work

 
**Chapter 2   Background and Related Work**
 
**2.1  Background and used technologies**

The most significant advantage of Couchsurfing is meeting locals. When they invite you into their home for free, they usually expect more than just exchanging a few. Talking with your hosts and getting to know them will teach you more about the country you visited than any tour. It is a website that allows people to stay temporarily in a series of other people's homes, making it easier for them to adjust to life in a new place. This project's front-end development is done with React.Js. MongoDB, Express.js, and Node.js are used on the backend. The Jenkins pipeline is used for both continuous integration and delivery. Docker handles containerization, while Github handles version control.Bcrypt.js is used to hash passwords and securely store them in the database. We also used jwt tokens to secure the APIs.

 
**2.2  State-of-the-art**
Currently, there are many platforms that can be accessed for couch surfing but Searching for a host can be time consuming. For this we have developed a user-friendly website where users can access the information and look for the details they want without losing much of their time. In most of the cases, there will be host dependency and the host may not turn up at the right time. For this our website gives details of the host prior to the user's visit and makes sure the host and the users are in sync with each other. If the user would like to request anything before he comes, they could ask the host for that and ask him to post pictures. This allows users to make sure that they have everything ready by the time they arrive at their destinations.
 
**2.3  Literature survey**

 We came to the conclusion that our project could be improved by drawing inspiration from the operation of a number of different online websites related to couch surfing after conducting research into the inner workings of these. It discusses various aspects of developing an website, as well as the most effective solution to the difficulties involved in doing so. Furthermore, the most effective solution to the difficulties associated with developing such a website is outlined. In addition, we conducted a survey with various couch surfers who use couch surfing on a regular basis. We discovered that these users must spend a significant amount of time locating the appropriate location. They do not always get what they need because the items they require are not always available at the location and they do not have the option to request prior to going there. In light of all of this, we determined that we should design a website in the style of online couch surfing, with a user-friendly interface that allows the user to request information prior to arriving at the destination.
 
**Chapter 3   System Requirements and Analysis**

**3.1.   Domain and business Requirements**

Business requirements of the portal: User: Applying and setting up rooms on our website: Making it available to user in an efficient manner. Landlords: Renting up their rooms for couch surfing on the website

 
**Major classes being used:**

**1. Admin/Volunteer**

○ They have access to add new rooms

○ They can update the rooms

○ They can remove the rooms

○ They can confirm room checkups

**2. User**

○ They are able to view all the rooms available 

○ They are able to update their individual rooms

○ They are able to give rating to rooms

○ They are able to set ranges for the prices


**3.2.   Customer-oriented requirements**



Expected user groups for the portal are as follows: 

● Guest

● Admin

● Users


**3.3.   System (or component) function requirements**

**Functional Requirements:**

● Register and authenticate Users/ Guest / Admins

● View Rooms available on the website

● Book a Room

● Add a new place to the system

● Add user details

| Component | Input | Output | Behavior |
| --- | --- | --- | --- |
| +AddRentedRooms() | Category details such as: Name, Description, Image, Review | Adding a new room in the portal | This function is accessible by Admin and User |
| +ViewRentedRooms() | Category details such as: Name, Description, Image, Review | Loads category in the homepage | This function is accessible by Guest, Admin and User |
| +ModifyRentedRooms()| Changes in particular category | Changes the category details | This function is accessible by the Admin, User|
| +DeleteRentedRooms() | Removal of particular category | Removes all the identifiers in the category | This function is accessible by the Admin, User |
| +GetRegistered | Getting your details saved on the portal | Details added on the portal | This function is accessible by the Guest |



**3.4.   System performance and non-functional requirements**

**Security:** We have encrypted the password by hashing it and storing it in the database. And each time a user enters a password, it is hashed and compared to the password stored in the database. 

The user passwords are therefore stored securely in our database.

**Availability:** We have maintained the back up of the data during an event of data loss so that the website remains highly available at all times.

**Usability:** The portal is easy to navigate and comprehend. It follows intuitive visual hierarchies to direct the user to the right functionalities.

**Maintainability:** The portal is easy to maintain and change with a minimum number of dependencies.


**3.5.System behavior requirements**

| **Sr No.** | **Context** | **Environment** |
| --- | --- | --- |
| **1.** | **Deployment** | **Heroku** |
| **2.** | **Load Balancing** | **ELB** |
| **3.** | **Version Control** | **Github** |
| **4.** | **Development IDE** | **Visual Studio Code** |

**3.7.Technology and resource requirements**

Technology and resource requirements

List of technologies used:

1. React.Js: Used it for frontend
2. MongoDB: We used it as our database to store user data as well as product-related
data.
3. Node.Js: Used it as a backend framework
4. Express.Js: Used it as backed framework
5. Jenkins: Used for CICD
6. Github: Used for version control


**Chapter 5   System Implementation**
**5.1.   System implementation summary**

Couch Surfers is a full-stack web application created using MERN Stack (Mongo, Express, React, and Node) to satisfy multi-functional features ranging from creating new rooms for rent and managing Rooms and Users. We used Heroku to deploy our application and also to ensure continuous integration and continuous deployment (CICD) using the Github triggers. Our application is open-source and the source code is available on GitHub. 

**5.2.   System implementation issues and resolutions**

The issues we faced while implementing are 

**1. Security:** We had to store sensitive user data like passwords for authentication, and storing them without encryption is risky. The resolution to that issue was by using BCrypt password-hashing function to ensure protected passwords and JWT tokens to ensue application integrity. 

**2. Deployment:** We had to set up a highly available, secure, low-cost, and reliable infrastructure for our application that can automatically scale as the number of users increases or decreases. For that, we leveraged  Heroku, as it is easy to setup and scale as well as it has Github triggers which help with CI/CD.
 
**5.3.   Used technologies and tools**
MongoDB: We used it as our database to store data.
ExpressJS and Node.JS: Used it for Server Side.
React: Used it for creating Client Side. 
GitHub: Used it as a host for git version control.
Heroku: Used it for Deployment and CICD.
Draw.io: Used it for creating diagrams.













**Chapter 6   System Testing and Experiment**
 
**6.1    Testing and experiment scope**
		 	 	 		
We performed the following types of testing on our application to cover all possible test scenarios.

**6.2    Testing and experiment approaches**
		 	 	 		
Every team member accepted ownership of every feature. Every feature on the list has been thoroughly tested. Furthermore, each feature was evaluated for each position and its intended behavior on an individual basis. To ensure a fully functional application, all features and implementations must be completed. We used a Top-Down approach to test the UI components. The top-level module is created and tested first in a top-down integration test. Furthermore, it is tested further and the immediate sub-modules are integrated. If the module to be integrated has not been written and tested, stubs are required to complete the integration testing with a top-level module. We began with Login/Sign up and worked our way up to order confirmation.
			
The module's team developer had tested the following for all of the UI components in the portal:

**Functional Evaluation: **

Ensure that users can enter a valid username.
Examine whether the login page accepts the user's credentials.
Incorrect username verification fails login.
Verify invalid username and invalid password entered at the same time fail.
The password field is insufficiently long to validate input data.
The password field is far too long.
Validation should be applied to input fields.
Non-functional :
Check that the service is unavailable.
Appropriate 404 page error message.
Database authorized accessibility. 

**6.3    Testing and experiment**

**Chapter 7   Conclusion and Future Work**
 
**7.1 Project summary**
		 	 	 		
We were successful in creating a web application that couch surfers can access from anywhere. They can check availability and book accommodations in seconds. This application can help couch surfers save time. It saves them time on bookings. It makes inventory management simple for users. It enables users to travel the world with ease. We used cutting-edge technologies like NodeJS, ReactJS, and MongoDB. To deploy the application, we found cost-effective and widely available solutions. Our project would undoubtedly be beneficial to all couch surfers planning to travel the world.
					

**7.2 Future work**

We are planning to incorporate a few features in the future to our project and they are chatbot which works with AI and NLP technologies like spacy and chatterbot using python, a messenger for direct communication between surfers and renters using FB chat messenger libraries, an analytics dashboard for Visualizing the price statistics for renters using powerbi, a notification service via voice, text, email and social channels using push.js Notification Framework
 







**References**

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/bucket-list-travels-santorini.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Banff-to-Jasper-Icefields-Parkway-Lake-Louise.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Things-to-in-Winter-in-Canada-Pond-Hockey-Lake-Louise.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Adventure-couples-Maldives-Bungalow.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/vietnam-sapa-rice-terraces.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/amalfi-coast-road-trips-positano-view.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Cities-in-Italy-Amalfi-Coast-Towns.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Adventures-for-couples-Iguazu-Falls-1.jpg

https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/beautiful-places-in-the-world-tigers-nest.jpg

https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-venice-gettyimages-489741024-1505338894.jpg?crop=1xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1280x1919/japan-gettyimages-137098062.jpg?resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/marrakech-gettyimages-152834676.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/tamil-nadu-gettyimages-152415224.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/gettyimages-116147513.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/myanmar-gettyimages-137671616_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/abu-dhabi-gettyimages-487888511_1.jpg?crop=1xw:0.9998272287491361xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/lisbon-gettyimages-488108027_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/moscow-gettyimages-552609685_1.jpg?crop=1xw:0.9999035865792518xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1461268850-paris-gettyimages-182176376.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/india.jpg?crop=1.0xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/2048x3071/gallery-nyc-gettyimages-486543121-1.jpg?resize=980:*

https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barcelona-parc-guell-at-sunset-royalty-free-image-1571860792.jpg?crop=1xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camel-in-desert-with-pyramids-background-royalty-free-image-1571860986.jpg?crop=1xw:1xh;center,top&resize=980:*

https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cano-cristales-colombia-gettyimages-1655139359.jpg?crop=1xw:1xh;center,top&resize=980:*


