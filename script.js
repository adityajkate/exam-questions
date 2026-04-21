// Preloader Logic
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('examAppPreloaderSeen')) {
        document.body.classList.add('preloading');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            document.body.classList.remove('preloading');
            
            // Allow animation to run, then restore scroll
            setTimeout(() => {
                document.body.style.overflow = '';
                localStorage.setItem('examAppPreloaderSeen', 'true');
            }, 1000); // 1s matches CSS transition min-height
            
        }, 1500); // Wait 1.5s reading centered text
        
    }
});

// Countdown Timer Logic
const examSchedule = [
    { name: 'DAV', date: new Date("May 11, 2026 14:30:00").getTime() },
    { name: 'CSS', date: new Date("May 13, 2026 14:30:00").getTime() },
    { name: 'SEPM', date: new Date("May 15, 2026 14:30:00").getTime() },
    { name: 'ML', date: new Date("May 18, 2026 14:30:00").getTime() },
    { name: 'DC', date: new Date("May 20, 2026 14:30:00").getTime() }
];

function updateCountdown() {
    const now = new Date().getTime();
    let nextExam = null;
    
    for (const exam of examSchedule) {
        if (exam.date > now) {
            nextExam = exam;
            break;
        }
    }

    const timerElement = document.getElementById("countdown-timer");
    const labelElement = document.getElementById("countdown-label");

    if (!nextExam) {
        labelElement.innerHTML = "ALL EXAMS";
        timerElement.innerHTML = "OVER";
        return;
    }

    const distance = nextExam.date - now;
    labelElement.innerHTML = `${nextExam.name} EXAM IN`;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const fmt = (n) => n < 10 ? '0' + n : n;
    
    timerElement.innerHTML = `${days}d ${fmt(hours)}h ${fmt(minutes)}m ${fmt(seconds)}s`;
}

// Initial Call and Interval
updateCountdown();
setInterval(updateCountdown, 1000);

// Initialize Lenis for smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Inject animation styles
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .question {
        transition: all 0.3s ease;
        padding: 1.5rem 1rem;
        margin: 0 -1rem;
        border-radius: 8px;
        border-bottom: 1px solid var(--color-border);
    }
    .question:last-child {
        border-bottom: 1px solid var(--color-border);
    }
    .question:hover {
        background: rgba(255, 77, 0, 0.03);
        transform: translateX(8px);
        border-color: transparent;
    }

    .marks-header.ten-marks {
        background: var(--color-dark);
        color: var(--color-light);
    }
    
    .marks-header.five-marks {
        background: var(--color-accent);
        color: var(--color-light);
    }
    
    .year-badge {
        display: inline-block;
        background: rgba(10, 10, 10, 0.05);
        color: var(--color-text-secondary);
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin: 0 0.2rem;
        border: 1px solid rgba(10, 10, 10, 0.1);
        vertical-align: middle;
        white-space: nowrap;
    }

    .question-diagram {
        max-width: 100%;
        margin-top: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        display: block;
    }
