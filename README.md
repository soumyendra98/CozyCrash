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
| +ModifyRentedRooms()
 | Changes in particular category | Changes the category details | This function is accessible by the Admin, User
 |
| +DeleteRentedRooms() | Removal of particular category | Removes all the identifiers in the category | This function is accessible by the Admin, User |
| +GetRegistered | Getting your details saved on the portal | Details added on the portal | This function is accessible by the Guest |




