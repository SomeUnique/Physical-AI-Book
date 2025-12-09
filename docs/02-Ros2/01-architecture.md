# Chapter 1: ROS2 Architecture

## 1.1 Overview of ROS2

ROS2 (Robot Operating System 2) is a flexible framework for writing robot software. It is a set of software libraries and tools that help in building complex robot applications.

### 1.1.1 Evolution from ROS1

ROS2 was developed to address limitations in ROS1, particularly concerning real-time performance, multi-robot systems, and enterprise-level applications. It features a re-architected core based on DDS (Data Distribution Service).

#### 1.1.1.1 DDS as the Communication Layer

DDS is an open international standard for real-time, scalable, and high-performance data exchange. It enables direct, peer-to-peer communication between nodes, unlike ROS1's centralized master.

##### 1.1.1.1.1 DDS Implementations

Several DDS implementations are available, such as Fast-RTPS, CycloneDDS, and OpenDDS, which can be configured as the RMW (ROS Middleware) layer in ROS2.

## 1.2 Key Architectural Components

ROS2's architecture is modular, consisting of several key components that work together to facilitate robust robot software development.

### 1.2.1 Nodes

Nodes are individual computational processes that perform specific tasks. They are the fundamental building blocks of a ROS2 system, encapsulating algorithms or device drivers.

#### 1.2.1.1 Node Lifecycle

ROS2 nodes have a defined lifecycle, allowing for managed states like unconfigured, inactive, active, and finalized, which aids in creating reliable systems, especially for safety-critical applications.

##### 1.2.1.1.1 Managing Node States

The `ros2 lifecycle` command-line tool and client libraries can be used to transition nodes through their lifecycle states, enabling dynamic system reconfiguration and error handling.
