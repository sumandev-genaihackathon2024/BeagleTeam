Certainly! Below is a simplified example of how you can create a Spring Boot backend API to return a JSON response with case data, assuming the data is stored in an Azure Cosmos DB. This example assumes you've set up your Azure Cosmos DB connection and repository as discussed previously.

1. Case Entity
First, define the Case entity to map the data from Cosmos DB:

java
Copy code
package com.crm.backend.model;

import com.azure.spring.data.cosmos.core.mapping.Container;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;

@Container(containerName = "Cases")
public class Case {

    @Id
    private String caseNumber;
    private String subject;
    private String status;
    private String dateTimeOpened;
    private String caseOwnerAlias;

    @PersistenceConstructor
    public Case(String caseNumber, String subject, String status, String dateTimeOpened, String caseOwnerAlias) {
        this.caseNumber = caseNumber;
        this.subject = subject;
        this.status = status;
        this.dateTimeOpened = dateTimeOpened;
        this.caseOwnerAlias = caseOwnerAlias;
    }

    // Getters and Setters
    public String getCaseNumber() { return caseNumber; }
    public void setCaseNumber(String caseNumber) { this.caseNumber = caseNumber; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getDateTimeOpened() { return dateTimeOpened; }
    public void setDateTimeOpened(String dateTimeOpened) { this.dateTimeOpened = dateTimeOpened; }

    public String getCaseOwnerAlias() { return caseOwnerAlias; }
    public void setCaseOwnerAlias(String caseOwnerAlias) { this.caseOwnerAlias = caseOwnerAlias; }
}
2. Case Repository
Create a repository interface to interact with Cosmos DB:

java
Copy code
package com.crm.backend.repository;

import com.azure.spring.data.cosmos.repository.CosmosRepository;
import com.crm.backend.model.Case;
import org.springframework.stereotype.Repository;

@Repository
public interface CaseRepository extends CosmosRepository<Case, String> {
    // You can define custom queries here if needed
}
3. Case Service
The service layer will handle the business logic:

java
Copy code
package com.crm.backend.service;

import com.crm.backend.model.Case;
import com.crm.backend.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaseService {

    @Autowired
    private CaseRepository caseRepository;

    public List<Case> getAllCases() {
        return caseRepository.findAll();
    }
}
4. Case Controller
Create a REST controller to expose the API endpoint:

java
Copy code
package com.crm.backend.controller;

import com.crm.backend.model.Case;
import com.crm.backend.service.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
public class CaseController {

    @Autowired
    private CaseService caseService;

    @GetMapping
    public List<Case> getAllCases() {
        return caseService.getAllCases();
    }
}
5. Cosmos DB Configuration
Ensure your CosmosDbConfig is correctly set up as discussed earlier.

6. Application Properties
Your application.properties file should have the correct configuration for Azure Cosmos DB:

properties
Copy code
spring.cloud.azure.cosmos.endpoint=<your-cosmos-db-endpoint>
spring.cloud.azure.cosmos.key=<your-cosmos-db-key>
spring.cloud.azure.cosmos.database=<your-database-name>
spring.main.allow-bean-definition-overriding=true
7. Run the Application
When you run your Spring Boot application, the API endpoint /api/cases will return a JSON array of all the cases stored in your Azure Cosmos DB.

Example JSON Response
When you hit the /api/cases endpoint, the response might look like this:

json
Copy code
[
  {
    "caseNumber": "00001026",
    "subject": "Subject A",
    "status": "New",
    "dateTimeOpened": "2024-05-04T05:52:00",
    "caseOwnerAlias": "Agent1"
  },
  {
    "caseNumber": "00001027",
    "subject": "Subject B",
    "status": "New",
    "dateTimeOpened": "2024-06-04T05:52:00",
    "caseOwnerAlias": "Agent2"
  },
  {
    "caseNumber": "00001028",
    "subject": "Subject C",
    "status": "New",
    "dateTimeOpened": "2024-07-04T05:52:00",
    "caseOwnerAlias": "Agent3"
  }
]
Final Thoughts
This setup allows your frontend to dynamically pull case data from the backend API, which in turn retrieves the data from Azure Cosmos DB. You can customize the code further based on specific needs or additional fields.