`;
document.head.appendChild(style);

// Embedded Data
const subjectData = {
  "dc": {
    "name": "Distributed Computing",
    "content": "UNIT 1 - Introduction to Distributed Systems\r\n\r\n5 Marks :\r\nWhat are various issues in distributed system? / Explain minimum 5 issues. - May 2023, Dec 2023, May 2024\r\nWhat is distributed computing? Explain any four issues of distributed computing. - Dec 2024\r\nDefine distributed systems. Discuss their goals and challenges. - May 2025\r\nExplain the client-server model in distributed systems. - May 2025\r\nWhat is middleware? Discuss the services offered by middleware. - May 2025\r\n\r\n10 Marks :\r\nWhat is distributed computing? Explain various system models of distributed computing - Dec 2023\r\nWhat are the goals of a distributed system? Explain various system models of distributed computing. - Dec 2024\r\n\r\nUNIT 2 - Communication\r\n\r\n5 Marks :\r\nDifference between RMI and RPC. - Dec 2023\r\nWhat is group communication? Explain 1:M and M:1 group communication. - Dec 2024.\r\n\r\n10 Marks :\r\nExplain the message communication model covering transient synchronous, transient asynchronous, persistent synchronous, and persistent asynchronous communication. - May 2023, May 2024\r\nRPC working question: What is / Define Remote Procedure Call (RPC)? Explain the working in detail. - May 2023, Dec 2023, May 2024, Dec 2024, May 2025\r\nDifferentiate between message-oriented communication and stream-oriented communication - Dec 2023\r\nDiscuss the role of group communication in distributed systems. - May 2025\r\n\r\nUNIT 3 - Synchronization\r\n\r\n5 Marks:\r\nJustify how Ricart-Agrawala’s algorithm optimizes / optimized message overhead in achieving mutual exclusion. - May 2023, Dec 2023, May 2024, Dec 2024\r\nExplain the election algorithm. - Dec 2023\r\nExplain Suzuki-Kasami algorithm. - Dec 2023\r\nDifferentiate between physical clocks and logical clocks. - May 2025\r\n\r\n10 Marks:\r\nExplain Suzuki-Kasami Broadcast Algorithm of mutual exclusion. - May 2023, May 2024, Dec 2024\r\nExplain the process of synchronization with respect to physical and logical clocks. - May 2023.\r\nWhat is a logical clock? Why are logical clocks needed in a distributed system? Explain Lamport algorithm. - Dec 2023\r\nExplain Lamport’s logical clock algorithm with an example. - May 2025.\r\nExplain Bully Election algorithm with the help of an example. - May 2023, May 2024.\r\nExplain Maekawa’s algorithm in detail and also specify properties of Quorum Set. - May 2023, May 2024, Dec 2024\r\nPhysical Clock Synchronization. - Dec 2023\r\nDiscuss the need of the coordinator. Also explain any one algorithm for coordinator selection.- Dec 2024\r\nDescribe the Ricart-Agrawala algorithm for distributed mutual exclusion.- May 2025\r\n\r\nUNIT 4 - Resource and Process Management\r\n\r\n5 Marks:\r\nWhat are / Describe the desirable features of a global scheduling algorithm. - May 2023, May 2024\r\nCompare process and thread / processes and threads. - May 2023, May 2024\r\nExplain code migration and its techniques. - Dec 2024\r\nWhat is process migration? Explain its significance in distributed systems. - May 2025\r\n\r\n10 Marks:\r\nCompare load sharing to task assignment and load balancing strategies for scheduling processes in a distributed system. -  May 2023, Dec 2023, May 2024, Dec 2024\r\nWrite a note on / Describe code migration / Describe code migration issues in detail. -  May 2023, Dec 2023, May 2024\r\nLoad balancing techniques. - Dec 2023\r\nDiscuss the task assignment approach in global scheduling algorithms. - May 2025\r\nExplain the concept of load balancing and load sharing in distributed systems. - May 2025\r\n\r\n\r\nUNIT 5 - Consistency, Replication and Fault Tolerance\r\n\r\n10 Marks:\r\nExplain / Discuss different data-centric consistency models in detail. - May 2023, May 2024\r\nDiscuss various client-centric consistency models. - Dec 2023\r\nWhat is the difference between data-centric consistency models and client-centric consistency models? Explain one model of each. - Dec 2024\r\nWhat is replication? Discuss data-centric consistency models.  May 2025\r\nFault tolerance. Dec 2023\r\nWhat is fault tolerance? Explain various types of failure models.  - Dec 2024\r\nExplain the concept of fault tolerance and process resilience in distributed systems. - May 2025\r\n\r\nUNIT 6 - Distributed File Systems and Name Services \r\n\r\n10 Marks:\r\nFeatures of DFS and model file service architecture -  May 2023, May 2024, Dec 2024\r\nExplain Hadoop Distributed File System (HDFS). - Dec 2023\r\nDiscuss the architecture and features of the Hadoop Distributed File System (HDFS). - May 2025\r\nExplain Andrew File System (AFS) in detail. - Dec 2023, Dec 2024\r\nAnalyze the architecture and performance of AFS compared to NFS. Discuss the advantages and limitations of each. - May 2024\r\nExplain the file-caching schemes used in distributed file systems. - May 2025"
  },
  "ml": {
    "name": "Machine Learning",
    "content": "UNIT 1 - Introduction to Machine Learning\r\n\r\n5 Marks :\r\nWhat is Machine Learning? Explain the steps in developing a machine learning application. - May 2023, Dec 2024\r\nDifferentiate between supervised and unsupervised learning. - May 2023, Dec 2023, Dec 2024\r\nDifferentiate different Machine Learning approaches. What is Cross Validation? Discuss bias variance trade-off with suitable diagram. - May 2024\r\nExplain the overfitting and underfitting with example. - May 2023\r\nWrite short note on overfitting and underfitting of model. - Dec 2023\r\nWith reference to below figure 1, 2, 3 explain under-fitting and over-fitting. Identify best fit and overfitted line. - May 2025 [Diagram]\r\nList various applications of machine learning. Describe the SPAM / Non-SPAM email filtering application in detail. - Dec 2024\r\nBuild the confusion matrix and find accuracy, precision, recall and F1 score for the given spam / not-spam data. - May 2025\r\n\r\n10 Marks :\r\nHow to calculate Performance Measures by Measuring Quality of model. - Dec 2023\r\nIn the classification model, evaluate Accuracy, Precision, Recall and F1-Score from given TN, TP, FP and FN values. - May 2024\r\n\r\nUNIT 2 - Mathematical Foundation for ML\r\n\r\n5 Marks :\r\nExplain SVD and its applications. - Dec 2023, May 2024\r\nList out and explain the applications of SVD. - May 2023\r\nExplain Eigen values and vectors. - May 2024\r\nDiagonalize the matrix A.  May 2023, Dec 2023, Dec 2024 [Diagram]\r\n\r\n10 Marks :\r\nWhat is the trace of a matrix? What are its properties? - May 2024\r\nFind Singular Value Decomposition of the given matrix and indicate insights about linear transformations conveyed by this method. - May 2024 [Diagram]\r\nFind SVD of matrix A which is shown below. - Dec 2024 [Diagram]\r\nFind the eigenvalues of the 2 × 2 matrix A. Also find eigen vectors - May 2025 [Diagram]\r\nDiagonalize the matrix. - May 2024, May 2025 [Diagram]\r\n\r\nUNIT 3 - Linear Models\r\n\r\n5 Marks :\r\nLeast Square Regression for classification. - May 2023, Dec 2024\r\nDifferentiate between Ridge and Lasso Regression / Ridge and Lasso Regression. - May 2023, Dec 2023, Dec 2024\r\nDiscuss Support Vector Machines - May 2024\r\nIn a SVM explain the kernel trick. - May 2025\r\n\r\n10 Marks :\r\nFind the least-square / linear regression equation for the given data. -  May 2023, Dec 2023, Dec 2024, May 2025 [Diagram]\r\nWrite a short note on (a) Multivariate Regression and (b) Regularized Regression. - May 2023, Dec 2024\r\nExplain Least-Squares Regression for classification. - Dec 2023\r\nExplain the need for regularization. Compare Lasso and Ridge Regression techniques for regularization. - May 2025\r\n\r\nUNIT 4 - Clustering\r\n\r\n5 Marks :\r\nExplain Hebbian Learning rule / Write short note on Hebbian Learning rule. - Dec 2023, Dec 2024\r\nExplain the Maximization algorithm for clustering. - Dec 2023\r\nWrite short note on maximum expectation algorithm. - May 2023\r\n\r\n10 Marks :\r\nDesign a Hebb net to implement OR function (consider bipolar inputs and targets). - May 2023\r\nState the algorithm for Hebb learning rule. Design Hebb network for AND gate. State weights and bias assumptions clearly. Assume bipolar inputs and targets. - May 2025\r\nExplain the Expectation Maximization algorithm with neat flowchart. - May 2025\r\n\r\nUNIT 5 - Classification models\r\n\r\n5 Marks :\r\nDraw and explain biological neural networks and compare them with artificial neural networks. - May 2023\r\nDraw and explain Biological neuron. - Dec 2024\r\nDraw and explain a biological neuron. Compare ANN with BNN. - May 2025\r\nExplain in detail the MP neuron model. - May 2023, Dec 2024\r\nImplement XOR function using McCulloch Pitts Model. - May 2024\r\nExplain Perceptron model with Bias. - Dec 2023\r\nWhat are Activation functions? Explain Binary, Bipolar, Continuous, and Ramp activation functions. - May 2023\r\nArtificial Neural Network(s) - May 2023, Dec 2024\r\nPerceptron Neural Network. - May 2023, Dec 2024\r\nWrite a short note on LMS-Widrow Hoff. - Dec 2023\r\n\r\n\r\n10 Marks :\r\nDraw a block diagram of the Error Back Propagation Algorithm and explain with the flow chart the Error Back Propagation Concept. - May 2023, Dec 2023, Dec 2024\r\nWhat are activation functions? Explain Binary, Bipolar, Continuous, and Ramp activation functions. - Dec 2023, Dec 2024\r\nDiscuss different activation functions used in Neural Networks (Formula, Graph and Range). - May 2024\r\nImplement the ANDNOT logic functions using McCulloch Pitts Model. - May 2024 \r\nImplement OR function using single layer perceptron - May 2024\r\nExplain Multilayer perceptron with a neat diagram and its working with flowchart or algorithm. - May 2024\r\nExplain Back Propagation Neural Network with flowchart. - May 2024\r\nDraw Delta Learning Rule (LMS-Widrow Hoff) model and explain it with a training process flowchart. - May 2023, Dec 2024\r\nExplain various activation functions with appropriate diagrams, equations, ranges and their applications in real world. - May 2025\r\nExplain back error propagation with neat diagram and weight updation equation. - May 2025\r\nImplement OR function using single layer perceptron upto 2 epochs. Assume initial values of weights and learning rate as follows w1=w2=b=0, threshold θ = 0.2 and learning rate (α) = 1. - May 2025\r\nExplain the Perceptron Neural Network. - Dec 2023\r\n\r\nUNIT 6 - Dimensionality Reduction\r\n\r\n5 Marks :\r\nFeature selection methods for dimensionality reduction. - May 2023, Dec 2024\r\nWhat is curse of dimensionality? - May 2025\r\n\r\n\r\n10 Marks :\r\nWhat is the curse of dimensionality? Explain the PCA dimensionality reduction technique in detail. - May 2023, Dec 2023, Dec 2024\r\nWhy Dimensionality Reduction is very Important step in Machine Learning? Apply PCA on the given data and find the principal component - May 2024\r\nUse Principal Component Analysis to arrive at the transformed matrix for the given data - May 2025 [Diagram]\r\n"
  },
  "sepm": {
    "name": "Software Engineering & Project Management",
    "content": "UNIT 1 - Introduction to Software Engineering\r\n\r\n5 Marks :\r\nDefine software engineering and explain umbrella activities - May 2023, Dec 2024.\r\nWhat are different umbrella activities - May 2025\r\nExplain the Agile process model - Dec 2023\r\nCompare Agile and traditional software development models - May 2024\r\nCompare Agile and waterfall models - May 2025\r\nScrum Model - May 2024\r\nKanban model and extreme programming - May 2025\r\n\r\n10 Marks :\r\nDescribe the waterfall model and evolutionary process model - May 2023\r\nDescribe the waterfall model and incremental process model - Dec 2023\r\nWhat are the Agile Methodologies? Explain any of them - May 2023\r\nExplain with diagram CMM model - May 2024, May 2025 \r\n\r\nUNIT 2 - Requirements Analysis and Cost Estimation\r\n\r\n5 Marks :\r\nExplain functional and non-functional requirements - May 2023, Dec 2023\r\nWhat is cost estimation? Assume a system for simple students registration in a course is planned with approximately 10,000 LOC; compute development effort and development time. - Dec 2024\r\n\r\n10 Marks :\r\nElaborate COCOMO model / method of cost estimation - May 2023, Dec 2023, Dec 2024, May 2025\r\nWhat is the importance of requirement analysis? Explain different Requirement Engineering tasks - May 2024, May 2025\r\nDevelop SRS for University Management system - May 2023\r\nDevelop the SRS of Hospital Management system - Dec 2023, Dec 2024\r\nPrepare SRS for Railway Reservation System - May 2024\r\n\r\nUNIT 3 - Design Engineering\r\n\r\n5 Marks :\r\nExplain the golden rules for interface design - May 2023\r\nWhat is the golden rule for User Interface Design - May 2024, May 2025\r\nExplain cohesion and coupling - May 2024\r\nWhat is cohesion and coupling - May 2025\r\n\r\n10 Marks :\r\nExplain the user interface design in details with example - Dec 2023\r\nExplain Software Design concepts - May 2024\r\nExplain Design concepts and elaborate Architectural Design styles - May 2025\r\nSoftware design patterns - Dec 2024\r\n\r\nUNIT 4 - Software Risk, Configuration Management\r\n\r\n5 Marks :\r\nExplain formal technical review - Dec 2024\r\nCompare FTR and walkthroughs - May 2025\r\nFTR - May 2024\r\nSCM Process - May 2024\r\n\r\n10 Marks :\r\nIllustrate the SCM process - May 2023\r\nIllustrate the SCM process of Software quality management - Dec 2023\r\nDiscuss Software configuration management - Dec 2024\r\nExplain Software Change management with example - May 2025\r\nWhat is Risk management? Discuss Common sources of risk in IT projects - May 2023\r\nWhat is Risk management? Discuss RMMM plan for risk management - Dec 2023\r\nIdentify any two risks in online examination system. Perform risk assessment and prepare RMMM plan for any one risk - May 2024\r\nDiscuss different categories of risk and create a risk table for the “next generation” word processing software project - Dec 2024, May 2025\r\nDescribe the details of FTR and Walkthrough - May 2023, Dec 2023\r\nExplain software quality management with QA and QC - Dec 2024\r\n\r\nUNIT 5 - Software Testing and Maintenance\r\n\r\n5 Marks :\r\nDifference between white box and black box testing - May 2023\r\nDifferentiate White box and black box testing - Dec 2024\r\nSoftware Quality and quality factors - May 2025\r\nSoftware Reengineering - May 2024 \r\nReverse engineering and reengineering - May 2025\r\n\r\n10 Marks :\r\nDifferentiate between white box and black box testing - May 2024\r\nWrite test cases for input box accepting numbers between 1 and 1000 using Equivalence Partitioning and using Boundary Value Analysis - May 2025\r\nExplain software reverse engineering in details - May 2023\r\nExplain software maintenance and different types of maintenance - Dec 2024\r\nReverse engineering process - Dec 2024\r\nUnit testing and integration testing - Dec 2024\r\n\r\nUNIT 6 - IT Project Management and Project Scheduling \r\n\r\n5 Marks :\r\nExplain the 4 P’s of Project Management - Dec 2023\r\nExplain W5HH Principle - May 2024\r\nPMBOK Knowledge Areas - May 2024, May 2025\r\nDefine following terms: Project, Critical path, Earned value, Process, Scope - May 2024\r\n\r\n\r\n10 Marks :\r\nWhat are the different phases in project life cycle with suitable example - May 2023\r\nWhat are the different phases in project life cycle explain with suitable example - Dec 2023\r\nExplain project scheduling and describe CPM and PERT - May 2023, Dec 2023, Dec 2024\r\nDraw AON diagram and find the critical path. Find the total float time for each path and list down the critical and non-critical activities. Find the total duration of the project - May 2024, May 2025 [Diagram-table]\r\nDiscuss project management techniques - Dec 2024\r\n\r\n\r\n"
  },
  "dav": {
    "name": "Data Analytics & Visualization",
    "content": "UNIT 1 - Introduction to Data Analytics and Life Cycle\r\n\r\n5 Marks :\r\nWhat is an analytic sandbox, and why is it important? - May 2023\r\nWhy is data analytics lifecycle essential? - May 2024\r\nList and explain different key roles for successful data analytics? - Dec 2024\r\nWhat are the common tools used for data preparation phase and model planning phase of data analytics life cycle. - Dec 2024\r\nKey roles in data analytics life cycle. - Dec 2024\r\nList and explain the various key roles for a successful analytics. - May 2025\r\n\r\n10 Marks :\r\nList and explain the main phases of the Data Analytics Lifecycle. - May 2023\r\nExplain the data analytics lifecycle. - Dec 2023\r\nExplain different phases in data analytics lifecycle.- May 2024\r\nList and explain different phases in data analytics lifecycle. - Dec 2024\r\nExplain the data analytics life cycle. - May 2025\r\n\r\nUNIT 2 - Regression Models\r\n\r\n5 Marks :\r\nWhat is regression? What is simple linear regression? - May 2023\r\nEvaluating the Residuals in Linear regression. - May 2023\r\nThe regression lines of a sample are x + 6y = 6 and 3x + 2y = 10. Find (i) sample means x and y. (ii) coefficient of correlation between x and y. - Dec 2023\r\nDifferentiate between linear regression and logistic regression. - Dec 2023\r\nWhat is Stepwise regression? Explain its types. - May 2024\r\nDifferentiate Linear Regression and Logistic Regression. - Dec 2024\r\nStepwise regression - Dec 2024\r\nGeneralized Linear model - Dec 2024, May 2024\r\nExplain Logistic Response Function. - May 2025\r\nFitted value and residuals in Linear Regression. - May 2025\r\n\r\n10 Marks :\r\nDescribe how logistic regression can be used as a classifier. - May 2023\r\nSuppose everyone who visits a retail website gets one promotional offer or no promotion at all. We want to see if making a promotional offer makes a difference. What statistical method would you recommend for this analysis? (May 2023)\r\nFind two lines of regression from the following data: Age of husband (x) 25, 22, 28, 26, 35, 20, 22, 40, 20, 18; Age of wife (y) 18, 15, 20, 17, 22, 14, 16, 21, 15, 14. Estimate (i) the age of husband when the age of wife is 19 and (ii) the age of wife when the age of the husband is 30. - Dec 2023\r\nFit a regression equation to estimate β0, β1, and β2 to the following data of a transport company on the weights of 6 shipments, the distances they were moved and the damage of the goods that was incurred. Weight X1 (1000 kg): 4.0, 3.0, 1.6, 1.2, 3.4, 4.8; Distance X2 (100 km): 1.5, 2.2, 1.0, 2.0, 0.8, 1.6; Damage Y (Rs.): 160, 112, 69, 90, 123, 186. Estimate the damage when a shipment of 3700 kg is moved to a distance of 260 km. - Dec 2023\r\nFrom the following results, obtain two regression equations and estimate the yield when the rainfall is 29 cm and the rainfall when the yield is 600 kg. Yield in Kg./Rainfall in cm: Mean 508.4/26.7, SD 36.8/4.6, Coefficient of Correlation 0.52. - Dec 2023\r\nWhat is stepwise regression? State and explain different types of stepwise regression. - Dec 2023\r\nGeneralized linear model (GLM) - Dec 2023\r\nThe number of bacterial cells (y) per unit volume in a culture at different hours (x) is given below: x = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9; y = 43, 46, 82, 98, 123, 167, 199, 213, 245, 272. Fit lines of regression of y on x and x on y. Also, estimate the number of bacterial cells after 15 hours. - May 2024\r\nWhat is Logistic Regression? What are the similarities and differences between linear regression and logistic regression? - May 2024\r\nCalculating the regression equation of x on y and y on x from the following data and estimate x when y = 20. Also determine the value of correlation coefficient. x: 10, 12, 13, 17, 18; y: 5, 6, 7, 9, 13. - Dec 2024\r\nCalculate the linear regression using least square method for the given dataset. Independent Variable (X): 1, 2, 3, 4, 5; Dependent Variable (Y): 2, 4, 5, 4, 5. - May 2025\r\nFit a regression equation to estimate β0, β1 and β2 to the following data of a transport company on the weights of 6 shipments, the distances they were moved and the damage of the goods that was incurred. Weight X1 (1000 kg): 4.0, 3.0, 1.6, 1.2, 3.4, 4.8; Distance X2 (100 km): 1.5, 2.2, 1.0, 2.0, 0.8, 1.6; Damage(y): 160, 112, 69, 90, 123, 186. Estimate the damage when a shipment of 3700 kg is moved to a distance of 260 km. - May 2025\r\n\r\n\r\nUNIT 3 - Time Series\r\n\r\n5 Marks:\r\nWhy use autocorrelation instead of autocovariance when examining stationary time series?  - May 2023\r\nBox-Jenkins Methodology. - May 2023\r\nExplain components of time series? - May 2024\r\nWhat is time series analysis? Explain its components. - Dec 2024\r\nBox-Jenkins Methodology. - Dec 2024, May 2024, May 2025\r\n\r\n10 Marks:\r\nDifference between ARMA and ARIMA; when ARMA is appropriate - May 2023.\r\nBox-Jenkins intervention analysis - Dec 2023.\r\nTime series analysis - Dec 2023.\r\nARIMA model in detail; pros and cons - May 2024.\r\nBox-Jenkins Methodology -  May 2024.\r\nAR, MA, ARMA and ARIMA models in detail - Dec 2024.\r\nChoose/justify the analysis model for forecasting monthly average temperature from historical climate data - Dec 2024.\r\nAR and MA models in detail - May 2025.\r\nBuilding and evaluating an ARIMA model - May 2025.\r\n\r\n\r\nUNIT 4 - Text Analytics\r\n\r\n5 Marks:\r\nExplain term frequency (TF), document frequency (DF), and inverse document frequency (IDF). - Dec 2023\r\nExplain Term Frequency-Inverse Document Frequency (TF-IDF) with a suitable example. - May 2024\r\nExplain in brief steps of text analysis. - Dec 2024\r\nWhat are the application and use cases for text mining? - May 2025\r\nExplain TFIDF with an example. - May 2025\r\n\r\n10 Marks:\r\nList and explain methods that can be used for sentiment analysis. - May 2023\r\nList and explain the steps in the Text Analysis. - May 2023\r\nExplain with suitable example how the Term Frequency and Inverse Document Frequency are used in information retrieval.\r\nWhat is text mining? Enlist and explain the seven practice areas of text analytics. - Dec 2023\r\nExplain in detail seven practice areas of text analytics. - May 2024\r\nEnlist and explain the steps of text analysis. - May 2024\r\nExplain seven practice areas of text analytics. - Dec 2024\r\nWhat is a text summarizer? How does it work? Explain the difference between extractive summarization and abstractive summarization. - Dec 2024\r\nList and explain the steps in text analysis. - May 2025\r\n\r\nUNIT 5 - Data Analytics and Visualization with R\r\n\r\n5 Marks:\r\nData import and Export in R. (May 2023), (May 2024)\r\nExplain different data types in R with examples. (Dec 2024), (May 2025)\r\n\r\n10 Marks:\r\nDetecting dirty data in the data exploration phase using visualizations - May 2023.\r\nDifferent types of data visualizations in R - Dec 2023.\r\nExploratory Data Analysis - Dec 2023.\r\nHow EDA is performed in R - May 2024.\r\nData import and export in R - May 2024.\r\nData exploration vs presentation, with examples - Dec 2024.\r\nDifferent types of data visualization used in R - May 2025.\r\nRemoving dirty data using R - May 2025\r\n\r\nUNIT 6 - Data Analytics and Visualization with Python\r\n\r\n5 Marks:\r\nDifference between Pandas and NumPy. - May 2023\r\nSeaborn Library. - May 2023\r\nWhat is Pandas? State and explain key features of Pandas. - Dec 2023\r\nDifference between Matplotlib and Seaborn library. - May 2024\r\nWhat is Pandas? Explain features of Pandas. - Dec 2024\r\nWhat is Seaborn Library? State and explain key features of seaborn.  - May 2025\r\nPandas Library - May 2024\r\nBox Plot - May 2025\r\n\r\n10 Marks:\r\nRegression plot - May 2024\r\nExplain different types of data visualisation in Python programming language. - May 2024\r\nExplain following data visualization libraries in Python: Box plot, Violin plot, Pie chart, Histogram, Bar chart.  - Dec 2024\r\n\r\n"
  },
  "css": {
    "name": "Cryptography & System Security",
    "content": "UNIT 1 - Introduction & Number Theory\r\n\r\n5 Marks :\r\nDescribe Services and mechanisms - May 2023\r\nWhat is keyed and keyless transposition ciphers? - May 2023\r\nList with examples the different mechanisms to achieve security. - Dec 2023\r\nExplain with examples, keyed and keyless transposition ciphers - Dec 2023\r\nDefine the security mechanisms and attacks for OSI security architecture - May 2024\r\nDescribe steganography with example - Dec 2024\r\nExplain different mechanisms to achieve security. May 2025\r\n\r\n10 Marks :\r\nUse the playfair cipher with the keyword “example” to encipher “The algorithm name is playfair cipher”. - May 2023\r\nList different poly-alphabetic substitution ciphers. Encrypt “The key is hidden under the door” using playfair cipher with keyword “domestic”. - Dec 2023\r\nList different poly-alphabetic substitution ciphers. Use Hill cipher to encrypt the text “short”. The key to be used is “hill”. -May 2024\r\nExplain Hill cipher with suitable example. - Dec 2024\r\nList different poly-alphabetic substitution ciphers. Encrypt “The key is hidden under the door” using playfair cipher with keyword “domestic”. - May 2025\r\nExplain Hill cipher with example. - May 2025\r\n\r\nUNIT 2 - Block Ciphers & Public Key Cryptography\r\n\r\n5 Marks :\r\nECB and CBC block cipher - May 2023\r\nExplain the different modes of block ciphers - Dec 2023\r\nExplain Triple DES in short - Dec 2023\r\nExplain the different modes of block ciphers. - May 2024, May 2025\r\n\r\n10 Marks :\r\nExplain DES algorithm with reference to: block size and key size, need of expansion permutation, role of S-box, possible attacks on DES. - May 2023\r\nExplain Diffie hellman key exchange algorithm. - May 2023\r\nUser A and B want to use RSA to communicate securely. A chooses public key as (7,119) and B chooses public key as (13,221). Calculate their private keys, produce the ciphertext for m = 10, and formulate the key for authentication. - Dec 2023\r\nWhat is need of Diffie-Hellman algorithm? User A and B choose p = 23, g = 5, with secret keys 6 and 15 respectively. Compute the secret key they share. - Dec 2023\r\nExplain DES algorithms in detail. - May 2024\r\nExplain DES algorithm. What do you mean by double DES and triple DES. - Dec 2024\r\nExplain RSA with example. - Dec 2024\r\nExplain AES algorithm in detail. - Dec 2024\r\nExplain RSA algorithm with example. - May 2025\r\nWhat is need of Diffie-Hellman algorithm? Explain the algorithm with example. - May 2025\r\nExplain Triple DES in detail. - May 2025\r\nDefine digital signature. P = 7, Q = 17, E = 5 as public key; find the cipher text for 5 and decrypt it back to get plain text - May 2024\r\n\r\nUNIT 3 - Cryptographic Hashes, Message Digests and Digital Certificates\r\n\r\n5 Marks :\r\nX.509 - May 2023\r\nDifferentiate MD5 and SHA-1 algorithms. - Dec 2023\r\nList and explain characteristics needed in secure hash function. - Dec 2023\r\nWrite properties of hash function. - Dec 2024\r\nDifferentiate MD5 and SHA-1 algorithms. - May 2025\r\n\r\n10 Marks :\r\nWhat are properties of hash function? Compare MD-5 and SHA hash algorithm. - May 2023\r\nGive the format of X.509 digital certificate and explain the use of a digital signature in it. - Dec 2023, May 2025\r\nExplain MD-5 hash function. Compare with SHA 256. - May 2024\r\nDifferentiate between MD5 and SHA256. - Dec 2024\r\nWrite a note on Digital Certificate: X.509 and Public Key Infrastructure. - Dec 2024\r\nList and explain characteristics needed in secure hash function. Compare various hash in detail. - May 2025\r\n\r\nUNIT 4 - Digital signature schemes and authentication Protocols\r\n\r\n5 Marks :\r\nWhat is Digital Signature? Why digital signatures are required? - Dec 2024\r\nWhy digital signature and digital certificates are required? - May 2023\r\nDifferentiate between Digital signature and digital certificate - May 2024\r\nWhat do you understand by digital signatures and digital certificates? Explain digital signature scheme RSA - May 2023\r\n\r\n10 Marks :\r\nDefine digital signature. Explain any digital signature algorithm in detail. - Dec 2023\r\nExplain various authentication protocols in detail. - May 2024\r\nExplain Needham Schroeder Authentication protocol. - May 2024, Dec 2024\r\nDefine digital signature. Explain any digital signature algorithm in detail. - May 2025\r\n\r\nUNIT 5 - System Security\r\n\r\n5 Marks :\r\nList and explain security requirements of database. - Dec 2023\r\nList and explain vulnerabilities in windows operating system. - Dec 2023\r\nList various types of security that are applied on database. - May 2024\r\nList and explain various vulnerabilities in operating system. - Dec 2024\r\nList and explain security requirements of database. - May 2025\r\n\r\n10 Marks :\r\nExplain memory and address protection in detail. Write a note on file protection. - May 2023\r\nBriefly explain database security. What do you understand by multilevel database security - May 2023\r\nExplain memory and address protection in detail. Write a note on file protection - Dec 2023\r\nList and explain in detail security features of operating system - May 2024\r\nWhat are database security requirements? What do you understand by Inference attacks? Explain about multilevel database security - Dec 2024\r\nExplain memory and address protection in detail. Write a note on file protection - May 2025\r\n\r\nUNIT 6 - Web security\r\n\r\n5 Marks :\r\nExplain clickjacking and session hijacking - May 2023\r\nWeb browser attacks - May 2023\r\nCross site request forgery - May 2023\r\nDNS attack - May 2023\r\nEmail Attack - May 2023\r\nExplain phishing and list different types of phishing techniques - Dec 2023\r\nExplain the different types of firewalls and mention the layer in which they operate - Dec 2023\r\nDefine web security. Explain the role of cookies - May 2024\r\nExplain the different types of firewalls and layer in which it operate - May 2024\r\nExplain penetration testing - Dec 2024\r\nExplain different types of phishing techniques - May 2025\r\n\r\n10 Marks :\r\nEnlist various functions of protocols of SSL. Explain the phases of handshake protocol. - May 2023\r\nList the functions of the different protocols of SSL. Explain the handshake protocol - Dec 2023\r\nExplain session hijacking and management - Dec 2023\r\nExplain the role of SSH. What is the difference between HTTP and HTTPS? - May 2024\r\nExplain Penetration testing in detail - May 2024\r\nList and explain security requirements of a website - May 2024\r\nExplain web security in detail - Dec 2024\r\nList the functions of the different protocols of SSL. Explain the handshake protocol - May 2025\r\nExplain session hijacking and management - May 2025\r\nWrite a note on user authentication and session management - Dec 2024\r\n\r\n"
  }
};
const diagramsMap = {
  "ml_UNIT1_Q6_5M": [
    "Diagrams/ML/UNIT1_Q6_5M.png"
  ],
  "ml_UNIT2_Q2_10M": [
    "Diagrams/ML/UNIT2_Q2_10M.png"
  ],
  "ml_UNIT2_Q3_10M": [
    "Diagrams/ML/UNIT2_Q3_10M.png"
  ],
  "ml_UNIT2_Q4_10M": [
    "Diagrams/ML/UNIT2_Q4_10M.png"
  ],
  "ml_UNIT2_Q4_5M": [
    "Diagrams/ML/UNIT2_Q4_5M.png"
  ],
  "ml_UNIT2_Q5_10M": [
    "Diagrams/ML/UNIT2_Q5_10M(1).png",
    "Diagrams/ML/UNIT2_Q5_10M(2).png"
  ],
  "ml_UNIT3_Q1_10M": [
    "Diagrams/ML/UNIT3_Q1_10M(1).png",
    "Diagrams/ML/UNIT3_Q1_10M(2).png",
    "Diagrams/ML/UNIT3_Q1_10M(3).png",
    "Diagrams/ML/UNIT3_Q1_10M(4).png"
  ],
  "ml_UNIT6_Q3_10M": [
    "Diagrams/ML/UNIT6_Q3_10M.png"
  ],
  "sepm_UNIT6_Q4_10M": [
    "Diagrams/SEPM/UNIT6_Q4_10M.png"
  ]
};

// Parser
function parseQuestions(text, codeStr) {
    const units = [];
    let currentUnit = null;
    let currentMarks = null;

    const lines = text.split('\n').map(l => l.trim());
    
    for (const line of lines) {
        if (!line) continue;
        
        if (/^UNIT\s+\d+/i.test(line)) {
            currentUnit = {
                title: line,
                questions5: [],
                questions10: []
            };
            units.push(currentUnit);
            currentMarks = null;
        } else if (line.toLowerCase().startsWith('5 marks')) {
            currentMarks = 5;
        } else if (line.toLowerCase().startsWith('10 marks')) {
            currentMarks = 10;
        } else if (currentUnit && currentMarks) {
            let qText = line;
            let hasDiagram = false;
            
            if (/\[Diagram[^\]]*\]/i.test(qText)) {
                hasDiagram = true;
                qText = qText.replace(/\[Diagram[^\]]*\]/gi, '').trim();
            }
            
            // Clean up years from wrappers and commas
            qText = qText.replace(/[\(\[\-,\.\s]*(May|Dec)\s+20\d{2}[\)\],\.\s]*/gi, match => {
                const m = match.match(/(May|Dec)\s+20\d{2}/i);
                return m ? ` <span class="year-badge">${m[0]}</span> ` : match;
            }).trim();
            
            const questionObj = {
                text: qText,
                diagram: hasDiagram
            };
            
            if (currentMarks === 5) {
                currentUnit.questions5.push(questionObj);
            } else {
                currentUnit.questions10.push(questionObj);
            }
        }
    }
    
    // Inject Image Arrays
    units.forEach((unit, uIdx) => {
        unit.questions5.forEach((q, qIdx) => {
            const diagsKey = `${codeStr}_UNIT${uIdx+1}_Q${qIdx+1}_5M`;
            q.images = diagramsMap[diagsKey] || [];
        });
        unit.questions10.forEach((q, qIdx) => {
            const diagsKey = `${codeStr}_UNIT${uIdx+1}_Q${qIdx+1}_10M`;
            q.images = diagramsMap[diagsKey] || [];
        });
    });

    return units;
}

const hero = document.querySelector('.hero');
const subjectsGrid = document.querySelector('.subjects-grid');
const countdownWidget = document.querySelector('.top-controls');
const siteFooter = document.querySelector('.minimal-footer');
const body = document.body;

// Create questions view container
const questionsView = document.createElement('div');
questionsView.className = 'questions-view';
body.insertBefore(questionsView, document.querySelector('script'));

// Event listeners for cards
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        const subjectCode = card.dataset.subject;
        showSubject(subjectCode);
    });
});

function buildImagesHtml(images) {
    if (!images || images.length === 0) return '';
    return images.map(src => `<img src="${src}" class="question-diagram" loading="lazy" />`).join('');
}

function showSubject(code) {
    const data = subjectData[code];
    if (!data) return;
    
    const units = parseQuestions(data.content, code);
    
    // Hide grid & hero
    hero.style.display = 'none';
    subjectsGrid.style.display = 'none';
    if (countdownWidget) countdownWidget.style.display = 'none';
    if (siteFooter) siteFooter.style.display = 'none';
    
    // Build view
    let html = `
        <button class="back-button fade-in-up" style="animation-delay: 0.1s">← Back to Subjects</button>
        <div class="subject-header fade-in-up" style="animation-delay: 0.2s">
            <h2 style="color: var(--color-accent); font-size: clamp(3rem, 10vw, 8rem); margin-left: -0.04em;">${code.toUpperCase()}</h2>
            <div class="subject-name" style="font-size: 1.5rem; margin-top: 1rem; color: var(--color-text-secondary);">${data.name}</div>
        </div>
    `;
    
    let delay = 0.3;
    units.forEach(unit => {
        html += `<div class="unit fade-in-up" style="animation-delay: ${delay}s">
            <div class="unit-title" style="color: var(--color-text-primary); font-size: 2rem;">${unit.title}</div>`;
            
        if (unit.questions5.length > 0) {
            html += `<div class="marks-section">
                <div class="marks-header five-marks" style="border-radius: 4px; padding: 0.5rem 1rem;">5 MARKS</div>`;
            unit.questions5.forEach((q, idx) => {
                html += `<div class="question">
                    <strong>${idx + 1}.</strong> ${q.text}
                    ${q.diagram && q.images.length === 0 ? `<span class="diagram-note">[Diagram]</span>` : ''}
                    ${buildImagesHtml(q.images)}
                </div>`;
            });
            html += `</div>`;
        }
        
        if (unit.questions10.length > 0) {
            html += `<div class="marks-section">
                <div class="marks-header ten-marks" style="border-radius: 4px; padding: 0.5rem 1rem;">10 MARKS</div>`;
            unit.questions10.forEach((q, idx) => {
                html += `<div class="question">
                    <strong>${idx + 1}.</strong> ${q.text}
                    ${q.diagram && q.images.length === 0 ? `<span class="diagram-note">[Diagram]</span>` : ''}
                    ${buildImagesHtml(q.images)}
                </div>`;
            });
            html += `</div>`;
        }
        
        html += `</div>`;
        delay += 0.1;
    });
    
    questionsView.innerHTML = html;
    
    // Wait for DOM
    requestAnimationFrame(() => {
        questionsView.classList.add('active');
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true });
    });
    
    // Attach back button listener
    questionsView.querySelector('.back-button').addEventListener('click', hideSubject);
}

function hideSubject() {
    questionsView.classList.remove('active');
    setTimeout(() => {
        questionsView.innerHTML = '';
        hero.style.display = 'flex';
        subjectsGrid.style.display = 'grid';
        if (countdownWidget) countdownWidget.style.display = 'flex';
        if (siteFooter) siteFooter.style.display = 'flex';
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true });
    }, 50);
}
