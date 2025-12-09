# Chapter 2: Gazebo Simulation

## 2.1 Introduction to Gazebo

Gazebo is an open-source 3D robot simulator that is widely used in the robotics community, particularly with ROS/ROS2. It accurately simulates populations of robots in complex indoor and outdoor environments.

### 2.1.1 Key Features of Gazebo

Gazebo offers a robust physics engine, high-quality graphics, and interfaces for sensors and actuators, making it suitable for a wide range of robotics research and development.

#### 2.1.1.1 Physics Engine Integration

Gazebo supports several powerful physics engines, such as ODE, Bullet, Simbody, and DART, allowing users to choose the one best suited for their simulation needs regarding accuracy and performance.

##### 2.1.1.1.1 Customizing Physics Parameters

Users can customize various physics parameters like gravity, friction coefficients, and damping for individual links and joints to fine-tune the realism of their robot's interactions within the simulated world.

## 2.2 Building Gazebo Worlds

Creating detailed and functional simulation environments in Gazebo involves defining static and dynamic objects, terrains, and light sources using SDF (Simulation Description Format).

### 2.2.1 SDF File Format

SDF is an XML-based format used to describe robots, environments, and their interactions in Gazebo. It is more expressive than URDF for world descriptions.

#### 2.2.1.1 Adding Static Models

Static models, such as buildings, furniture, or obstacles, can be easily imported or defined directly in SDF to create realistic and challenging environments for robot navigation and manipulation tasks.

##### 2.2.1.1.1 Dynamic Objects and Gripping

Dynamic objects, which can be manipulated by the robot, can also be defined. Special considerations are needed for simulating gripping mechanisms and the interaction with deformable objects.
