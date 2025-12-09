# Chapter 2: ROS2 Core Concepts

## 2.1 Communication Mechanisms

ROS2 provides several communication mechanisms that allow nodes to exchange information, forming the backbone of any distributed robot application.

### 2.1.1 Topics

Topics are the primary means of data streaming in ROS2. Nodes publish messages to topics, and other nodes subscribe to those topics to receive the messages.

#### 2.1.1.1 Message Types

ROS2 messages are defined in `.msg` files, specifying the data structure. These are then code-generated into various programming languages.

##### 2.1.1.1.1 Custom Message Definition

Users can define their own custom message types to handle specific data structures required by their applications, enhancing flexibility and reusability.

## 2.2 Services

Services in ROS2 enable synchronous request/reply communication between nodes, suitable for operations that require an immediate response.

### 2.2.1 Service Clients and Servers

A service server node offers a service, and a service client node sends a request and waits for a reply.

#### 2.2.1.1 Service Definition

Services are defined in `.srv` files, which specify the request and response data types. Similar to messages, these are also code-generated.

##### 2.2.1.1.1 Designing Service Interfaces

When designing service interfaces, it's important to consider clear input/output parameters and appropriate error handling to ensure robust communication.
