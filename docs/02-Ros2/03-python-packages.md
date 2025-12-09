# Chapter 3: ROS2 Python Packages

## 3.1 Creating a ROS2 Python Package

Developing ROS2 applications in Python involves creating a dedicated package. This package structure helps organize nodes, message definitions, and launch files.

### 3.1.1 Workspace Setup

A ROS2 workspace is a directory where you develop and build your packages. It typically contains `src` (source code), `build`, `install`, and `log` directories.

#### 3.1.1.1 Colcon Build System

Colcon is the build tool used in ROS2. It allows for building multiple packages efficiently and managing their dependencies.

##### 3.1.1.1.1 Colcon Commands

Common `colcon` commands include `colcon build`, `colcon test`, and `colcon clean`, which are used for compiling, testing, and cleaning packages, respectively.

## 3.2 Python Node Development

Writing ROS2 nodes in Python utilizes the `rclpy` client library, which provides the necessary APIs for interacting with the ROS2 graph.

### 3.2.1 Publishers and Subscribers

Python nodes can implement publishers to send data to topics and subscribers to receive data from topics, facilitating inter-node communication.

#### 3.2.1.1 Callback Functions

Subscribers use callback functions to process incoming messages. These functions are executed whenever a new message arrives on the subscribed topic.

##### 3.2.1.1.1 Threading in Callbacks

For complex or long-running callback functions, it's important to consider threading or asynchronous programming to avoid blocking the main ROS2 event loop.
